import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/teapot.gltf")
    const [colour, setColour] = useState("#8b4513")

    return (
        <group ref={group} {...props} dispose={null}>

            <group
                position={[7.33, -41.49, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[100, 100, 100]} >
                <mesh geometry={nodes.teapot_teapot_0.geometry} material={nodes.teapot_teapot_0.material} position={[-0.0037, 0.0251, -0.0048]}>
                    <mesh onClick={() => { colour === "#8b4513" ? setColour("#ffebcd") : setColour("#8b4513") }} geometry={nodes.teapot_teapot_0.geometry} material={nodes.teapot_teapot_0.material} material-color={colour} />
                </mesh>
                <mesh
                    geometry={nodes.teapot_teapot_0.geometry}
                    material={materials.teapot}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/teapot.gltf")
