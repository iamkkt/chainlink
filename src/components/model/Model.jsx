import React from "react";

import { useGLTF } from "@react-three/drei";

import { RigidBody } from "@react-three/rapier";
import { Part1 } from "./Part1";

useGLTF.preload("/assets/model/part1.glb");

export function InteractiveModel() {
  return (
    <>
      <RigidBody type="fixed" colliders="trimesh">
        <Part1 />
      </RigidBody>
    </>
  );
}
