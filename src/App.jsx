import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { Loader, useGLTF } from "@react-three/drei";
import "./App.scss";
import Three from "./component/Three";
import Loading from "./component/ui/loader/Loader";
import UI from "./component/ui/UI";
import { ContextData } from "./component/context/Context";

function App() {
  const [context, setContext] = useState([false, "Home"]);
  useGLTF.preload("/assets/part1.glb");
  useGLTF.preload("/assets/part2.glb");
  useGLTF.preload("/assets/part3.glb");
  useGLTF.preload("/assets/part4.glb");
  useGLTF.preload("/assets/part5.glb");
  useGLTF.preload("/assets/part6.glb");
  useGLTF.preload("/assets/part7.glb");
  useGLTF.preload("/assets/part8.glb");
  useGLTF.preload("/assets/part9.glb");

  return (
    <ContextData.Provider value={[context, setContext]}>
      <UI />
      <Canvas id="three-canvas-container">
        <Suspense fallback={<Loading />}>
          <Three />
        </Suspense>
      </Canvas>
      <Loader />
    </ContextData.Provider>
  );
}

export default App;
