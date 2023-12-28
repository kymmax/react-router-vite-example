import { Canvas } from "@react-three/fiber"; // npm i
import { Stats, OrbitControls, PerspectiveCamera, TransformControls } from '@react-three/drei'; // npm i

import { useEffect, useRef } from "react";

function TransformObj(){

    const orbit = useRef()
    const transform = useRef();

    useEffect(() => {
        // console.log("useEffect",transform.current);
        // console.log("useEffect",orbit.current);
        
        if (transform.current) {
            // console.log("in");

            const controls = transform.current;
            
            controls.setMode("translate")

            const callback = event => {
                console.log("dragging in", event);
                orbit.current.enabled = !event.value
            }


            // 這裡在重新整理後，會失效
            controls.addEventListener("dragging-changed", callback)

            return () => controls.removeEventListener("dragging-changed", callback)
        }
    },[])

    return (
        <>
            <OrbitControls ref={orbit} enablePan={true} enableZoom={true} enableRotate={true} enableDamping={true} />

            <TransformControls ref={transform}>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial attach="material" color="red" />
                </mesh>
            </TransformControls>
        </>
    )
}

function ReactThreeFiber() {


    return (
        <>
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[15, 15, 15]} fov={60} />
                <color attach="background" args={["black"]} />
                <axesHelper args={[5]} />
                <Stats />

                <ambientLight intensity={0.5} />

                <TransformObj />
            </Canvas>
        </>
    )
}

export default ReactThreeFiber;