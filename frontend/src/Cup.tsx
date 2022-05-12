import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { Suspense, useState } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import Model from './teacup'


// function Model() {
//     const { scene } = useGLTF("teacup.glb");
//     return (
//         <primitive object={scene} />
//     )
// }


export function Cup() {

    return (

        <div style={{ height: "80vh" }}>
            <Canvas camera={{ position: [40, 5, 18], fov: 0.8 }}>
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="night" background />
                    <pointLight position={[50, 50, 50]} intensity={1.8} />
                </Suspense>
            </Canvas>
        </div>

    );
}

