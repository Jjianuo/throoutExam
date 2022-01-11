export default class Menu extends Phaser.Scene 
{
    constructor(){
        super({ key: 'menu' });
        this.start = false;
    }

    create()
    {
		this.title = this.add.text(86,60, 'JetPac', {
            fontFamily: 'Pixeled',
            fontSize: 16,
            align: 'center',
            color: '#fff'

        });
        this.easymode = this.add.text(86,90, 'Fácil', {
            fontFamily: 'Pixeled',
            fontSize: 12,
            align: 'center',
            color: '#fff'

        });
        this.easymode.setInteractive();
        this.easymode.on('pointerup', () => { 
            this.scene.start('level');
         });
	}

    preUpdate(t,dt) {

    }
}