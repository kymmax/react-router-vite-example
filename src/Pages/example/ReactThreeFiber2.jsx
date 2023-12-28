import { SpotLightHelper, DirectionalLightHelper } from 'three'
import { Canvas } from "@react-three/fiber"; // npm i
import { Stats, OrbitControls, PerspectiveCamera, useHelper } from '@react-three/drei'; // npm i
import { DoubleSide } from "three";

import { useControls } from 'leva'; // npm i
import { useRef } from "react";

function LightSpot(props) {
    const light = useRef()
    useHelper(light, SpotLightHelper, 'cyan')
    return <spotLight {...props} ref={light} />
}
function LightDirec(props) {
    const light = useRef()
    useHelper(light, DirectionalLightHelper, 5, "red")
    return <directionalLight {...props} ref={light} />
}


function ReactThreeFiber() {

    
    const option_box = {
        x: { value: 0, min: -20, max: 20, step: 0.01 },
        y: { value: 0, min: -20, max: 20, step: 0.01 },
        z: { value: 6, min: -20, max: 20, step: 0.01 },
        visible: true,
        color: { value: '#00ff00' },
    }
    const option_light = {
        x: { value: 0, min: -20, max: 20, step: 0.01 },
        y: { value: 0, min: -20, max: 20, step: 0.01 },
        z: { value: 10, min: -20, max: 20, step: 0.01 },
        intensity: { value: 100, min: 0, max: 200, step: 0.01 },
        angle: { value: Math.PI / 3, min: 0, max:  Math.PI, step: 0.01 },
        penumbra: { value: 0.5, min: 0, max:  2, step: 0.01 },
        visible: true,
        color: { value: 'white' },
    }

    const controlBg = useControls({
        color: { value: 'black' },
    })
    const controlBox = useControls('Box', option_box);
    const controlLightSpot = useControls('SpotLight', option_light, {collapsed : true});
    const controlLightDir = useControls('DirecLight', option_light, {collapsed : true});


    return (
        <>
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[15, 15, 15]} fov={60} />
                <color attach="background" args={[controlBg.color]} />
                <fog attach="fog" args={["white", 0, 80]} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                <axesHelper args={[5]} />
                <Stats />

                <ambientLight intensity={0.1} />

                <LightDirec 
                    position={[controlLightDir.x, controlLightDir.y, controlLightDir.z]} 
                    castShadow 
                    shadow-mapSize={[512, 512]}
                    // shadow-mapSize-height={512}
                    // shadow-mapSize-width={512} 
                    // shadow-camera-near={0.5}
                    // shadow-camera-far={500}
                    shadow-camera-left={-8}
                    shadow-camera-right={8}
                    shadow-camera-top={8}
                    shadow-camera-bottom={-8}
                    visible={controlLightDir.visible}
                    color={controlLightDir.color}
                />

                <LightSpot
                    position={[controlLightSpot.x, controlLightSpot.y,controlLightSpot.z]}
                    intensity={controlLightSpot.intensity}
                    angle={controlLightSpot.angle}
                    penumbra={controlLightSpot.penumbra}
                    castShadow
                    shadow-mapSize={[512, 512]}
                    visible={controlLightSpot.visible}
                    color={controlLightSpot.color}
                />


                <mesh receiveShadow>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial attach="material" color="white" side={DoubleSide} />
                </mesh>

                <mesh castShadow position={[controlBox.x, controlBox.y, controlBox.z]} visible={controlBox.visible}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial attach="material" color="red" />
                </mesh>
            </Canvas>
        </>
    )
}

export default ReactThreeFiber;