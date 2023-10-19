import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pole(props) {
  const { nodes, materials } = useGLTF("/model (4).gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder096.geometry}
        material={materials["Black.012"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder096_1.geometry}
        material={materials["Yellow.007"]}
      />
    </group>
  );
}

useGLTF.preload("/model (4).gltf");