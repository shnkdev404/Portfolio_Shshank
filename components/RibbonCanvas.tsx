"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  width?: number;
  height?: number;
  cameraZ?: number;
  speed?: number;
  p?: number;
  q?: number;
  radius?: number;
  tube?: number;
}

export default function RibbonCanvas({ width=300, height=300, cameraZ=3.6, speed=1, p=2, q=3, radius=0.88, tube=0.30 }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(45, width/height, 0.1, 100);
    cam.position.z = cameraZ;

    // Rich color env for PMREM
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    [0xff55ff, 0x44ffcc, 0x5599ff, 0xffaa22, 0xff2266].forEach((color, i) => {
      const l = new THREE.PointLight(color, 3, 20);
      const a = (i / 5) * Math.PI * 2;
      l.position.set(Math.cos(a)*5, Math.sin(a)*5, 3);
      envScene.add(l);
    });
    const envTex = pmrem.fromScene(envScene).texture;
    scene.environment = envTex;

    const mesh = new THREE.Mesh(
      new THREE.TorusKnotGeometry(radius, tube, 400, 48, p, q),
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 1.0,
        roughness: 0.0,
        iridescence: 1.0,
        iridescenceIOR: 2.5,
        iridescenceThicknessRange: [80, 900] as [number, number],
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        reflectivity: 1.0,
        envMapIntensity: 3.0,
      })
    );
    scene.add(mesh);

    const lights: [number, number, [number, number, number]][] = [
      [0xff33cc, 5, [-2, 2, 3]],
      [0x00ffee, 4, [3, -1, 2]],
      [0x4466ff, 3, [0, 3, -1]],
      [0xffcc00, 2, [2, -2, 4]],
    ];
    lights.forEach(([c, i, pos]) => {
      const l = new THREE.DirectionalLight(c, i);
      l.position.set(...pos);
      scene.add(l);
    });
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    let id: number;
    const tick = () => {
      id = requestAnimationFrame(tick);
      mesh.rotation.x += 0.005 * speed;
      mesh.rotation.y += 0.009 * speed;
      mesh.rotation.z += 0.003 * speed;
      renderer.render(scene, cam);
    };
    tick();

    return () => {
      cancelAnimationFrame(id);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" style={{ width, height }} />;
}