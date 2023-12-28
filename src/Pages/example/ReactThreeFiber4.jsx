import { Canvas, useFrame } from "@react-three/fiber"; // npm i
import { Stats, OrbitControls, PerspectiveCamera } from '@react-three/drei'; // npm i
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";


function BufferPoints({ count = 1000, shape, distance = 10 }) {

    const refPosition = useRef();
    const refColor = useRef();

    const particlesStyle = useMemo(() => {        
        
        const positions = new Float32Array( count * 3 );
        const colors = new Float32Array( count * 3 )

        // Box
        if (shape === "box"){
            for (let i = 0; i < count; i++) {
                let x = (Math.random() - 0.5) * distance;
                let y = (Math.random() - 0.5) * distance;
                let z = (Math.random() - 0.5) * distance;
        
                positions.set([x, y, z], i * 3);
            }
        }
        
        // Sphere
        if (shape === "sphere"){
     
            for (let i = 0; i < count; i++) {
                const theta = THREE.MathUtils.randFloatSpread(360); 
                const phi = THREE.MathUtils.randFloatSpread(360); 

                let x = distance * Math.sin(theta) * Math.cos(phi)
                let y = distance * Math.sin(theta) * Math.sin(phi);
                let z = distance * Math.cos(theta);

                positions.set([x, y, z], i * 3);
            }
        }

        // Box w/ Color
        if (shape === "box-color"){

            const color = new THREE.Color();
            for (let i = 0; i < count; i++) {
                let x = (Math.random() * distance) - (distance/2);
                let y = (Math.random() * distance) - (distance/2);
                let z = (Math.random() * distance) - (distance/2);
        
                positions.set([x, y, z], i * 3);

                // color
                const vx = ( x / distance ) + 0.5;
                const vy = ( y / distance ) + 0.5;
                const vz = ( z / distance ) + 0.5;
        
                color.setRGB( vx, vy, vz );
                colors.set([color.r, color.g, color.b], i * 3);
            }
        }

        // console.log(positions);
        
        

        return { positions, colors };
    }, [count, shape, distance]);
    
    

    const moveZ = () => {
        // 计算 Z 位置的变化
        for (let i = 0; i < count; i++) {
            particlesStyle.positions[i * 3 + 2] += 0.01;
        }

        // // 更新 bufferAttribute 的数组
        // refPosition.current.array = particlesStyle.positions;
        refPosition.current.needsUpdate = true;
    }

    // 創造想要的粒子圖案
    const createCanvasTexture = function(rgb){
		var tx_canvas = document.createElement('canvas');
		var tx_ctx = tx_canvas.getContext('2d');
		var tx_grad, texture;
		tx_canvas.width = 200;
		tx_canvas.height = 200;
		tx_grad = tx_ctx.createRadialGradient(100, 100, 20, 100, 100, 100);
		tx_grad.addColorStop(0, 'rgba(' + rgb + ', 1)');
		tx_grad.addColorStop(0.5, 'rgba(' + rgb + ', .3)');
		tx_grad.addColorStop(1.0, 'rgba(' + rgb + ', 0)');
		tx_ctx.fillStyle = tx_grad;
		tx_ctx.arc(100, 100, 100, 0, Math.PI / 180, true);
		tx_ctx.fill();
		texture = new THREE.Texture(tx_canvas);
		texture.minFilter = THREE.NearestFilter;
		texture.needsUpdate = true;
		return texture
	}

    useFrame((state, delta) => {
        // moveZ()

        // refPosition.current.needsUpdate = true;
        // refColor.current.needsUpdate = true;
    })


    return (
        <points>
            <bufferGeometry>
                <bufferAttribute 
                    ref={refPosition}
                    attach={"attributes-position"}
                    count={particlesStyle.positions.length / 3}
                    array={particlesStyle.positions}
                    itemSize={3}
                />
                <bufferAttribute 
                    ref={refColor}
                    attach={"attributes-color"}
                    count={particlesStyle.colors.length / 3}
                    array={particlesStyle.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={1}
                threshold={0.1}
                color={0xffffff}
                opacity={1}
                transparent={true}
                sizeAttenuation={true}
                vertexColors={true}
                depthWrite={false}
                depthTest={true}
                map={createCanvasTexture('255,255,255')}
                // blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function ReactThreeFiber() {

    // const [size, setSize] = useState(10);

    // useEffect(()=>{
    //     setTimeout(() => {
    //         setSize(5)
    //     }, 2000);
    // },[])

    return (
        <>
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[15, 15, 15]} fov={60} />
                <color attach="background" args={["black"]} />
                <OrbitControls  enablePan={true} enableZoom={true} enableRotate={true} enableDamping={true} />
                <axesHelper args={[5]} />
                <Stats />

                <BufferPoints count={5000} shape={'box-color'} distance={10} />

            </Canvas>
        </>
    )
}

export default ReactThreeFiber;