class Yes extends Phaser.Scene{
    constructor(){
        super("yesScene");
    }
    
    preload(){
    }

    create(){
        this.add.sprite(config.width/2,config.height/2+150,'heart').setScale(4);
        this.titleText = this.add.bitmapText(config.width/2, config.height/2, 'gem_font', 'Thank You! Happy Valentines! <3', 40).setOrigin(0.5);
    }
}