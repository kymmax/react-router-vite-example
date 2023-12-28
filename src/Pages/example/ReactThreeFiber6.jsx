import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // npm i
import { Stats, OrbitControls, PerspectiveCamera, useGLTF, ContactShadows } from '@react-three/drei'; // npm i
import { useControls } from 'leva'
import { Color } from 'three'
// import * as THREE from "three";



function Model() {

    const [hovered, setHovered] = useState(false)
    const { nodes, materials } = useGLTF(
        './assets/models/shoe/shoe-draco.glb'
    )

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])


    useControls('Shoe', () => {
        console.log('creating color pickers')

        // using reduce
        return Object.keys(materials).reduce((acc, m) =>
                Object.assign(acc, {
                    [m]: {
                        value:
                            '#' +
                            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
                        onChange: (v) => {
                            materials[m].color = new Color(v)
                        }
                    }
                }),
            {}
        )
    })

    // JSX of glTF created using the command
    // npx gltfjsx .\public\models\shoe-draco.glb

    return (
        <group
            dispose={null}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={(e) => {
                e.stopPropagation()                
                document.getElementById('Shoe.' + e.object.material.name).focus()
            }}>
            <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
            <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
            <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
            <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
            <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
            <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
            <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
            <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
        </group>
    )
}



function ReactThreeFiber() {

    return (
        <>
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 2]} fov={60} />
                <color attach="background" args={["black"]} />
                <OrbitControls  enablePan={true} enableZoom={true} enableRotate={true} enableDamping={true} />
                <axesHelper args={[5]} />
                <Stats />

                {/* <spotLight position={[0, 2, 0]} rotation={[Math.PT/2, 0, 0]} intensity={15} color={"white"} /> */}
                <directionalLight position={[0, 0, 10]} intensity={8} />
                {/* <ambientLight intensity={0.1} /> */}


                <Suspense>
                    <Model />
                </Suspense>

                <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />

            </Canvas>
        </>
    )
}

export default ReactThreeFiber;