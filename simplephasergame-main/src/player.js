/**
 * Clase que representa el jugador del juego. El jugador se mueve por el mundo usando los cursores.
 * También almacena la puntuación o número de estrellas que ha recogido hasta el momento.
 */
export default class Player extends Phaser.GameObjects.Sprite {
  
  /**
   * Constructor del jugador
   * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'jetpac');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    // Queremos que el jugador no se salga de los límites del mundo
    this.body.setCollideWorldBounds();
    this.speed = 150;
    this.jumpSpeed = -600;
    // Esta label es la UI en la que pondremos la puntuación del jugador
    this.label = this.scene.add.text(10, 10, "");
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.createanims();
    this.play('idle', true);
    this.hasfuel = false;
  }

  /**
   * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
   * Como se puede ver, no se tratan las colisiones con las estrellas, ya que estas colisiones 
   * ya son gestionadas por la estrella (no gestionar las colisiones dos veces)
   * @override
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    if (this.cursors.up.isDown) {
      this.body.setAccelerationY(this.jumpSpeed);
      this.play('fly', true);
    }
    else this.body.setAccelerationY(0);
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-this.speed);
      this.flipX = true;
      this.play('walk', true);
    }
    else if (this.cursors.right.isDown) {
      this.body.setVelocityX(this.speed);
      this.flipX = false;
      this.play('walk', true);
    }
    else {
      this.body.setVelocityX(0);
      if (this.body.onFloor())
      this.play('idle');
    }
  }

  fuel(){
    return this.hasfuel;
  }
  
  createanims(){
    this.anims.create({
      key: 'fly',
      frames: this.anims.generateFrameNumbers('jetpac', {
        start: 0,
        end: 3
      }),
      framerate: 1,
      repeat: -1
    });
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('jetpac', {
        start: 4,
        end: 7
      }),
      framerate: 1,
      repeat: -1
    });
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('jetpac', {
        start: 4,
        end: 4
      }),
      framerate: 1,
      repeat: -1
    });

  }

}
