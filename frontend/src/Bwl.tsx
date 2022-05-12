import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { Suspense, useState } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import Model from './bowl'




export function Bowl() {
    return (
        <div style={{ height: "100vh" }}>
            <Canvas camera={{ position: [400, 300, 250], fov: 3 }}>
                <pointLight position={[400, 300, 300]} intensity={1.8} />
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="night" background />
                </Suspense>
            </Canvas>
        </div>
    );
}