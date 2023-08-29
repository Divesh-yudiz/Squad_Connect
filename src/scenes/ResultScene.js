
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

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.soundObj = new SoundManager(this);
		// this.soundObj.playSound(this.soundObj.winningSound, false);
		// this.resultDeclaration.setStyle({ 'fontFamily': 'GameFont1' })
		console.log(playerWon)
		if (playerWon == "player_1_Won") {
			var image = this.add.image(960, 500, 'Player-1-Won');
		} else {
			var image = this.add.image(960, 500, 'Player-2-Won');
		}

		this.confetti()

		this.playAgainBtn.setInteractive();
		this.playAgainBtn.on('pointerdown', () => {
			location.reload();
		})


	}

	confetti() {
		const count = 100,
			defaults = {
				origin: { y: 0.7 },
			};

		function fire(particleRatio, opts) {
			confetti(
				Object.assign({}, defaults, opts, {
					particleCount: Math.floor(count * particleRatio),
				})
			);
		}

		fire(0.5, {
			spread: 10,
			startVelocity: 55,
		});

		fire(0.4, {
			spread: 30,
		});

		fire(0.7, {
			spread: 50,
			decay: 0.91,
			scalar: 0.8,
		});

		fire(0.2, {
			spread: 60,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
		});

		fire(0.2, {
			spread: 60,
			startVelocity: 45,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
