/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Part5(props) {
  const { nodes, materials } = useGLTF("/assets/part5.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="hall002"
        geometry={nodes.hall002.geometry}
        material={materials.acad}
        position={[-89.73, 20.11, -14.62]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.75, 0.75, 0.84]}
      />
    </group>
  );
}

