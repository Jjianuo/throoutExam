import Boot from './boot.js';
import Menu from './menu.js';
import Level from './scene.js';

window.onload = ()=>{

    let config = {
        type: Phaser.AUTO,
        scale: {
            width: 256,
            height: 192,
            zoom: 3,
            autoCenter: Phaser.Scale.Center.CENTER_HORIZONTALLY
        },
        pixelArt: true,
        scene: [Boot, Level, Menu],
        physics: { 
            default: 'arcade', 
            arcade: { 
                gravity: { y: 400 }, 
                debug: false 
            } 
        }
    };

    new Phaser.Game(config);
};