import { useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "../AppProvider";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Detailed,
  Environment,
  OrbitControls,
  Html,
} from "@react-three/drei";
import Caption from "../CanvasText";
import Rig from "../CanvasRig";
import { colors } from "../../constants";
import "./_index.scss";

function GameBackUnit({ index, z, speed, shuffle }) {
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
  const { nodes, materials } = useGLTF(`/figure-${shuffle.item}`);
  const [data] = useState({
    y: THREE.MathUtils.randFloatSpread(height * 2),
    x: THREE.MathUtils.randFloatSpread(2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, dt) => {
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z
      );
    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin)
    );
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });
  const geometryOption = nodes[shuffle.geometry].geometry;
  const materialsOption = materials[shuffle.materials];

  return (
    <Detailed ref={ref} distances={[0, 65, shuffle?.frequency]}>
      <mesh
        geometry={geometryOption}
        material={materialsOption}
        material-emissive={shuffle?.color}
      />
      <mesh
        geometry={geometryOption}
        material={materialsOption}
        material-emissive={shuffle?.color}
      />
      <mesh
        geometry={geometryOption}
        material={materialsOption}
        material-emissive={shuffle?.color}
      />
    </Detailed>
  );
}

export default function GameBack({
  speed = 1,
  count = 80,
  depth = 80,
  easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {
  const ref = useRef();

  const { shuffle } = useTheme();
  return (
    <Canvas
      style={{ backgroundColor: shuffle?.background }}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}
    >
      <Caption
        color={shuffle?.style ? "black" : "white"}
        shuffle={shuffle}
        position={[-1, 0.8, -4]}
        fontSize={8}
        lineHeight={0.3}
        level={1}
      >
        CREATE,
      </Caption>
      <Caption
        shuffle={shuffle}
        position={[0, 0, -4]}
        color={colors[shuffle.title]}
        fontSize={5}
        fill={0}
        lineHeight={0.4}
        level={2}
      >
        INNOVATE,
      </Caption>
      <Caption
        position={[0.5, -0.9, -5]}
        shuffle={shuffle}
        color={shuffle?.style ? "black" : "white"}
        fontSize={7}
        lineHeight={0.3}
        level={3}
      >
        STAND OUT
      </Caption>
      <spotLight
        position={[10, 20, 10]}
        penumbra={1}
        intensity={3}
        color={shuffle?.spot}
      />
      <Rig />
      {Array.from({ length: shuffle?.frequency }, (_, i) => (
        <GameBackUnit
          shuffle={shuffle}
          key={i}
          index={i}
          z={Math.round(easing(i / count) * depth)}
          speed={speed}
        />
      ))}
      <Environment preset="studio" />
    </Canvas>
  );
}
