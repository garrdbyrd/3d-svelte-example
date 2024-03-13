<script lang="ts">
    import { onMount } from 'svelte';
    import * as THREE from 'three';

    let container: HTMLElement;

   function createSimplePrism() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

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