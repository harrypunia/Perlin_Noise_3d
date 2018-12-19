const initBoxes = () => {
    geo = new THREE.BoxGeometry(3.9, 3.9, 3.9);
    mat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        //wireframe: true
    });
    for (let x = 0; x < 100; x += 4) {
        for (let y = 0; y < 100; y += 4) {
            mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(x - 48, 0, y - 48);
            mesh.px = x;
            mesh.py = y;
            boxes.push(mesh);
            createMesh('clearMesh');
        }
    }
}

const updateBoxes = () => {
    for (let i in boxes) {
        let value = Math.abs(noise.perlin2(boxes[i].px / 100, boxes[i].py / 100)) * 10;
        value -= 2;
        boxes[i].position.y = value;
        boxes[i].px += perlin.freq;
        boxes[i].py += perlin.freq;
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
