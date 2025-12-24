import { Float, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Vector3 } from "three";

const lookAt = new Vector3(0, 0, -5);
const finalPosition = new Vector3(0, 1, 0);
const front = new Vector3(1, 8, 8);
const left = new Vector3(-8, 8, 0);
const right = new Vector3(8, 8, 0);
const approximation = 0.5;

export default function Laptop({ sceneChanger }: { sceneChanger: (value: number) => void }) {
    const [clicked, setClicked] = useState(false);
    const [transition, setTransition] = useState(false);
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])


    useFrame(state => {

        if (clicked) {
            const { camera } = state;
            const cameraPosition = camera.position;
            state.camera.lookAt(lookAt);
            let result: Vector3;
            if (cameraPosition.z < 0) {
                console.log("backside detected")
                console.log(cameraPosition.x < 0 ? "left" : "right")
                const intermediate = new Vector3().lerpVectors(cameraPosition, cameraPosition.x < 0 ? left : right, 0.001)
                result = new Vector3().lerpVectors(intermediate, front, 0.01)
            } else {
                result = new Vector3().lerpVectors(state.camera.position, front, 0.01);
            }

            const finalPos = new Vector3().lerpVectors(result, finalPosition, 0.1);

            state.camera.position.set(finalPos.x, finalPos.y, finalPos.z);
            state.camera.updateProjectionMatrix();
        }

        if (transition) {
            setHovered(false)
            sceneChanger(1);
        }

        if (Math.abs(state.camera.position.y - finalPosition.y) < approximation) {
            setTransition(true);
        }

    })

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleKeydown = (e: any) => {
            if (e.key.toString().toLowerCase() === "enter") {
                console.log("enter clicked !");
                setClicked(true);
            }
        }

        document.addEventListener("keydown", handleKeydown)

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        }
    }, [clicked])

    const computer = useGLTF("/laptop.glb");

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2} onClick={() => { setClicked(true) }}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))} onPointerOut={() => setHovered(false)}
        >
            <mesh >
                <primitive
                    object={computer.scene}
                    scale={7}
                />
            </mesh>
        </Float>
    )
}
