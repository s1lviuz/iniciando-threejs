import * as THREE from 'three'
import TestScene from './TestScene'

import { useState } from 'react'

import './App.css'
import { Canvas } from '@react-three/fiber'

export default function App() {
  const width = window.innerWidth
  const height = window.innerHeight

  return (
    <Canvas>
      <TestScene/>
      <perspectiveCamera fov={60} aspect={width / height} near={0.1} far={100}/>
    </Canvas>
  )
}
