class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){
        this.load.image('arrow','assets/arrow.png');
        this.load.image('cupid','assets/cupidKirby.png');
        this.load.image('heart','assets/Heart.png');
        this.load.image('no','assets/no.png');
        this.load.image('yes','assets/yes.png');
        this.load.image('you','assets/you.png');
        this.load.bitmapFont('gem_font', 'assets/gem.png', 'assets/gem.xml');

    }

    create(){
        this.star = this;
        this.arrowG = this.add.group();
        this.add.sprite(100,config.height/2+200,'cupid').setScale(3);
        this.you = this.physics.add.sprite(config.width-100,config.height/2+200,'you').setScale(4);
        this.you.body.setImmovable();
        this.yes = this.add.sprite(config.width/2-100,config.height/2,'yes').setScale(5);
        this.yes.setInteractive({
            useHandCursor: true,
        })
        this.no = this.add.sprite(config.width/2+100,config.height/2,'no').setScale(5);
        this.no.setInteractive({
            useHandCursor: true,
        })

        this.physics.add.collider(this.arrowG,this.you,(arrow,y)=>{
            arrow.destroy();
        });

        this.yes.on('pointerdown', ()=>{
            this.scene.start('yesScene');
        })
        this.no.on('pointerdown', ()=>{
            this.scene.start('noScene');
        })

        this.spawnTimer = this.time.now;
        this.lastSpawn = this.time.now;
    }
    update(){
        if(this.lastSpawn > this.spawnTimer +1000){
            let arrow = this.physics.add.sprite(150,config.height/2+215,'arrow').setScale(3);
            arrow.setVelocityX(200);
            this.spawnTimer = this.lastSpawn;
            this.arrowG.add(arrow);
        }
        this.lastSpawn = this.time.now;
    }
}