const initBoxes = () => {
    geo = new THREE.BoxGeometry(4, 4, 4);
    for (let x = 0; x < 100; x += 4) {
        for (let y = 0; y < 100; y += 4) {
            mat = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                wireframe: true,
                emissive: 0xffffff
            });
            mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(x - 48, 4, y - 48);
            mesh.px = x;
            mesh.py = y;
            boxes.push(mesh);
            createMesh('clearMesh');
        }
    }
}

const updateBoxes = () => {
    for (let i in boxes) {
        let value = (Math.abs(noise.perlin2(boxes[i].px / 100, boxes[i].py / 100)) * 10) - 4;
        boxes[i].position.y = value;
        boxes[i].px += perlin.freq;
        boxes[i].py += perlin.freq;
        boxes[i].material.color.setRGB(value / 2, 0, boxes[i].py);
    }
}

const perlinVariation = () => {
    perlin.dir ? perlin.freq += perlin.inc : perlin.freq -= perlin.inc;
    perlin.freq > 3 ? perlin.dir = false : perlin.freq < .2 ? perlin.dir = true : 0;
}

class Sketch {
    constrctor() {}
    init() {
        initBoxes();
    }
    update() {
        angle += freq;
        camera.position.x = radius * Math.sin(angle);
        camera.position.z = radius * Math.cos(angle);
        updateBoxes();
        perlinVariation();
    }
}
