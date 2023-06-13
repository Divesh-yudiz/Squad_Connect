
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

		// resultbg
		const resultbg = this.add.image(960, 540, "resultbg");
		resultbg.scaleX = 0.35;
		resultbg.scaleY = 0.35;

		// ResultDeclaration
		const resultDeclaration = this.add.text(960, 540, "", {});
		resultDeclaration.setOrigin(0.5, 0.5);
		resultDeclaration.text = "New text";
		resultDeclaration.setStyle({ "align": "center", "fontSize": "80px" });

		// playAgainBtn
		const playAgainBtn = this.add.image(949, 834, "playAgainButton2x");

		this.resultDeclaration = resultDeclaration;
		this.playAgainBtn = playAgainBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	resultDeclaration;
	/** @type {Phaser.GameObjects.Image} */
	playAgainBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.soundObj = new SoundManager(this);
		this.soundObj.playSound(this.soundObj.winningSound, false);
		this.resultDeclaration.setStyle({ 'fontFamily': 'GameFont1' })
		this.resultDeclaration.setText(`${playerWon} Won...`)
		this.playAgainBtn.setInteractive();
		this.playAgainBtn.on('pointerdown',()=>{
			location.reload();
		})


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
