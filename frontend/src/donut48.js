import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/donut48.gltf')

    const [colour, setColour] = useState("#ED91AD")

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Donut.geometry} material={nodes.Donut.material} position={[-0.0037, 0.0251, -0.0048]}>
                <mesh onClick={() => { colour === "#ED91AD" ? setColour("#93c572") : setColour("#ED91AD") }} geometry={nodes.Icing.geometry} material={nodes.Icing.material} material-color={colour} />
            </mesh>
            <mesh
                geometry={nodes.SurfSphere001.geometry}
                material={nodes.SurfSphere001.material}
                position={[0.0619, 0.0463, -0.014]}
                rotation={[0.8888, -0.848, 2.0698]}
                scale={[0.2261, 0.2592, 0.2496]}
            />

        </group>
    )
}

useGLTF.preload('/donut48.gltf')