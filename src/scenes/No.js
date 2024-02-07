class No extends Phaser.Scene{
    constructor(){
        super("noScene");
    }
    
    preload(){
    }

    create(){
        this.titleText = this.add.bitmapText(config.width/2, config.height/2, 'gem_font', 'Bruh, Try Again >:c', 40).setOrigin(0.5);
        this.yes = this.add.sprite(config.width/2-100,config.height/2+200,'yes').setScale(5);
        this.yes.setInteractive({
            useHandCursor: true,
        })
        this.no = this.add.sprite(config.width/2+100,config.height/2+200,'no').setScale(5);
        this.no.setInteractive({
            useHandCursor: true,
        })

        this.yes.on('pointerdown', ()=>{
            this.scene.start('yesScene');
        })
        this.no.on('pointerdown', ()=>{
            this.scene.start('noTwoScene');
        })
    }
}