import * as React from 'react'
import * as THREE from 'three'
import * as Fiber from '@react-three/fiber'

function Box(props: JSX.IntrinsicElements['mesh']) {

    const ref = React.useRef<THREE.Mesh>(null!)
  
    return (
      <mesh
        {...props}
        ref={ref}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={0x008000} />
      </mesh>
    )
}

function Sphere(props: JSX.IntrinsicElements['mesh']) {

    const ref = React.useRef<THREE.Mesh>(null!)
  
    return (
      <mesh
        {...props}
        ref={ref}
        scale={0.5}>
        <sphereGeometry />
        <meshStandardMaterial color={0x0000FF} />
      </mesh>
    )
}

function Cone(props: JSX.IntrinsicElements['mesh']) {

    const ref = React.useRef<THREE.Mesh>(null!)
  
    return (
      <mesh
        {...props}
        ref={ref}
        scale={1}>
        <coneGeometry />
        <meshStandardMaterial color={0xFF0000} />
      </mesh>
    )
}

export default function TestScene(props: JSX.IntrinsicElements['scene']) {

    const ref = React.useRef<THREE.Scene>(null!)
  
    return (
        <scene
        {...props}
        ref={ref}>
            <directionalLight color={0xFFFFFF} intensity={1} position={[0, 4, 2]}/>
            <Box position={[-2, 0, 0]}/>
            <Sphere position={[0, 0, 0]}/>
            <Cone position={[2, 0, 0]}/>
        </scene>
    )
}