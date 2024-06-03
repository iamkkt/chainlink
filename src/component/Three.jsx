import {
  OrbitControls,
  PerspectiveCamera,
  Sky,
  BakeShadows,
} from "@react-three/drei";
import { angleToRadians } from "./utils/angle";
import Model from "./model/Model";
import "./three.scss";
import * as THREE from "three";

export default function Three() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[-90, 20, -240]} />
      <OrbitControls
        mouseButtons={{ LEFT: THREE.MOUSE.ROTATE }}
        // panSpeed={0.25}
        rotateSpeed={0.25}
        // // enablePan={true}
        minDistance={50}
        maxDistance={300}
        minPolarAngle={angleToRadians(0)}
        maxPolarAngle={angleToRadians(85)}
        zoomSpeed={0.5}
        enableZoom={true}
        enableDamping={true}
        enableRotate={true}
        screenSpacePanning={true}
      />
      <Sky />

      <ambientLight args={["#ffffff", 0.5]} />
  
      <Model />
      {/* <directionalLight args={["#ffffff", 1]} /> */}
      <BakeShadows />
    </>
  );
}
