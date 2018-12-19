const initBoxes = () => {
    geo = new THREE.BoxGeometry(4, 4, 4);
    mat = new THREE.MeshBasicMaterial({
        color: 0xe62929,
        wireframe: true
    });
    for (let x = 0; x < 100; x += 4) {
        for (let y = 0; y < 100; y += 4) {
            mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(x - 50, 2, y - 50);
            mesh.px = x;
            mesh.py = y;
            boxes.push(mesh);
            createMesh('clearMesh');
        }
    }
}

const updateBoxes = () => {
    for (let i in boxes) {
        let value = Math.abs(noise.perlin2(boxes[i].px / 100, boxes[i].py / 100));
        value *= 10;
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
