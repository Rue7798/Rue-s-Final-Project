import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/clayplate.gltf")
    const [colour, setColour] = useState("#000080")

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} position={[-0.0037, 0.0251, -0.0048]}>
                    <mesh onClick={() => { colour === "#000080" ? setColour("#fff5ee") : setColour("#000080") }} geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} material-color={colour} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.defaultMat}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/clayplate.gltf")
