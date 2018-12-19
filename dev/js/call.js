var scene, renderer, camera, canvas, geo, mat, mesh, floor;

const clearRam = many => {
    if (many == 'all') {
        geo = null;
        mat = null;
        mesh = null;
    } else if (many == 'onlyMat') {
        mat = null;
    }
}

const createMesh = clear => {
    scene.add(mesh);
    clearRam('all')
}
