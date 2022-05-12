// import React, { useState, useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export default function Model(props) {
//     const group = useRef()
//     const [colour, setColour] = useState("#ED91AD")
//     const { nodes, materials } = useGLTF('/Plate1.gltf')
//     return (
//         <group ref={group} {...props} dispose={null}>
//             <group rotation={[-Math.PI / 2, 0, 0]}>
//                 {/* <mesh onClick={() => { colour === "#ED91AD" ? setColour("#93c572") : setColour("#ED91AD") }} geometry={nodes.Root.geometry} material={nodes.Root.material} material-color={colour} /> */}
//                 <mesh geometry={nodes.Cylinder001_0.geometry} material={nodes.Cylinder001_0.material} >
//                     <mesh position={[0.44, -0.63, 0.03]} rotation={[0, 0, -1.87]} onClick={() => { colour === "#ED91AD" ? setColour("#93c572") : setColour("#ED91AD") }} geometry={nodes.Root.geometry} material={nodes.Root.material} material-color={colour} />
//                 </mesh>
//                 <mesh geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} />
//                 <mesh geometry={nodes.Cylinder001_0_1.geometry} material={nodes.Cylinder001_0_1.material} />
//                 <mesh geometry={nodes.Cylinder001_0_2.geometry} material={nodes.Cylinder001_0_2.material} />
//                 <mesh geometry={nodes.Cylinder001_0_3.geometry} material={nodes.Cylinder001_0_3.material} />
//                 <mesh geometry={nodes.Cylinder001_0_4.geometry} material={nodes.Cylinder001_0_4.material} />
//                 <mesh geometry={nodes.Cylinder001_0_5.geometry} material={nodes.Cylinder001_0_5.material} />
//                 <mesh geometry={nodes.Cylinder001_0_6.geometry} material={nodes.Cylinder001_0_6.material} />
//                 <mesh geometry={nodes.Cylinder001_0_7.geometry} material={nodes.Cylinder001_0_7.material} />
//                 <mesh geometry={nodes.Cylinder001_0_8.geometry} material={nodes.Cylinder001_0_8.material} />
//                 <mesh geometry={nodes.Cylinder001_0_9.geometry} material={nodes.Cylinder001_0_9.material} />
//                 <mesh geometry={nodes.Cylinder001_0_10.geometry} material={nodes.Cylinder001_0_10.material} />

//             </group>
//         //     </group>
//     )
// }

// useGLTF.preload('/Plate1.gltf')


// import React, { useState, useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export default function Model(props) {
//     const group = useRef();
//     const { nodes, materials } = useGLTF("/Plate1.glb");
//     const [colour, setColour] = useState("#ED91AD");

//     return (
//         <group ref={group} {...props} dispose={null}>
//             <group rotation={[-Math.PI / 2, 0, 0]}>
//                 <mesh geometry={nodes.Sketchfab_model.geometry} material={nodes.Sketchfab_model.material} position={[0.44, -0.63, 0.03]} rotation={[0, 0, -1.87]} >
//                     <mesh onClick={() => { colour === "#ED91AD" ? setColour("#93c572") : setColour("#ED91AD") }} geometry={nodes.Sketchfab_model.geometry} material={nodes.Sketchfab_model.material} material-color={colour} />
//                 </mesh>
//                 <mesh

//                     geometry={nodes.Cylinder001_0.geometry}
//                     material={nodes.Cylinder001_0.material}
//                 />
//                 <mesh

//                     geometry={nodes.Cylinder001_0_1.geometry}
//                     material={nodes.Cylinder001_0_1.material}
//                 />
//                 <mesh

//                     geometry={nodes.Cylinder001_0_2.geometry}
//                     material={nodes.Cylinder001_0_2.material}
//                 />
//                 <mesh

//                     geometry={nodes.Cylinder001_0_3.geometry}
//                     material={nodes.Cylinder001_0_3.material}
//                 />
//                 <mesh

//                     geometry={nodes.Cylinder001_0_4.geometry}
//                     material={nodes.Cylinder001_0_4.material}
//                 />
//                 <mesh

//                     geometry={nodes.Cylinder001_0_5.geometry}
//                     material={nodes.Cylinder001_0_5.material}
//                 />
//                 <mesh

//                     geometry={nodes.Cylinder001_0_6.geometry}
//                     material={nodes.Cylinder001_0_6.material}
//                 />
//                 <mesh

//                     geometry={nodes.Cylinder001_0_7.geometry}
//                     material={nodes.Cylinder001_0_7.material}
//                 />
//                 <mesh

//                     geometry={nodes.Cylinder001_0_8.geometry}
//                     material={nodes.Cylinder001_0_8.material}
//                 />
//                 <mesh

//                     geometry={nodes.Cylinder001_0_9.geometry}
//                     material={nodes.Cylinder001_0_9.material}
//                 />
//                 <mesh

//                     geometry={nodes.Cylinder001_0_10.geometry}
//                     material={nodes.Cylinder001_0_10.material}
//                 />
//             </group>
//         </group>
//     );
// }

// useGLTF.preload("/Plate1.glb");



import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/Plate1.gltf")
    const [colour, setColour] = useState("##f0ffff")

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
                        <group position={[0, 0, 3.19]}>
                            <mesh geometry={nodes.Prato_Material.geometry} material={nodes.Prato_Material.material} position={[0.44, -0.63, 0.03]} rotation={[0, 0, -1.87]} >
                                <mesh onClick={() => { colour === "##f0ffff" ? setColour("#20b2aa") : setColour("##f0ffff") }} geometry={nodes.Prato_Material.geometry} material={nodes.Prato_Material.material} material-color={colour} />
                            </mesh>
                            <mesh

                                geometry={nodes["Prato_Material"].geometry}
                                material={materials.Material_25}
                            />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/Plate1.gltf");