import React from "react";
import { useTexture } from "@react-three/drei";

export default function ImageTex(props) {
  const texture = useTexture(
    "https://hackathon.icc-cricket.com/assets/images/NIUM_logo.png"
  );

  return (
    <mesh {...props}>
      <planeGeometry args={[5, 1]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}
