const initBoxes = () => {
    geo = new THREE.BoxGeometry(1, 1, 1, 10);
    mat = new THREE.MeshPhongMaterial({
        color: 0xe62929,
        wireframe: true
    });
    mesh = new THREE.Mesh(geo, mat);
    for (let x = 0; x < 24; x++) {
        for (let y = 0; y < 24; y++) {
            mesh.position.set(x, 0.5, y);
            createMesh();
        }
    }
    clearRam('all');
}

class Sketch {
    constrctor() {}
    init() {
        initEnvironment();
        initBoxes();
    }
    update() {
        floor.rotation.z += .001;
    }
}
