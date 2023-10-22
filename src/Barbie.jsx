import React, { useRef } from "react";
import { useGLTF, useAnimations, useScroll, Wireframe } from "@react-three/drei";
import { ThemeContext } from "./Context";
import {useFrame} from "@react-three/fiber"
import {useContext} from "react";
export function Barbie(props) {
    const {theme,setTheme} = useContext(ThemeContext)
    const scroll = useScroll()
  const group = useRef();
  const { nodes, materials } = useGLTF("/cartoon_car.glb");
  useFrame((state,delta)=>{
    if(scroll.offset<0.6){
      group.current.rotation.y=0
      group.current.rotation.x =-scroll.offset*2.5
      setTheme(0)
    }
    if(scroll.offset>0.6){
      setTheme(2)
      group.current.rotation.y +=delta/5
    }
  },[scroll])
  return (
    <group {...props} ref={group} dispose={null} scale={0.3}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.black_floats_Pure_black_0.geometry}
            material={materials.Pure_black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.black_floats_chrome_0.geometry}
            material={materials.chrome}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body_car_body_0.geometry}
          material={materials.car_body}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hood_car_body_0.geometry}
          material={materials.car_body}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.front_bumper_carbon_fiber_0.geometry}
          material={materials.carbon_fiber}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.front_fenders_carbon_fiber_0.geometry}
          material={materials.carbon_fiber}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_car_body_0.geometry}
          material={materials.car_body}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_window_0.geometry}
          material={materials.window}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trunk_car_body_0.geometry}
          material={materials.car_body}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.black_parts_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rear_fenders_carbon_fiber_0.geometry}
          material={materials.carbon_fiber}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.headlight_glass_headlight_glass_0.geometry}
          material={materials.headlight_glass}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rear_bumper_carbon_fiber_0.geometry}
          material={materials.carbon_fiber}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.exhaust_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.side_skirts_carbon_fiber_0.geometry}
          material={materials.carbon_fiber}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_window_0.geometry}
          material={materials.window}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_window_0.geometry}
          material={materials.window}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035_window_0.geometry}
          material={materials.window}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mirrors_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.front_right_wheel_wheel_0.geometry}
          material={materials.wheel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.intercooler_intercooler_0.geometry}
          material={materials.intercooler}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rear_wheels_wheel_0.geometry}
          material={materials.wheel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.front_left_wheel_wheel_0.geometry}
          material={materials.wheel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/cartoon_car.glb");