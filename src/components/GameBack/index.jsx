import { useRef, useState, Suspense, useTransition, useEffect } from 'react';
import round from 'lodash/round';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { useTheme } from '../AppProvider';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';
import { Detailed, Environment } from '@react-three/drei';
import { PerformanceMonitor } from '@react-three/drei/web';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Caption from '../CanvasText';
import Rig from '../CanvasRig';
import { colors } from '../../constants';
import './_index.scss';

function GameBackUnit({ index, z, speed, shuffle }) {
  const ref = useRef();
  const { viewport, camera } = useThree();
  const [isPending, startTransition] = useTransition();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
  const { nodes, materials } = useLoader(GLTFLoader, `/figure-${shuffle.item}`);
  const [data] = useState({
    y: THREE.MathUtils.randFloatSpread(height * 2),
    x: THREE.MathUtils.randFloatSpread(2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI
  });

  useFrame((state, dt) => {
    if (dt < 0.1) {
      startTransition(() => {
        ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y += dt * speed), -z);
        ref.current.rotation.set(
          (data.rX += dt / data.spin),
          Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
          (data.rZ += dt / data.spin)
        );
      });
    }
    if (data.y > height * (index === 0 ? 4 : 1)) {
      startTransition(() => {
        data.y = -(height * (index === 0 ? 4 : 1));
      });
    }
  });
  const geometryOption = nodes[shuffle.geometry].geometry;
  const materialsOption = materials[shuffle.materials];

  const meshProps = {
    isPending,
    geometry: geometryOption,
    material: materialsOption,
    'material-emissive': shuffle?.color
  };

  return (
    <Detailed ref={ref} distances={[0, 10, 30]}>
      <mesh {...meshProps} />
      <mesh {...meshProps} />
      <mesh {...meshProps} />
    </Detailed>
  );
}

const TitleCanvas = ({ shuffle }) => {
  return (
    <>
      <Caption
        color={shuffle?.style ? 'black' : 'white'}
        shuffle={shuffle}
        position={[-1, 0.8, -4]}
        fontSize={8}
        lineHeight={0.3}
        level={1}>
        CREATE,
      </Caption>
      <Caption
        shuffle={shuffle}
        position={[0, 0, -4]}
        color={colors[shuffle.title]}
        fontSize={5}
        fill={0}
        lineHeight={0.4}
        level={2}>
        INNOVATE,
      </Caption>
      <Caption
        position={[0.5, -0.9, -5]}
        shuffle={shuffle}
        color={shuffle?.style ? 'black' : 'white'}
        fontSize={7}
        lineHeight={0.3}
        level={3}>
        STAND OUT
      </Caption>
    </>
  );
};

const Fallback = () => {
  const { setGlobalLoading } = useTheme();
  useEffect(() => {
    return () => {
      setGlobalLoading(false);
    };
  }, []);
  return <></>;
};

export default function GameBack({
  speed = 1,
  count = 80,
  depth = 80,
  easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2))
}) {
  const { shuffle } = useTheme();
  const [dpr, setDpr] = useState(1);

  const spotProps = {
    position: [10, 20, 10],
    penumbra: 1,
    intensity: 3
  };
  return (
    <Canvas
      dpr={dpr}
      style={{ backgroundColor: shuffle?.background }}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}>
      <Suspense fallback={<Fallback />}>
        <PerformanceMonitor onChange={({ factor }) => setDpr(round(0.5 + 1.5 * factor, 1))}>
          <TitleCanvas shuffle={shuffle} />
          <spotLight {...spotProps} color={shuffle?.spot} />
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
        </PerformanceMonitor>
      </Suspense>
    </Canvas>
  );
}

TitleCanvas.propTypes = {
  shuffle: PropTypes.objectOf({
    color: PropTypes.string,
    item: PropTypes.string,
    background: PropTypes.string,
    spot: PropTypes.string,
    geometry: PropTypes.string,
    materials: PropTypes.string,
    style: PropTypes.string,
    frequency: PropTypes.number,
    title: PropTypes.string
  })
};

GameBack.propTypes = {
  speed: PropTypes.number,
  count: PropTypes.number,
  depth: PropTypes.number,
  easing: PropTypes.func
};

GameBackUnit.propTypes = {
  index: PropTypes.string,
  z: PropTypes.number,
  speed: PropTypes.number,
  shuffle: PropTypes.objectOf({
    color: PropTypes.string,
    item: PropTypes.string,
    background: PropTypes.string,
    spot: PropTypes.string,
    geometry: PropTypes.string,
    materials: PropTypes.string,
    style: PropTypes.string,
    frequency: PropTypes.number,
    title: PropTypes.string
  })
};
