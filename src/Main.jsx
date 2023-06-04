import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import MyModal from "./MyModal";
import { useState } from "react";

export const Main = () => {
  const [person, setPerson] = useState({ name: "", portfolioURL: "" });

  return (
    <>
      <MyModal setPerson={setPerson}></MyModal>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
      >
        <Experience person={person} />
      </Canvas>
    </>
  );
};
