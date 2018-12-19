var sketch = new Sketch();

(() => {
    canvas = document.getElementsByClassName('canvas')[0];
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);
    document.body.appendChild(canvas);
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);
    camera.position.set(0, 0, 10);
    scene.add(camera);
    sketch.init();
})();

(animate = () => {
    sketch.update();
    renderer.render(scene, camera);
    renderer.setClearColor(0x101012);
    requestAnimationFrame(animate);
})();
