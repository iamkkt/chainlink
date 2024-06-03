import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerformanceMonitor,
  AdaptiveDpr,
} from "@react-three/drei";
import React, { Suspense, useContext, useState } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { Ground } from "./components/Ground/Ground";
import { ContextData } from "./context/Context";
import UsePlayerControls from "./components/utils/Helper";
import { XR, Controllers } from "@react-three/xr";

import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { angleToRadians } from "./components/utils/angle";
// import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { Part1 } from "./components/model/Part1";
import { Part2 } from "./components/model/Part2";
// import { Part3 } from "./components/model/Part3";
import Coins from "./components/model/Coins";
import Video from "./components/model/Video";
import { Character } from "./components/model/Character";
import { Tropy } from "./components/model/Trophy";
import { Car } from "./components/model/Car.jsx";
import ImageTex from "./components/video/Image";
// import { Dance, InstancesDance } from "./components/model/Dance";
import { IndiaFan } from "./components/model/IndiaFan";
import { Board } from "./components/model/Board";
// import { Shop } from "./components/model/Shop";

const ThirdPersonPlayer = React.lazy(() =>
  import("./components/Player/ThirdPersonPlayer")
);
useGLTF.preload("/assets/model/stadium1.glb");
useGLTF.preload("/assets/model/stadium2.glb");
// useGLTF.preload("/assets/model/cricket_pull_shot.glb");
useGLTF.preload("/assets/model/coin.glb");
useGLTF.preload("/assets/model/screen.glb");
useGLTF.preload("/assets/model/character.glb");
useGLTF.preload("/assets/model/character1.glb");
useGLTF.preload("/assets/model/Tropy.glb");
useGLTF.preload("/assets/model/Car.glb");
// useGLTF.preload("/assets/model/dance.glb");
useGLTF.preload("/assets/model/india-cricket.glb");
// useGLTF.preload("/assets/model/shop.glb");

export default function Canva() {
  // const camera = useThree();

  const [movement, setMovement] = useContext(ContextData);
  const { cam, view } = movement;
  const [dpr, setDpr] = useState(1.5);

  return (
    <Canvas
      id="three-canvas-container"
      shadows
      camera={{ fov: 45, makeDefault: !cam }}
      dpr={dpr}
      // frameloop="demand"
    >
      <Suspense fallback={null}>
        <XR>
          <Controllers />
          <PerformanceMonitor
            onIncline={() => setDpr(2)}
            onDecline={() => setDpr(1)}
          >
            <UsePlayerControls />

            {view === "Home" && (
              <>
                <PerspectiveCamera
                  makeDefault={cam}
                  fov={45}
                  position={[-150, 500, 1000]}
                />

                <OrbitControls
                  // mouseButtons={{ LEFT: THREE.MOUSE.ROTATE }}
                  // panSpeed={0.25}
                  rotateSpeed={0.5}
                  minDistance={20}
                  maxDistance={150}
                  minPolarAngle={angleToRadians(50)}
                  maxPolarAngle={angleToRadians(85)}
                  zoomSpeed={1}
                  enablePan={false}
                  enableDamping={true}
                  // minZoom={10}
                />
              </>
            )}

            <ambientLight intensity={0.5} />
            <Environment
              files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/cloud_layers_2k.hdr"
              ground={{ height: 0, radius: 2000, scale: 160 }}
            />
            <Part1 />
            {/* <Part3 position={[-10, 7, -50]} /> */}
            {/* <Part3 position={[-45, 7, -35]} /> */}
            <Video
              position={[-30, 10, -50]}
              rotation={[0, Math.PI / 6.5, 0]}
              scale={2}
              src="https://www.youtube.com/embed/heYd-U1vkeA?autoplay=1&loop=1&modestbranding=1&fs=0&rel=0&"
            />
            <Video
              position={[50, 10, -30]}
              rotation={[0, Math.PI / 6.5 - Math.PI / 2, 0]}
              scale={2}
              src="https://www.icc-cricket.com/world-test-championship/predictor/"
            />
            <Video
              position={[-40, 10, 30]}
              rotation={[0, Math.PI / 6.5 + Math.PI / 2, 0]}
              scale={2}
              src="https://www.icc-cricket.com/rankings/mens/overview"
            />
            {/* <Part4 position={[0, 1, 0]} /> */}
            <Tropy
              position={[30, 1, 30]}
              rotation={[0, Math.PI / 6.5 + Math.PI, 0]}
            />
            {/* <Character position={[0, 1, 0]} scale={1.5} /> */}
            <Character position={[30, 1, 10]} scale={1.5} />
            <Car position={[-50, 5, -30]} />
            <ImageTex
              position={[0, 1, 10]}
              rotation={[-Math.PI / 2, 0, Math.PI / 6]}
              scale={2}
            />
            <ImageTex
              position={[20, 1, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 6]}
              scale={2}
            />
            {/* <InstancesDance>
              <Dance
                position={[20, 1, -60]}
                scale={20}
                rotation={[0, -Math.PI / 8, 0]}
              />
            </InstancesDance> */}
            {/* <IndiaFan position={[0, 1, 0]} /> */}
            <IndiaFan
              position={[20, 1, -30]}
              scale={1.5}
              rotation={[0, Math.PI, 0]}
            />
            <Board position={[0, 1, 0]} />
            <Physics gravity={[0, -9.8, 0]}>
              <Ground />

              <RigidBody type="fixed" colliders="trimesh">
                <Part2 />
              </RigidBody>

              <Coins />

              {view === "Auditorium" && <ThirdPersonPlayer />}
              {/* <Debug /> */}
            </Physics>
            <AdaptiveDpr pixelated />
            {/* <AdaptiveEvents /> */}
          </PerformanceMonitor>
        </XR>
      </Suspense>
    </Canvas>
  );
}
