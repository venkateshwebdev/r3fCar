import {
  Center,
  ContactShadows,
  OrbitControls,
  ScrollControls,
  Text3D,
  useScroll,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Car } from "./Car";
import {motion} from "framer-motion-3d"
import { Pole } from "./Pole";
import { useEffect } from "react";
import Scene from "./scene";
const Experience = () => {
  return (
    <div className="pt-[100px] h-full w-full">
    <Canvas camera={{position:[0,5,0]}}>
        <Scene />
    </Canvas>
    </div>
  );
};

export default Experience;
