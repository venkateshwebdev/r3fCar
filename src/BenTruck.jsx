import React, { useRef } from "react";
import { useGLTF, useAnimations, useScroll, Wireframe } from "@react-three/drei";
import { ThemeContext } from "./Context";
import {useFrame} from "@react-three/fiber"
import {useContext} from "react";
export function BenTruck(props) {
    const {theme,setTheme} = useContext(ThemeContext)
    const scroll = useScroll()
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Aw3E-car-transformed.glb");
  const { actions } = useAnimations(animations, group);
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
    <group ref={group} {...props} dispose={null} scale={0.7}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.379}
        >
          <group
            name="b7442e26e25842a8b9888e6c536fe8d3fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Car" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_78"
                      geometry={nodes.Object_78.geometry}
                      material={materials.Mat_Robot}
                      skeleton={nodes.Object_78.skeleton}
                    >
                    </skinnedMesh>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Aw3E-car-transformed.glb");