import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/treasure_chest.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dower_chest_Zamok_0.geometry}
              material={materials.Zamok}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dower_chest_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Dower_chest_Box_met_0.geometry}
              material={materials.Box_met}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/treasure_chest.glb");
