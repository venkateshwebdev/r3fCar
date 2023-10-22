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
import { CarContext, ThemeContext } from "./Context";
import { Model } from "./BackgroundModel";
import { BenTruck } from "./BenTruck";
import { Barbie } from "./Barbie";

const Scene = () => {
  const { theme } = useContext(ThemeContext);
  const cars =[<Car />,<BenTruck />,<Barbie />]
  const {car} = useContext(CarContext)
  return (
    <>
      <ambientLight
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: "2" }}
        intensity={3}
      />
      <directionalLight color={"white"} position={[0, 10, -4]} />
      <ScrollControls distance={5} damping={0.1}>
        <Scroll>
          {cars[car-1]}
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Scene;
