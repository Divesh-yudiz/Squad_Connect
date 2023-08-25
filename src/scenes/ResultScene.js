
// You can write more code here

/* START OF COMPILED CODE */

class ResultScene extends Phaser.Scene {

	constructor() {
		super("ResultScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(960, 540, "Background");

		// playAgainBtn
		const playAgainBtn = this.add.image(960, 893, "Re-Play-Button");

		this.playAgainBtn = playAgainBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	playAgainBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.soundObj = new SoundManager(this);
		// this.soundObj.playSound(this.soundObj.winningSound, false);
		// this.resultDeclaration.setStyle({ 'fontFamily': 'GameFont1' })
		console.log(playerWon)
		if(playerWon=="player_1_Won"){
			var image = this.add.image(960, 540, 'Player-1-Won');
		}else{
			var image = this.add.image(960, 540, 'Player-2-Won');
		}
		this.playAgainBtn.setInteractive();
		this.playAgainBtn.on('pointerdown',()=>{
			location.reload();
		})


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
