import * as React from 'react'
import * as THREE from 'three'
import * as Fiber from '@react-three/fiber'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { Canvas, useLoader } from '@react-three/fiber'
import { DDSLoader } from "three-stdlib"
import { useEffect, useState } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls } from "@react-three/drei";

import './LearnningScene.css'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())


function ControlPainel(props: any) {
    
    const controlPainelHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        if (props.controlPainel === false) {
            props.setcontrolPainel(true)
        } else {props.setcontrolPainel(false)}
    }

    return (
        <div className='controlPainel'>
            <label>Mude o painel de controle: </label>
            <button onClick={controlPainelHandler}>{(props.controlPainel) ? 'Ligado' : 'Desligado'}</button>
        </div>
    )
}

export default function LearnningScene() {

    const [controlPainel, setcontrolPainel] = useState(Boolean)

    const materialTarget = useLoader(MTLLoader, '/assets/targetA.mtl')
    const target = useLoader(OBJLoader, '/assets/targetA.obj', (loader) => {
        materialTarget.preload();
        loader.setMaterials(materialTarget)
    })
    target.rotation.y = Math.PI * 0.5
    target.position.z = -2

    const materialBlaster = useLoader(MTLLoader, '/assets/blasterG.mtl')
    const blaster = useLoader(OBJLoader, '/assets/blasterG.obj', (loader) => {
        materialBlaster.preload();
        loader.setMaterials(materialBlaster)
    })
    blaster.position.z = 3

    const materialBullet = useLoader(MTLLoader, '/assets/foamBulletB.mtl')
    const bullet = useLoader(OBJLoader, '/assets/foamBulletB.obj', (loader) => {
        materialBullet.preload();
        loader.setMaterials(materialBullet)
    })

    const downHandler = ({ key }) => {
        if (key === 'ArrowRight') {
            blaster.rotateY(-0.02)
        }
        if (key === 'ArrowLeft') {
            blaster.rotateY(0.02)
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        return () => {
          window.removeEventListener("keydown", downHandler);
        };
      }, []);
   
    return (
        <>
            <Canvas>
                <directionalLight color={0xFFFFFF} intensity={1} position={[0, 4, 2]}/>
                <primitive object={target}/>
                <primitive object={blaster}>
                    <primitive object={bullet} position={[5,0,0]}/>
                    {!controlPainel && <PerspectiveCamera makeDefault position={[0, 0.5, 1]}/>}
                </primitive>
                {controlPainel && <OrbitControls/>}
            </Canvas>
            <ControlPainel controlPainel={controlPainel} setcontrolPainel={setcontrolPainel}/>
        </>
    )
}