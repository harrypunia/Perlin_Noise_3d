const initBoxes = () {
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 24; j++) {

        }
        console.log(i);
    }
    console.log('hey');
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
