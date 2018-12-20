var scene, renderer, camera, canvas, geo, mat, mesh, floor, boxes = [],
    once = false,
    angle = 0,
    freq = 0.002,
    radius = 100,
    noise,
    listener = new THREE.AudioListener(),
    sound = new THREE.Audio(listener),
    audioLoader = new THREE.AudioLoader(),
    analyzer,
    audoData,
    perlin = {
        freq: .5,
        dir: true,
        inc: .005
    };

//noise.seed(Math.random());

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
    scene.add(mesh)
    clear == 'all' ? clearRam('all') : 0;
}
