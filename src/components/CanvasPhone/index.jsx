import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import './_index.scss';

export default function CanvasPhone({ ...props }) {
  const { nodes, materials } = useGLTF('/phone.glb');
  const ref = useRef();
  return (
    <div className="canvas-phone-container">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Stage controls={ref} preset="upfront" intensity={1} shadows={false} environment="studio">
          false
          <group {...props}>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <group rotation={[-Math.PI / 2, 0, 0]}>
              {/* eslint-disable-next-line react/no-unknown-property */}
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group
                  // eslint-disable-next-line react/no-unknown-property
                  position={[-473.62, 282.92, 892.17]}
                  // eslint-disable-next-line react/no-unknown-property
                  rotation={[-0.02, 1.1, -0.21]}
                  scale={100}
                />
                <group
                  // eslint-disable-next-line react/no-unknown-property
                  position={[26.17, 73.51, 68.03]}
                  // eslint-disable-next-line react/no-unknown-property
                  rotation={[-Math.PI / 4, 0, 0.98]}
                  scale={5.6}>
                  <mesh
                    // eslint-disable-next-line react/no-unknown-property
                    castShadow
                    // eslint-disable-next-line react/no-unknown-property
                    receiveShadow
                    // eslint-disable-next-line react/no-unknown-property
                    geometry={nodes.Plane_phone_0.geometry}
                    // eslint-disable-next-line react/no-unknown-property
                    material={materials.phone}
                  />
                </group>
              </group>
            </group>
          </group>
          false
        </Stage>
        <OrbitControls autoRotate enableZoom={false} enableRotate={true} ref={ref} />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/phone.glb');
