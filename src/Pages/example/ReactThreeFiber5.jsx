import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber"; // npm i
import { Stats, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'; // npm i
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FBXLoader } from 'three/addons/loaders/FBXLoader';


const Plane = () => {

    const texture = useLoader(THREE.TextureLoader, './assets/img-pc.jpg');

    return (
        <mesh>
            <planeGeometry args={[10, 10]} />
            <meshBasicMaterial color="white" side={THREE.DoubleSide} map={texture} />
        </mesh>
    )
}

const ModelFBX = () => {

    const fbx = useLoader(FBXLoader, './assets/models/monkey/monkey.fbx')
    console.log("fbx:", fbx);

    // 遍历模型中的所有材质并设置透明度
    fbx.traverse((child) => {        
        if (child.isMesh) {
            // 检查是否为Mesh
            child.material.transparent = true;
            child.material.opacity = 0.5;
        }
    });
    

    return (
        <primitive
            object={fbx}
            position={[0, -15, 0]}
            // rotation={[Math.PI / 2, 0, 0]}
            scale={[.025,.025,.025]}
        />
    )
}

const ModelGLTF = () => {

    const gltf = useLoader(GLTFLoader, './assets/models/helmet/DamagedHelmet.gltf')
    console.log("gltf:", gltf);
    

    return (
        <primitive
            object={gltf.scene}
            position={[0, 15, 0]}
            scale={[5,5,5]}
            children-0-castShadow
        />
    )
}

const ModelUseGLTF = () => {

    const { nodes, materials } = useGLTF(
        './assets/models/helmet/DamagedHelmet.gltf'
        // './assets/models/shoe/shoe-draco.glb'
    )

    // console.log("nodes: ", nodes);
    // console.log("materials: ", materials);
    

    return (
        <mesh position={[15, 15, 0]} scale={[5,5,5]} geometry={nodes.Scene.children[0].geometry} material={materials.Material_MR} />
        // <mesh scale={[5,5,5]} geometry={nodes.shoe.geometry} material={materials.laces} />
    )
}



function ReactThreeFiber() {


    

    return (
        <>
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[25, 25, 25]} fov={60} />
                <color attach="background" args={["black"]} />
                <OrbitControls  enablePan={true} enableZoom={true} enableRotate={true} enableDamping={true} />
                <axesHelper args={[5]} />
                <Stats />

                <directionalLight position={[0, 0, 10]} intensity={10} />


                <Suspense>
                    <Plane />

                    <ModelFBX />

                    <ModelGLTF />

                    <ModelUseGLTF />

                </Suspense>


            </Canvas>
        </>
    )
}

export default ReactThreeFiber;