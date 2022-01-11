export default class Fuel extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'fuel');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.follow = false;
    }

    preUpdate() {
        super.preUpdate();
        if (this.scene.physics.overlap(this.scene.player, this)) {
            this.follow = true;
            this.scene.player.hasfuel = true;
        }
        if(this.follow) this.setPosition(this.scene.player.x, this.scene.player.y);
    }

    

}