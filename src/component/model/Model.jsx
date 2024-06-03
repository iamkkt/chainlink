import React, { useContext, useEffect, useRef } from "react";
import { ContextData } from "../context/Context";
import gsap from "gsap";

import { useThree } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";

// import glbmodel from "/assets/part9.glb";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";
import Part8 from "./Part8";
import Part9 from "./Part9";

export default function Model() {
  const previous = useRef(null);
  // console.log(previous.current);
  const [context, setContext] = useContext(ContextData);
  const { scene, camera } = useThree();
  const { nodes } = useGLTF("/assets/part9.glb");

  const stallMaterial = new MeshStandardMaterial({
    color: "#9c0f05",
    opacity: 0.5,
    emissiveIntensity: 0,
  });

  const onClickObject = (hallID) => {
    // hallID.stopPropagation();
    // console.log(hallID);
    hallID = hallID.object.name;
    // console.log(hallID);
    if (hallID.startsWith("hall")) {
      setContext([false, hallID]);
    } else if (hallID.startsWith("stall")) {
      setContext([true, hallID]);
    }
  };

  const onPointerOverStall = (pointerOver) => {
    // console.log(pointerOver.object.material, "over");
    if (context[1] !== pointerOver.object.name) {
      pointerOver = pointerOver.object;
      pointerOver.material = stallMaterial;
      pointerOver.scale.set(
        pointerOver.scale.x * 1.1,
        pointerOver.scale.y * 2,
        pointerOver.scale.z * 1.1
      );
    }
  };

  const onClickStall = (pointerOver) => {
    // console.log(pointerOver.object.material, "over");
    // console.log(context[1]);
    // console.log(previous.current);

    if (previous.current === null) {
      pointerOver = pointerOver.object;
      pointerOver.material = stallMaterial;
      pointerOver.scale.set(
        pointerOver.scale.x * 1.1,
        pointerOver.scale.y * 2,
        pointerOver.scale.z * 1.1
      );
    } else if (context[1] !== previous.current.name) {
      pointerOver = pointerOver.object;
      pointerOver.material = stallMaterial;
      pointerOver.scale.set(
        pointerOver.scale.x * 1.1,
        pointerOver.scale.y * 2,
        pointerOver.scale.z * 1.1
      );
    }
  };

  const onPointerOutStall = (pointerOut) => {
    if (context[1] !== pointerOut.object.name) {
      // console.log(pointerOut, "out");
      pointerOut = pointerOut.object;
      pointerOut.scale.set(
        nodes[pointerOut.name].scale.x,
        nodes[pointerOut.name].scale.y,
        nodes[pointerOut.name].scale.z
      );
      pointerOut.material = nodes[pointerOut.name].material;
      // console.log(pointerOut, "outend");
    }
  };

  useEffect(() => {
    let hallone = scene.getObjectByName("hall001");
    var stallObject;

    if (context[1] === "Home") {
      gsap.to(camera.position, {
        x: -90,
        y: 20,
        z: -240,
        duration: 3,
      });
      hallone.visible = true;
      if (previous.current !== null) {
        onPointerOutStall({ object: previous.current });
        previous.current = null;
      }
    } else if (context[1] === "Agenda") {
      gsap.to(camera.position, {
        x: -60,
        y: 13,
        z: 0,
        duration: 3,
      });
      hallone.visible = true;
      if (previous.current !== null) {
        onPointerOutStall({ object: previous.current });
        previous.current = null;
      }
    } else if (context[1].startsWith("hall")) {
      stallObject = scene.getObjectByName(context[1]);
      // console.log(object);
      camera.lookAt(stallObject);
      if (stallObject.name === "hall001") {
        if (stallObject.visible !== false) {
          stallObject.visible = false;
          gsap.to(camera.position, {
            y: stallObject.position.y,
            x: stallObject.position.x,
            z: stallObject.position.z,
            duration: 3,
          });
        }
      } else if (stallObject.name === "hall002") {
        gsap.to(camera.position, {
          y: stallObject.position.y - 8,
          x: stallObject.position.x + 22,
          z: stallObject.position.z,
          duration: 3,
        });

        hallone.visible = true;
      }
      if (previous.current !== null) {
        onPointerOutStall({ object: previous.current });
        previous.current = null;
      }
    } else if (context[1].startsWith("stall")) {
      stallObject = scene.getObjectByName(context[1]);
      // console.log(stallObject);
      gsap.to(camera.position, {
        x: stallObject.position.x,
        y: stallObject.position.y,
        z: stallObject.position.z,
        duration: 2,
      });
      onClickStall({ object: stallObject });
      hallone.visible = false;
      if (previous.current !== null) {
        onPointerOutStall({ object: previous.current });
      }
      previous.current = stallObject;
    }
  }, [context]);

  return (
    <>
      {/* <Model4 onClick={onClickObject} /> */}
      {/* <Model3
        onClick={onClickObject}
        onPointerOver={onPointerOverStall}
        onPointerOut={onPointerOutStall}
      /> */}
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 onClick={onClickObject} />
      <Part5 onClick={onClickObject} />
      <Part6 />
      <Part7 />
      <Part8 />
      <Part9
        onClick={onClickObject}
        onPointerOver={onPointerOverStall}
        onPointerOut={onPointerOutStall}
      />
    </>
  );
}
