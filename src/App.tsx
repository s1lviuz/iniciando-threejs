import * as THREE from 'three'

import './App.css'

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'

import OrbitControl from './Components/OrbitControl';
import Terrain from './Components/Terrain';
import Player from './Components/Player';

export default function App() {

  const [orbitControl, setorbitControl] = useState(Boolean)

  return (
    <>
      <Canvas style={{ background: 'black' }}>
        <directionalLight intensity={1} />
        <ambientLight intensity={0.1} />
        <Player>
          {!orbitControl && <PerspectiveCamera makeDefault />}
        </Player>
        <Terrain />
        {orbitControl && <OrbitControls />}
      </Canvas>
      <OrbitControl orbitControl={orbitControl} setorbitControl={setorbitControl} />
    </>
  )
}
