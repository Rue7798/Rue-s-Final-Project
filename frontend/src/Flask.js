import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/Flask.glb")
    const [colour, setColour] = useState("#e9967a")

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-3.48, -3.19, -4.42]}>
                    <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} position={[-0.0037, 0.0251, -0.0048]}>
                        <mesh onClick={() => { colour === "#e9967a" ? setColour("#b0e0e6") : setColour("#e9967a") }} geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} material-color={colour} />
                    </mesh>

                    <mesh

                        geometry={nodes.Object_2.geometry}
                        material={materials["Scene_-_Root"]}

                    />
                </group>
            </group>
        </group>

    );
}

useGLTF.preload("/Flask.glb")