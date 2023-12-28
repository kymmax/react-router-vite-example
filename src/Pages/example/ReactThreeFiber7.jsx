import { forwardRef, useEffect, useRef, useState } from "react";

import { Canvas } from "@react-three/fiber"; // npm i
import { Stats, OrbitControls } from '@react-three/drei'; // npm i

import * as THREE from 'three';

import { useControls } from 'leva'; // npm i


const ControlMaterial = ( ref, name, type, props ) => {    

    const mesh = {
        px: { value: props.position ? props.position[0] : 0, min: -10, max: 10, step: 0.01, onChange: (v) => { ref.current.position.x = v; } },
        py: { value: props.position ? props.position[1] : 0 , min: -10, max: 10, step: 0.01, onChange: (v) => { ref.current.position.y = v; } },
        pz: { value: props.position ? props.position[2] : 0, min: -10, max: 10, step: 0.01, onChange: (v) => { ref.current.position.z = v; } },
        rx: { value: props.rotation ? props.rotation[0] : 0, min: -Math.PI, max: Math.PI, step: 0.01, onChange: (v) => { ref.current.rotation.x = v; } },
        ry: { value: props.rotation ? props.rotation[1] : 0, min: -Math.PI, max: Math.PI, step: 0.01, onChange: (v) => { ref.current.rotation.y = v; } },
        rz: { value: props.rotation ? props.rotation[2] : 0, min: -Math.PI, max: Math.PI, step: 0.01, onChange: (v) => { ref.current.rotation.z = v; } },
        visible: { value: true, onChange: (v) => { ref.current.visible = v; }},
    }
    const materialBasic = {
        transparent: { value: props.transparent ? props.transparent : true, onChange: (v) => { ref.current.material.transparent = v; }},
        opacity: { value: props.opacity ? props.opacity : 1, min: 0, max: 1, step: 0.01, onChange: (v) => { ref.current.material.opacity = v; }},
        depthTest: { value: props.depthTest ? props.depthTest : true, onChange: (v) => { ref.current.material.depthTest = v; }},
        depthWrite: { value: props.depthWrite ? props.depthWrite : true, onChange: (v) => { ref.current.material.depthWrite = v; }},
        alphaTest: { value: props.alphaTest ? props.alphaTest : 0, min: 0, max: 1, step: 0.01, onChange: (v) => { ref.current.material.alphaTest = v; }},
        color: { value: props.color ? props.color : '#ffffff', onChange: (v) => { ref.current.material.color = new THREE.Color(v); } },
        wireframe: { value: props.wireframe ? props.wireframe : false, onChange: (v) => { ref.current.material.wireframe = v; }},
        vertexColors: { value: props.vertexColors ? props.vertexColors : false, onChange: (v) => { ref.current.material.vertexColors = v; }},
        fog: { value: props.fog ? props.fog : true, 
            onChange: (v) => { 
                const currentMaterial = ref.current.material;
                if (currentMaterial instanceof THREE[type]) {
                    // 创建新的材质并复制旧材质的属性
                    const newMaterial = new THREE[type]();
                    newMaterial.copy(currentMaterial);
                    newMaterial.fog = v;

                    // 设置新材质
                    ref.current.material = newMaterial;
                }
            }
        },
        reflectivity: { value: props.reflectivity ? props.reflectivity : 0, min: 0, max: 1, step: 0.01, onChange: (v) => { ref.current.material.reflectivity = v; }},
        reflractionRatio: { value: props.reflractionRatio ? props.reflractionRatio : 0, min: 0, max: 1, step: 0.01, onChange: (v) => { ref.current.material.reflractionRatio = v; }},
    }
    const materialStandard = {
        emissive: { value: props.emissive ? props.emissive : '#000000', onChange: (v) => { ref.current.material.emissive = new THREE.Color(v); } },
        roughness: { value: props.roughness ? props.roughness : 0, min: 0, max: 1, step: 0.01, onChange: (v) => { ref.current.material.roughness = v; }},
        metalness: { value: props.metalness ? props.metalness : 0, min: 0, max: 1, step: 0.01, onChange: (v) => { ref.current.material.metalness = v; }},
        flatShading: { value: props.flatShading ? props.flatShading : false, 
            onChange: (v) => { 
                const currentMaterial = ref.current.material;
                if (currentMaterial instanceof THREE[type]) {
                    // 创建新的材质并复制旧材质的属性
                    const newMaterial = new THREE[type]();
                    newMaterial.copy(currentMaterial);
                    newMaterial.flatShading = v;

                    // 设置新材质
                    ref.current.material = newMaterial;
                }
            }
        },
    }


    const controlMaterial = useControls(name, {
        material: {
            value: type,
            onChange: (v) => { ref.current.material = new THREE[v](); },
            editable: false,
        },
        // for Mesh
        ...mesh,
        // for Material
        ...materialBasic,
        // 
        ...( (type === "MeshStandardMaterial") ? materialStandard : {} )
    }, {
        collapsed : false
    })

    

    return {controlMaterial};
}



function Object(props) {

    const ref = useRef();

    // Controls
    const control = props?.control;
        control.method( ref, control.name, control.type, props );
    
    return (
        <mesh {...props} ref={ref} >
            {/* <boxGeometry args={[1, 1, 1]} /> */}
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial />
            
            {props.children}
        </mesh>
    )
}


function ReactThreeFiber() {

    return (
        <>
            {/* <pre>{JSON.stringify(paras.type.value, null, '  ')}</pre> */}

            <Canvas camera={{ position: [4, 4, 4] }}>
                <color attach="background" args={["black"]} />
                <fog attach="fog" args={["black", 0, 15]} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                <axesHelper args={[5]} />
                <Stats />

                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />

                <Object 
                    // position={[0,0,0]}
                    control={{name: "Basic", type: "MeshBasicMaterial", method: ControlMaterial}}
                />
                <Object 
                    position={[0,2,0]}
                    control={{name: "Standard", type: "MeshStandardMaterial", method: ControlMaterial}}
                />

            </Canvas>
        </>
    )
}

export default ReactThreeFiber;