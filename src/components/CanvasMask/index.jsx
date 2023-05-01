import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { ColorAverage as ColorAverageEffect } from '@react-three/postprocessing';
import { OrbitControls, Stage } from '@react-three/drei';
import './_index.scss';

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x, state.mouse.y, 10), 0.05);
  });
}

export default function CanvasMask({ ...props }) {
  const { nodes, materials } = useGLTF('/0 (12).glb');
  const ref = useRef();
  return (
    <div className="canvas-mask-container">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
          <group {...props}>
            <mesh
              // eslint-disable-next-line react/no-unknown-property
              castShadow
              // eslint-disable-next-line react/no-unknown-property
              receiveShadow
              // eslint-disable-next-line react/no-unknown-property
              geometry={nodes.Frontman.geometry}
              // eslint-disable-next-line react/no-unknown-property
              material={materials.Workspace1Mtl}
              // eslint-disable-next-line react/no-unknown-property
              position={[0.16, 0.85, 0.07]}
              // eslint-disable-next-line react/no-unknown-property
              rotation={[Math.PI / 2, 0, -1.9]}
              scale={4.5}
            />
          </group>
        </Stage>
        <Rig />
        <ColorAverageEffect />
        <OrbitControls enableZoom={false} enableRotate={false} autoRotate ref={ref} />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/0 (12).glb');
