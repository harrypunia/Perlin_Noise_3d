class Box {
    constructor(x, y) {
        this.pos = new THREE.Vector2(x, y);
    }
    show() {
        geo = new THREE.BoxGeometry(1, 1, 1);
        mat = new THREE.MeshPhongMaterial({
            color: 0xefefef
        })
        createMesh(geo, mat);
    }
}
