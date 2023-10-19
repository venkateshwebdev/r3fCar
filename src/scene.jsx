import {
  OrbitControls,
  ScrollControls,
  Scroll,
  useScroll,
} from "@react-three/drei";
import { Car } from "./Car";
import { useFrame } from "@react-three/fiber";
import { useEffect, useContext } from "react";
import { Pole } from "./Pole";
import { ThemeContext } from "./Context";

const Scene = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ambientLight
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: "2" }}
        intensity={3}
      />
      <directionalLight color={"white"} position={[0, 10, -4]} />
      {theme && <directionalLight color={"blue"} position={[0, 5, 0]} />}
      {theme && <directionalLight color={"red"} position={[0, 5, 0]} />}
      {theme && <pointLight color={"green"} position={[0, 2, -5]} />}
      <ScrollControls distance={5} damping={0.1}>
        <Scroll>
          <Car />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Scene;
