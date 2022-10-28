import { useRef } from 'react'
import * as THREE from 'three'

export default function Terrain(props: JSX.IntrinsicElements['mesh']) {

    const ref = useRef<THREE.Mesh>(null!)

    const GROUND_HEIGHT = -50

    return (
        <mesh
            {...props}
            ref={ref}
            visible
            position={[0, GROUND_HEIGHT, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeBufferGeometry attach="geometry" args={[600, 600, 1, 1]} />
            <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0}
                metalness={0}
            />
        </mesh>
    )
}