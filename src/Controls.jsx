import React, { useEffect, useState, useContext } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import { Player } from "./components/Player/Player";
import * as THREE from "three";
import { Vector3 } from "three";

import { angleToRadians } from "./components/utils/angle";
// const ThirdPersonPlayer = React.lazy(() =>
//   import("./components/model/ThirdPersonPlayer")
// );
import ThirdPersonPlayer from "./components/model/ThirdPersonPlayer";
export default function Controls({ cam, view }) {
  const { camera } = useThree();

  const [control, setControl] = useState(
    <>
      <PerspectiveCamera makeDefault={cam} position={[-15, 5, 20]} />
      <OrbitControls
        mouseButtons={{ LEFT: THREE.MOUSE.ROTATE }}
        // panSpeed={0.25}
        rotateSpeed={0.5}
        minDistance={10}
        maxDistance={40}
        minPolarAngle={angleToRadians(50)}
        maxPolarAngle={angleToRadians(85)}
        zoomSpeed={0.5}
        enablePan={false}
        // minZoom={10}
      />
    </>
  );

  useEffect(() => {
    if (view === "Home") {
      setControl(
        <>
          <PerspectiveCamera makeDefault={cam} position={[-15, 5, 20]} />

          <OrbitControls
            mouseButtons={{ LEFT: THREE.MOUSE.ROTATE }}
            // panSpeed={0.25}
            rotateSpeed={0.5}
            // minDistance={0}
            maxDistance={40}
            minPolarAngle={angleToRadians(50)}
            maxPolarAngle={angleToRadians(85)}
            zoomSpeed={0.5}
            enablePan={false}
          />
        </>
      );
    } else if (view === "Auditorium") {
      setControl(
        <>
          {/* <PerspectiveCamera makeDefault={!cam} />; */}
          {/* <Player props={[-9, 7, 10]} view={view} />; */}
          <ThirdPersonPlayer />
        </>
      );
    }
  }, [view]);

  // React.useEffect(() => {
  //   if (view == "Auditorium") {
  //     camera.position.set(-15, 5, 20);
  //   }
  // }, [view, camera]);

  return control;
}
