
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progress
		const progress = this.add.text(960, 540, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "54px" });

		// logo
		this.add.image(960, 540, "Logo");

		// loading_Outside
		const loading_Outside = this.add.image(960, 901, "Loading-Outside");

		// inside
		const inside = this.add.image(516, 901, "Inside");
		inside.setOrigin(0, 0.5);
		inside.visible = false;

		// progress (components)
		new PreloadText(progress);

		this.loading_Outside = loading_Outside;
		this.inside = inside;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	loading_Outside;
	/** @type {Phaser.GameObjects.Image} */
	inside;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();
		this.editorPreload();

		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;

		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});

		this.insideWidth = this.inside.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.inside.x,
			this.inside.y - this.inside.displayHeight / 2,
			this.inside.displayWidth,
			this.inside.displayHeight
		);

		this.inside.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.inside.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.inside.x,
				this.inside.y - this.inside.displayHeight / 2,
				this.insideWidth * currentProgress,
				this.inside.displayHeight
			);
			// this.txt_progress.setText((currentProgress * 100).toFixed(0) + '%');
			currentInterval++;
			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	update() {
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			this.scene.stop("Preload");
			this.scene.start("MenuScene");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
