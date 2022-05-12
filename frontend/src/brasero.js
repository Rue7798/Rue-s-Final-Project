

import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/brasero.glb")
    const [colour, setColour] = useState("#f8f8ff")

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group scale={[100, 100, 100]}>
                        <mesh geometry={nodes.Hibachi_Vase_0.geometry} material={nodes.Hibachi_Vase_0.material} position={[-0.0037, 0.0251, -0.0048]}>
                            <mesh onClick={() => { colour === "#f8f8ff" ? setColour("#87cefa") : setColour("#f8f8ff") }} geometry={nodes.Hibachi_Vase_0.geometry} material={nodes.Hibachi_Vase_0.material} material-color={colour} />
                        </mesh>
                        <mesh
                            geometry={nodes.Hibachi_Vase_0.geometry}
                            material={materials.Vase}
                        />
                        <mesh
                            geometry={nodes.Hibachi_Lid_0.geometry}
                            material={materials.material}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/brasero.glb")