export default class Meteorite extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'meteor');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.timerbool = false;
        this.spawnRate = 2000;
        this.fallspeed = 400;
    }

    preUpdate() {
        super.preUpdate();
        this.body.setVelocityY(this.fallspeed)
        if (this.scene.physics.overlap(this.scene.player, this)) {
            this.scene.player.destroy();
            this.scene.restart();
            this.scene.start('level');
        }
        if (!this.timerbool) {
            this.timerbool = true;
            this.timer = this.scene.time.addEvent({
                delay: this.delay,
                callback: onEvent,
                callbackScope: this,
                loop: false
            });

            function onEvent() {
                this.randomx = Math.random() * 220;
                this.scene.add.existing(new Meteorite(this.scene, this.randomx, 0))
                this.timerbool = false
            }
        }
    }

    createanims(){
        this.anims.create({
            key: 'meteor',
            frames: this.anims.generateFrameNumbers('meteor', {
              start: 0,
              end: 1
            }),
            framerate: 1,
            repeat: -1
          });
    }

}