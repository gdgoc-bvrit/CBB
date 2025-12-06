import React from "react";
import { useGLTF } from "@react-three/drei";

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={1.1}
        position={[1, -2.5, -2.2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default Computers;