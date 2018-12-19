class Sketch {
    constrctor() {

    }
    init() {
        let geo = new THREE.BoxGeometry(10, 10, 10),
            mat = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                wireframe: true
            }),
            mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);
    }
    update() {}
}
