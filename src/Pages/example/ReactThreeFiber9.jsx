import { useEffect, useRef } from "react";

import { Canvas } from "@react-three/fiber"; // npm i
import { Stats, OrbitControls } from '@react-three/drei'; // npm i
import { EffectComposer, Bloom, DepthOfField, Noise } from '@react-three/postprocessing';

import { gsap } from "gsap";


function Object(props) {

    const ref = useRef();

    useEffect(() => {
        // if (!ref.current) return;
        gsap.timeline({
            repeat: -1,
            yoyo: true,
        }).to(ref.current.position, {
            x: 5,
            duration: 1
        }).to(ref.current.position, {
            z: 5,
            duration: 1
        });
    }, []);

    return (
        <mesh {...props} ref={ref} >

            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial />
            
            {props.children}
        </mesh>
    )
}

function ReactThreeFiber() {

    return (
        <>
            <Canvas camera={{ position: [10, 10, 10] }}>
                <color attach="background" args={["black"]} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                <axesHelper args={[5]} />
                <Stats />

                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />

                <Object />

                <mesh>
                    <sphereGeometry args={[1, 32, 16]} />
                    <meshBasicMaterial />
                </mesh>

                <EffectComposer>
                    <Bloom intensity={10} luminanceThreshold={0.5} luminanceSmoothing={0.9}></Bloom>
                    {/* <DepthOfField
                        focusDistance={0}
                        focalLength={0.1}
                        bokehScale={5}
                        height={600}
                        blur={true}
                    /> */}
                    <Noise opacity={1} />
                </EffectComposer>

            </Canvas>
        </>
    )
}

export default ReactThreeFiber;