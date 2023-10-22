import React, { useEffect, useRef } from "react";

import { ContactShadows, Wireframe, useGLTF, useScroll } from "@react-three/drei";
import { useFrame,useThree } from "@react-three/fiber";
import {useContext} from "react"
import { ThemeContext } from "./Context";
export function Car(props) {
  const {theme,setTheme} = useContext(ThemeContext)
  const scroll = useScroll();
  const carRef = useRef();
  const { nodes, materials } = useGLTF("/model (3).gltf");
  const {camera} = useThree()
  useFrame((state,delta)=>{
    if(scroll.offset<0.6){
      carRef.current.rotation.y=0
      carRef.current.rotation.x =-scroll.offset*2.5
      setTheme(0)
    }
    if(scroll.offset>0.6){
      setTheme(1)
      carRef.current.rotation.y +=delta/10
    }
  },[scroll])
  return (
    <>
      <ContactShadows blur={3} />
      <group
        {...props}
        ref={carRef}
        dispose={null}
        scale={0.7}
      >
        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.steer.geometry}
          material={materials["gray.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tires.geometry}
          material={materials["rubber.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003.geometry}
          material={materials["gray.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003_1.geometry}
          material={materials["light_f.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003_2.geometry}
          material={materials["body.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003_3.geometry}
          material={materials.glass_crack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003_4.geometry}
          material={materials["glassgray.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003_5.geometry}
          material={materials.Light}
        />
      </group>
    </>
  );
}

useGLTF.preload("/model (3).gltf");
