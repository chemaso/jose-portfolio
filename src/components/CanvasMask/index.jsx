import { useRef, useState, Suspense } from 'react';
import round from 'lodash/round';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PerformanceMonitor } from '@react-three/drei/web';
import { ColorAverage as ColorAverageEffect } from '@react-three/postprocessing';
import { OrbitControls, Stage } from '@react-three/drei';
import './_index.scss';

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x, state.mouse.y, 10), 0.05);
  });
}

export default function CanvasMask({ ...props }) {
  const { nodes, materials } = useLoader(GLTFLoader, '/0 (12).glb');
  const [dpr, setDpr] = useState(1);

  const ref = useRef();
  return (
    <div className="canvas-mask-container">
      <Canvas shadows dpr={dpr} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <PerformanceMonitor onChange={({ factor }) => setDpr(round(0.5 + 1.5 * factor, 1))}>
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
          </PerformanceMonitor>
        </Suspense>
      </Canvas>
    </div>
  );
}

useLoader.preload(GLTFLoader, '/0 (12).glb');
