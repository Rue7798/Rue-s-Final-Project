import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/teacup.gltf")
    const [colour, setColour] = useState("##8fbc8f")

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
                <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} position={[-0.0037, 0.0251, -0.0048]}>
                    <mesh onClick={() => { colour === "##8fbc8f" ? setColour("#ffe4c4") : setColour("##8fbc8f") }} geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} material-color={colour} />
                </mesh>
                <mesh

                    geometry={nodes.Object_2.geometry}
                    material={materials.material}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/teacup.gltf")