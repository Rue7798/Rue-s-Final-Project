import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { Suspense, useState } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import Model from './coffeecup'

// // function Model() {
// //     const { scene } = useGLTF("donut48.glb");
// //     return (
// //         <primitive object={scene} />
// //     )
// // }


export function Coffe() {
    return (
        <div style={{ height: "100vh" }}>
            <Canvas camera={{ position: [100, 100, 100], fov: 0.5 }}>
                <pointLight position={[10, 10, 10]} intensity={1.3} />
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="night" background />
                </Suspense>
            </Canvas>
        </div>
    );
}