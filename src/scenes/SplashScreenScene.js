
// You can write more code here

/* START OF COMPILED CODE */

class SplashScreenScene extends Phaser.Scene {

	constructor() {
		super("SplashScreenScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// splashScreen
		const splashScreen = this.add.image(960, 540, "SplashScreen");
		splashScreen.scaleX = 1.6;
		splashScreen.scaleY = 1.7;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		setTimeout(()=>{
			this.scene.stop("SplashScreenScene");
			this.scene.start("Level");
		},5000)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
