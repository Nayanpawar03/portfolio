"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"
import Laptop from "./3DComponents/Laptop";
import Field from "./3DComponents/Field";
import { useEffect, useState } from "react";

export default function Scene({ active, sceneChanger }: { active: boolean, sceneChanger: (value: number) => void }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleMediaQueryChange = (event: any) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <div className={`h-screen ${!active && "hidden"}`}>
            <Canvas frameloop={active ? "always" : "never"} color="blue" camera={{ position: [1, 8, 8], fov: 33 }} >
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 4}
                    minPolarAngle={Math.PI / 4}
                    enablePan={false}
                />
                <Laptop sceneChanger={sceneChanger} />
                {!isMobile && <Field options={{ bW: 0.12, bH: 1, joints: 5 }} width={40} instances={7000} />}
            </Canvas>
        </div>
    );
}