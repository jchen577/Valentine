class NoTwo extends Phaser.Scene{
    constructor(){
        super("noTwoScene");
    }
    
    preload(){
    }

    create(){
        this.font = 40;
        this.titleText = this.add.bitmapText(config.width/2, config.height/2, 'gem_font', 'Please? Im begging you!', 40).setOrigin(0.5);
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
            this.font+=10;
            this.titleText.text = "PLEASE!"
            this.titleText.setFontSize(this.font);
        })
    }
}