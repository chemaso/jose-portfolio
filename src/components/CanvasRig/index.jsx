import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 3, state.mouse.y / 3, 10), 0.05);
  });
}
