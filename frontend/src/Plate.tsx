import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { Suspense, useState } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import Model from './Plate1'

// function Model() {
//     const { scene } = useGLTF("Plate1.glb");
//     return (
//         <primitive object={scene} />
//     )
// }


export function Plate() {
    return (
        <div style={{ height: "100vh" }}>
            <Canvas camera={{ position: [400, 300, 300], fov: 5.5 }}>
                <pointLight position={[300, 300, 20]} intensity={1.3} />
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="night" background />
                </Suspense>
            </Canvas>
        </div>
    );
}