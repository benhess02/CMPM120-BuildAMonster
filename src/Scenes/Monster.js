class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 30, "monsterParts", "eye_red.png");
        my.sprite.armLeft = this.add.sprite(this.bodyX + 100, this.bodyY + 50, "monsterParts", "arm_greenD.png");
        my.sprite.armRight = this.add.sprite(this.bodyX - 100, this.bodyY + 50, "monsterParts", "arm_greenD.png");
        my.sprite.armRight.flipX = true;
        my.sprite.legLeft = this.add.sprite(this.bodyX + 50, this.bodyY + 120, "monsterParts", "leg_greenD.png");
        my.sprite.legRight = this.add.sprite(this.bodyX - 50, this.bodyY + 120, "monsterParts", "leg_greenD.png");
        my.sprite.legRight.flipX = true;
        my.sprite.mouthFangs = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "mouthB.png");

        my.sprite.mouthFangs.visible = false;

        this.sKey = this.input.keyboard.addKey("S");
        this.fKey = this.input.keyboard.addKey("F");

        this.aKey = this.input.keyboard.addKey("A");
        this.dKey = this.input.keyboard.addKey("D");
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.sKey.isDown) {
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthFangs.visible = false;
        }
        if(this.fKey.isDown) {
            my.sprite.mouthSmile.visible = false;
            my.sprite.mouthFangs.visible = true;
        }

        var speed = 3;

        if(this.aKey.isDown) {
            my.sprite.body.x -= speed;
            my.sprite.eye.x -= speed;
            my.sprite.mouthFangs.x -= speed;
            my.sprite.mouthSmile.x -= speed;
            my.sprite.armLeft.x -= speed;
            my.sprite.armRight.x -= speed;
            my.sprite.legLeft.x -= speed;
            my.sprite.legRight.x -= speed;
        }
        if(this.dKey.isDown) {
            my.sprite.body.x += speed;
            my.sprite.eye.x += speed;
            my.sprite.mouthFangs.x += speed;
            my.sprite.mouthSmile.x += speed;
            my.sprite.armLeft.x += speed;
            my.sprite.armRight.x += speed;
            my.sprite.legLeft.x += speed;
            my.sprite.legRight.x += speed;
        }
    }

}