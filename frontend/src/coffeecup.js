import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/coffecup.gltf")
    const [colour, setColour] = useState("#f8f8ff")

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group
                        position={[-4.33, 0, 0]}
                        rotation={[-Math.PI / 2, 0, 1.14]}
                        scale={[100, 100, 100]}
                    >
                        <group position={[0.04, 0, 0.05]}>
                            <group
                                position={[0.99, 0, 0.43]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[0.43, 0.43, 0.48]} >
                                <mesh geometry={nodes.Roundcube003Material0020.geometry} material={nodes.Roundcube003Material0020.material} position={[-0.0037, 0.0251, -0.0048]}>
                                    <mesh onClick={() => { colour === "#f8f8ff" ? setColour("#87cefa") : setColour("#f8f8ff") }} geometry={nodes.Roundcube003Material0020.geometry} material={nodes.Roundcube003Material0020.material} material-color={colour} />
                                </mesh>
                                <mesh
                                    geometry={nodes.BezierCircle__0.geometry}
                                    material={materials.BezierCircle__0}
                                />
                            </group>
                            <mesh
                                geometry={nodes.Circle_Material001_0.geometry}
                                material={materials["Material.001"]}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Roundcube003Material0020.geometry}
                            material={materials["Material.002"]}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/coffecup.gltf");