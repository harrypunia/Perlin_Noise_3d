const initEnvironment = () => {
    geo = new THREE.PlaneGeometry(80, 80, 25, 25);
    mat = new THREE.MeshBasicMaterial({
        color: 0xff6767,
        side: THREE.DoubleSide
        //wireframe: true
    })
    mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = Math.PI / 2;
    floor = mesh;
    createMesh('clearRam');
}
