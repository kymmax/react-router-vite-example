import { useRef, useState } from "react";

import { Canvas, useThree, useFrame } from "@react-three/fiber"; // npm i
import { Stats, OrbitControls } from '@react-three/drei'; // npm i
import { DoubleSide } from "three";

import { useControls } from 'leva'; // npm i

function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        ref.current.rotation.x += delta
    })
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>

        <boxGeometry args={[1, 1, 1]} />
        {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
        <meshStandardMaterial color={props.color} />

        {props.children}
      </mesh>
    )
}

function ReactThreeFiber() {

    const controlColor = useControls({
        value: 'black',
    })

    const controlBox = useControls('Box', {
        x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
        y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
        z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
        visible: true,
        color: { value: '#00ff00' },
    }, {
        collapsed : false
    })


    

    return (
        <>
            <Canvas camera={{ position: [15, 15, 15] }}>
                <color attach="background" args={[controlColor.value]} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                <axesHelper args={[5]} />
                <Stats />

                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />

                <Box 
                    rotation={[controlBox.x, controlBox.y, controlBox.z]} 
                    visible={controlBox.visible}
                />

                <Box position={[5, 0, 0]}>
                    <Box position={[0, 10, 0]}></Box>
                </Box>

                <mesh>
                    <planeGeometry args={[10, 10]} />
                    <meshPhongMaterial color="blue" side={DoubleSide} />

                    <Box position={[0, 5, 0]}></Box>
                </mesh>

                <group position={[0, 0, 5]}>
                    <Box position={[0, 0, 0]}></Box>
                </group>
            </Canvas>
        </>
    )
}

export default ReactThreeFiber;