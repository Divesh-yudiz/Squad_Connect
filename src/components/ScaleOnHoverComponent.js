
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ScaleOnHoverComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ScaleOnHoverComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ScaleOnHoverComponent} */
	static getComponent(gameObject) {
		return gameObject["__ScaleOnHoverComponent"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		console.log("im in the component")
		this.gameObject.setInteractive().on("pointerover", () => {
			console.log("im in the component")
			this.scene.add.tween({
				targets: this.gameObject,
				scaleX: 1.2,
				scaleY: 1.2,
				duration: 200,
			});
		});
		this.gameObject.on("pointerout", () => {
			this.scene.add.tween({
				targets: this.gameObject,
				scaleX: 1,
				scaleY: 1,
				duration: 200,
			});
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
