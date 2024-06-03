import { Part4 } from "./Part4";
import { RigidBody } from "@react-three/rapier";

const boxes = [];

for (let i = 0; i < 15; i++) {
  boxes.push({
    x: Math.random() * -50,
    y: 4,
    z: Math.random() * 50,
  });
}

for (let i = 0; i < 15; i++) {
  boxes.push({
    x: Math.random() * 50,
    y: 4,
    z: Math.random() * -50,
  });
}

export default function Coins() {
  return (
    <>
      {boxes.map((box, index) => (
        <RigidBody
          type="dynamic"
          colliders="cuboid"
          enabledRotations={[false, false, false]}
        >
          <Part4
            key={index}
            name={"coin" + index}
            position={[box.x, box.y, box.z]}
          />
        </RigidBody>
      ))}
    </>
  );
}
