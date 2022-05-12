import React, { useState, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("/bowl.gltf")
    const [colour, setColour] = useState("#8b4513")
    // const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group
                    name="Sketchfab_model"
                    position={[0.03, -8.75, 0]}
                    rotation={[Math.PI / 2, 0, -Math.PI]}
                >
                    <group
                        name="2c898f002e7544adad724e8d08f37e5bfbx"
                        rotation={[-Math.PI, 0, 0]}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="Sphere001"
                                    position={[0, 0, 4.23]}
                                    rotation={[0.03, 0.02, 0]}
                                    scale={41.72}>
                                    <mesh geometry={nodes.Sphere001_07_Default_0.geometry} material={nodes.Sphere001_07_Default_0.material} position={[-0.0037, 0.0251, -0.0048]}>
                                        <mesh onClick={() => { colour === "#8b4513" ? setColour("#ffebcd") : setColour("#8b4513") }} geometry={nodes.Sphere001_07_Default_0.geometry} material={nodes.Sphere001_07_Default_0.material} material-color={colour} />
                                    </mesh>
                                    <mesh
                                        name="Sphere001_07_Default_0"
                                        geometry={nodes["Sphere001_07_Default_0"].geometry}
                                        material={materials["07_-_Default"]}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/bowl.gltf")