import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { Suspense, useState } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import Model from './donut48'

// // function Model() {
// //     const { scene } = useGLTF("donut48.glb");
// //     return (
// //         <primitive object={scene} />
// //     )
// // }


export function Donut() {
    return (
        <div style={{ height: "100vh", backgroundColor: "#fde2e4" }}>
            <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
                <pointLight position={[10, 10, 10]} intensity={1.3} />
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="apartment" background />
                </Suspense>
            </Canvas>
        </div>
    );
}