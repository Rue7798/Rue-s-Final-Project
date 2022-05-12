
import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { Suspense, useState } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import Model from './brasero'

// function Model() {
//     const { scene } = useGLTF("brasero.glb");
//     return (
//         <primitive object={scene} />
//     )
// }


export function Brasero() {

    return (

        <div style={{ height: "100vh" }}>
            <Canvas camera={{ position: [400, 90, 350], fov: 4 }}>
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="night" background />
                    <pointLight position={[100, 150, 150]} intensity={1.8} />
                </Suspense>
            </Canvas>
        </div>

    );
}

