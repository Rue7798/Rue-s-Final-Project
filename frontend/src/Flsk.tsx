import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { Suspense, useState } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import Model from './Flask'

// // function Model() {
// //     const { scene } = useGLTF("donut48.glb");
// //     return (
// //         <primitive object={scene} />
// //     )
// // }


export function Flask() {
    return (
        <div style={{ height: "100vh" }}>
            <Canvas camera={{ position: [150, 150, 100], fov: 3.5 }}>
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