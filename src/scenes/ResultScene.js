
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

		// playAgainBtn
		const playAgainBtn = this.add.image(960, 893, "Re-Play-Button");

		this.playAgainBtn = playAgainBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	playAgainBtn;
	image
	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.soundObj = new SoundManager(this);
		// this.soundObj.playSound(this.soundObj.winningSound, false);
		// this.resultDeclaration.setStyle({ 'fontFamily': 'GameFont1' })
		console.log(playerWon)
		if (playerWon == "player_1_Won") {
			var image = this.add.image(960, 500, 'You-Won');
			image.setScale(0.5, 0.5)
			this.callTween(image);
			// this.confetti()
		} else if(playerWon == "player_2_Won"){
			var image = this.add.image(960, 500, 'Opponent-Won');
			image.setScale(0.5, 0.5)
			this.callTween(image);
			// this.confetti()
		}else if(playerWon == "player_Draw"){
			var image = this.add.image(960, 500, 'Draw');
			image.setScale(0.5, 0.5)
			this.callTween(image);
			// this.confetti()
		}
		// if(playerWon!="player_Draw"){
			
		// }

		this.playAgainBtn.setInteractive();
		this.playAgainBtn.on('pointerdown', () => {
			location.reload();
		})


	}

	callTween(target) {
		this.add.tween({
			targets: target,
			scaleX: 1,
			scaleY: 1,
			duration: 100,
			ease:"ease-in"
		});
	}

	confetti() {
		const defaults = {
			spread: 360,
			ticks: 50,
			gravity: 0,
			decay: 0.94,
			startVelocity: 30,
			shapes: ["star"],
			colors: ["FFFF8F", "FFBF00", "FFEA00", "E4D00A"],
		};

		confetti({
			...defaults,
			particleCount: 1,
			scalar: 1,
		});

		confetti({
			...defaults,
			particleCount: 1,
			scalar: 2,
		});

		confetti({
			...defaults,
			particleCount: 1,
			scalar: 3,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
