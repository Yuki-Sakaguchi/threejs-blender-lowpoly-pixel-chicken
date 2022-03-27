import './style.css'

import { Scene, WebGLRenderer, PerspectiveCamera, Group, AmbientLight } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import model from './assets/chicken.glb?url';
let chicken: Group;

let scene = new Scene();

let camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 2;
camera.position.z = 12;

const light = new AmbientLight(0xFFFFFF, 1.0);
scene.add(light);

let renderer = new WebGLRenderer({
  antialias: true, // 表面を滑らかにする
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
//@ts-ignore
renderer.gammaOutput = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const gltfLoader = new GLTFLoader();
gltfLoader.load(model, (data) => {
  chicken = data.scene;
  chicken.scale.set(5.0, 5.0, 5.0);
  chicken.position.set(0.0, -2.0, 0.0);
  scene.add(chicken);
});

const animate = () => {
  requestAnimationFrame(animate);
  if (chicken != null) chicken.rotation.y += 0.005;
  renderer.render(scene, camera);
};
animate();

const resize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};
window.addEventListener('resize', resize);
resize();
