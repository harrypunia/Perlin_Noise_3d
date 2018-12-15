let sketch = new Sketch(),
    scene, renderer, camera, canvas;

const init = () => {
    canvas = document.getElementById('canvas');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);
    document.body.appendChild(canvas);
    sketch.init();
    animate();
}

const animate = () => {
    sketch.update();
    render();
    requestAnimationFrame(animate);
}

const render = () => {
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}

init();
