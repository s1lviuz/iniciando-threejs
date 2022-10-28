import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"


export default function Player(props: JSX.IntrinsicElements['mesh']) {

    const [position, setPosition] = useState({ x: 0, y: 0, z: 0 })
    const [velocity, setVelocity] = useState({ x: 0, y: 0, z: 0 })
    const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 })

    const ref = useRef<THREE.Mesh>(null!)

    useFrame(() => {
        checkMaxSpeed()
        setVelocity({ x: velocity.x + acceleration.x, y: 0, z: velocity.z + acceleration.z })
        setPosition({ x: position.x + velocity.x, y: 0, z: position.z + velocity.z })
        ref.current.position.set(position.x, position.y, position.z)
    })

    const checkMaxSpeed = () => {
        const topspeed = 0.007
        if (velocity.x > topspeed) {
            setVelocity({ ...velocity, x: topspeed })
        }
        if (velocity.x < -topspeed) {
            setVelocity({ ...velocity, x: -topspeed })
        }
        if (velocity.z > topspeed) {
            setVelocity({ ...velocity, z: topspeed })
        }
        if (velocity.z < -topspeed) {
            setVelocity({ ...velocity, z: -topspeed })
        }
    }

    const downHandler = (event: any) => {
        keyPressed(event.key)
    }

    const upHandler = (event: any) => {
        keyReleased(event.key)
    }

    useEffect(() => {
        window.addEventListener("keyup", upHandler, false);
        window.addEventListener("keydown", downHandler, false);
        return () => {
            window.removeEventListener("keyup", upHandler, false);
            window.removeEventListener("keydown", downHandler, false);
        };
    }, []);

    function keyPressed(key: any) {
        if (key === 'ArrowUp') {
            if (acceleration.z === 0.0025) {
                return
            } else {
                setAcceleration({ ...acceleration, z: -0.0025 });
            }
        } else if (key === 'ArrowDown') {
            if (acceleration.z === -0.01) {
                return
            } else {
                setAcceleration({ ...acceleration, z: 0.0025 });
            }
        } else if (key === 'ArrowRight') {
            if (acceleration.x === -0.01) {
                return
            } else {
                setAcceleration({ ...acceleration, x: 0.0025 });
            }
        } else if (key === 'ArrowLeft') {
            if (acceleration.x === 0.01) {
                return
            } else {
                setAcceleration({ ...acceleration, x: -0.0025 });
            }
        }
    }

    function keyReleased(key: any) {
        if (key === 'ArrowUp') {
            if (acceleration.z === 0.01) {
                return
            } else {
                setAcceleration({ ...acceleration, z: 0 });
                setVelocity({ ...velocity, z: 0 })
            }
        } else if (key === 'ArrowDown') {
            if (acceleration.z === -0.01) {
                return
            } else {
                setAcceleration({ ...acceleration, z: 0 });
                setVelocity({ ...velocity, z: 0 })
            }
        } else if (key === 'ArrowRight') {
            if (acceleration.x === -0.01) {
                return
            } else {
                setAcceleration({ ...acceleration, x: 0 });
                setVelocity({ ...velocity, x: 0 })
            }
        } else if (key === 'ArrowLeft') {
            if (acceleration.x === 0.01) {
                return
            } else {
                setAcceleration({ ...acceleration, x: 0 });
                setVelocity({ ...velocity, x: 0 })
            }
        }
    }

    return (
        <mesh
            {...props}
            ref={ref}
            visible
        >
            <sphereGeometry args={[16, 32, 16]} />
            <meshStandardMaterial color={0x0000FF} />
        </mesh>
    )
}