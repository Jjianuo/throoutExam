import Fuel from "./fuel.js";

export default class Spacehip extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'spaceship');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.fuel = 0;
    }

    preUpdate() {
        super.preUpdate();
        if (this.scene.physics.overlap(this.scene.player, this) && this.scene.player.fuel()) {
            this.fuel++;
            this.scene.fuel.destroy();
            this.scene.player.hasfuel = false;
            this.randomx = Math.random() * 220;
            this.randomy = Math.random() * 170;
            this.scene.add.existing(new Fuel(this.scene, this.randomx, this.randomy));
            console.log("hy");
        }
    }

    

}