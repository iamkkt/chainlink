import "./App.css";
import { Loader } from "@react-three/drei";
import React, { useState } from "react";

import UI from "./components/UI/UI";

import { ContextData } from "./context/Context";
import { VRButton } from "@react-three/xr";

import Canva from "./Canva";

function App() {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    yrotate: 0,
    yrotateminus: false,
    view: "Home",
    cam: true,
    room: "Home",
  });

  return (
    <ContextData.Provider value={[movement, setMovement]}>
      <UI />
      <VRButton />
      <Canva />
      <Loader />
    </ContextData.Provider>
  );
}

export default App;
