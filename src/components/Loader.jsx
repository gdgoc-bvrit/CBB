import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => (
  <Html center>
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      height: "100vh", fontSize: "2rem"
    }}>
      Loading 3D Model...
    </div>
  </Html>
);

export default Loader;