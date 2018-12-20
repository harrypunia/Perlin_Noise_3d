var scene, renderer, camera, canvas, geo, mat, mesh, floor, boxes = [],
    angle = 0,
    freq = 0.002,
    radius = 100,
    noise,
    perlin = {
        freq: .5,
        dir: true,
        inc: .005
    }

noise.seed(Math.random());

const clearRam = many => {
    if (many == 'all') {
        geo = null;
        mat = null;
        mesh = null;
    } else if (many == 'onlyMesh') {
        mesh = null;
    }
}

const createMesh = clear => {
    scene.add(mesh);
    clear == 'clearRam' ? clearRam('all') : clear == 'clearMesg' ? clearRam('onlyMesh') : 0;
}
