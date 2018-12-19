const initBoxes = () => {
    geo = new THREE.BoxGeometry(3.8, 3.8, 3.8);
    mat = new THREE.MeshBasicMaterial({
        color: 0xe62929,
        wireframe: true
    });
    for (let x = 0; x < 100; x += 4) {
        for (let y = 0; y < 100; y += 4) {
            mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(x - 50, 1.9, y - 50);
            mesh.px = x;
            mesh.py = y;
            boxes.push(mesh);
            createMesh('clearMesh');
        }
    }
}

const updateBoxes = () => {
    noise.seed(Math.random());
    for (let i in boxes) {
        boxes[i].position.y = Math.abs(noise.perlin2(boxes[i].px / 100, boxes[i].py / 100)) * 5;
    }
}

class Sketch {
    constrctor() {}
    init() {
        initEnvironment();
        initBoxes();
    }
    update() {
        angle += freq;
        camera.position.x = radius * Math.sin(angle);
        camera.position.z = radius * Math.cos(angle);
        updateBoxes();
    }
}
