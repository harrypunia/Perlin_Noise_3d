var sketch = new Sketch();

(() => {
    canvas = document.getElementsByClassName('canvas')[0];
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);
    document.body.appendChild(canvas);
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);
    scene.add(camera);
    sketch.init();
})();

(animate = () => {
    sketch.update();
    renderer.render(scene, camera);
    renderer.setClearColor(0x652222, 0);
    requestAnimationFrame(animate);
})();
