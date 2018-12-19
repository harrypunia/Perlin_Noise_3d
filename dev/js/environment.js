const initEnvironment = () => {
    geo = new THREE.PlaneGeometry(100, 100, 25, 25);
    mat = new THREE.MeshBasicMaterial({
        color: 0x212121,
        wireframe: true
    })
    mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -1.2;
    floor = mesh;
    createMesh('clearRam');
}
