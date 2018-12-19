var sketch = new Sketch(),
    scene, renderer, camera;

const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);
    scene.add(camera);
    sketch.init();
    animate();
}

const animate = () => {
    sketch.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();
