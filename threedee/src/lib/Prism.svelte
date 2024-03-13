<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let container: HTMLElement;

  function createSimplePrism() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Cube
  const geometry = new THREE.BoxGeometry(2.0, 2.0, 2.0);
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Camera
  camera.position.z = 5;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 3, 5); // Position the light
  scene.add(directionalLight);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}

onMount(() => {
  createSimplePrism();
});

</script>

<div bind:this={container} id="prism-container"></div>

<style>
    #prism-container {
      width: 100vw; /* Adjust to fit your design */
      height: 100vh; /* Adjust to fit your design */
      background-color: #e0e0e0; /* Temporary background to verify visibility */
    }
</style>