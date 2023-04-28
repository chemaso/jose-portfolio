import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import "./_index.scss";

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x * 30, state.mouse.y * 30, 10),
      0.03
    );
  });
}

export default function CanvasPhone({ depth, ...props }) {
  const { nodes, materials } = useGLTF("/phone.glb");
  const ref = useRef();
  return (
    <div className="canvas-phone-container">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Stage
          controls={ref}
          preset="upfront"
          intensity={1}
          shadows={false}
          environment="studio"
        >
          false
          <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group
                  position={[-473.62, 282.92, 892.17]}
                  rotation={[-0.02, 1.1, -0.21]}
                  scale={100}
                />
                <group
                  position={[26.17, 73.51, 68.03]}
                  rotation={[-Math.PI / 4, 0, 0.98]}
                  scale={5.6}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_phone_0.geometry}
                    material={materials.phone}
                  />
                </group>
              </group>
            </group>
          </group>
          false
        </Stage>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enableRotate={true}
          ref={ref}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/phone.glb");
