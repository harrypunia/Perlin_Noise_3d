const initEnvironment = () => {
    geo = new THREE.PlaneGeometry(100, 100, 25, 25);
    mat = new THREE.MeshBasicMaterial({
        color: 0x6796ff,
        side: THREE.DoubleSide
        //wireframe: true
    })
    mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = Math.PI / 2;
    floor = mesh;
    createMesh('clearRam');
}
