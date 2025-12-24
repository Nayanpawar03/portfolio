// Based on https://codepen.io/al-ro/pen/jJJygQ by al-ro, but rewritten in react-three-fiber
import * as THREE from "three"
import { useRef, useMemo } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { getAttributeData } from "@/lib/getAttribute"
import "@/shaders/grassMaterial"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Field({ options = { bW: 0.12, bH: 1, joints: 5 }, width = 40, instances = 7000 }: { options: any, width: number, instances: number }) {
    const { bW, bH, joints } = options
    const materialRef = useRef()
    const [texture, alphaMap] = useLoader(THREE.TextureLoader, ["/resources/blade_diffuse.jpg", "/resources/blade_alpha.jpg"])
    const attributeData = useMemo(() => getAttributeData(instances, width), [instances, width])
    const baseGeom = useMemo(() => new THREE.PlaneGeometry(bW, bH, 1, joints).translate(0, bH / 2, 0), [bH, bW, joints])
    useFrame((state) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        materialRef.current.uniforms.time.value = state.clock.elapsedTime / 4
    })
    return (
        <>
            <mesh >
                <instancedBufferGeometry index={baseGeom.index} attributes-position={baseGeom.attributes.position} attributes-uv={baseGeom.attributes.uv}>
                    <instancedBufferAttribute attach="attributes-offset" args={[new Float32Array(attributeData.offsets), 3]} />
                    <instancedBufferAttribute attach="attributes-orientation" args={[new Float32Array(attributeData.orientations), 4]} />
                    <instancedBufferAttribute attach="attributes-stretch" args={[new Float32Array(attributeData.stretches), 1]} />
                    <instancedBufferAttribute attach="attributes-halfRootAngleSin" args={[new Float32Array(attributeData.halfRootAngleSin), 1]} />
                    <instancedBufferAttribute attach="attributes-halfRootAngleCos" args={[new Float32Array(attributeData.halfRootAngleCos), 1]} />
                </instancedBufferGeometry>
                {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    <grassMaterial ref={materialRef} map={texture} alphaMap={alphaMap} toneMapped={false} />
                }
            </mesh>
        </>
    )
}
