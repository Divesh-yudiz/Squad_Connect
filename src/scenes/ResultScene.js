
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

		// playAgainBtn (components)
		new PushOnClick(playAgainBtn);

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
		console.log("hellooooo im create")
		// this.soundObj.playSound(this.soundObj.winningSound, false);
		// this.resultDeclaration.setStyle({ 'fontFamily': 'GameFont1' })
		switch (playerWon) {
			case "player_1_Won":
				var image = this.add.image(960, 500, 'You-Won');
				console.log("calling tween");
				//   image.setVisible(false);
				this.callTween(image);
				  this.confetti();
				// this.startConfettiAnimation()
				break;
			case "player_2_Won":
				var image = this.add.image(960, 500, 'Opponent-Won');
				console.log("calling tween");
				//   image.setVisible(false);
				this.callTween(image);
				  this.confetti();
				// this.startConfettiAnimation();
				break;
			case "player_Draw":
				console.log("calling tween");
				var image = this.add.image(960, 500, 'Draw');
				//   image.setVisible(false);
				this.callTween(image);
				//   this.confetti();
				// this.startConfettiAnimation()
				break;
			default:
				break;
		}

		// if(playerWon!="player_Draw"){

		// }

		this.playAgainBtn.setInteractive();
		this.playAgainBtn.on('pointerdown', () => {
			this.add.tween({
				targets: this.playAgainBtn,
				scaleX: "*=0.8",
				scaleY: "*=0.8",
				duration: 80,
				yoyo: true,
				onComplete: () => {
					location.reload();
				}
			});
		})


	}

	callTween(target) {
		console.log("calling tween")
		target.setVisible(true)
		this.add.tween({
			targets: target,
			scaleX: { from: 0, to: 1 },
			scaleY: { from: 0, to: 1 },
			duration: 1000,
			ease: "Sine.easeInOut"
		});
	}

	confetti() {
		const defaults = {
			spread: 360,
			ticks: 100,
			gravity: 0,
			decay: 0.94,
			startVelocity: 30,
			shapes: ["star"],
			colors: ["FFFF8F", "FFBF00", "FFEA00", "E4D00A"],
		};

		confetti({
			...defaults,
			particleCount: 50,
			scalar: 2,
		});

		confetti({
			...defaults,
			particleCount: 25,
			scalar: 3,
		});

		confetti({
			...defaults,
			particleCount: 12,
			scalar: 5,
		});
	}

	startConfettiAnimation() {
		console.log("in the confetti")
		var duration = 15 * 1000;
		var animationEnd = Date.now() + duration;
		var defaults = { startVelocity: 30, spread: 360, ticks: 5, zIndex: 0 };

		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}

		this.interval = setInterval(function () {
			var timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(this.interval);
			}

			var particleCount = 30 * (timeLeft / duration);
			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
				})
			);
			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
				})
			);
		}, 250);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
