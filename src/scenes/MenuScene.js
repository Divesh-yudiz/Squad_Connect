
// You can write more code here

/* START OF COMPILED CODE */

class MenuScene extends Phaser.Scene {

	constructor() {
		super("MenuScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// PvsP_Highlight
		const pvsP_Highlight = this.add.image(763, 830, "White-Highlight");
		pvsP_Highlight.scaleX = 0.9;
		pvsP_Highlight.scaleY = 0.9;
		pvsP_Highlight.visible = false;

		// PvsC_Highlight
		const pvsC_Highlight = this.add.image(1214, 827, "White-Highlight");
		pvsC_Highlight.scaleX = 0.9;
		pvsC_Highlight.scaleY = 0.9;
		pvsC_Highlight.visible = false;

		// rope_1
		const rope_1 = this.add.image(743, 685, "Rope");
		rope_1.angle = 90;
		rope_1.flipX = true;

		// rope
		const rope = this.add.image(1191, 674, "Rope");
		rope.angle = 90;

		// player_VS_Computer
		const player_VS_Computer = this.add.image(1205, 818, "Player-VS-Computer");

		// player_VS_Player
		const player_VS_Player = this.add.image(748, 818, "Player-VS-Player");

		// silver_Stone_for_player_
		const silver_Stone_for_player_ = this.add.image(1339, 370, "Silver-Stone(for player)");
		silver_Stone_for_player_.scaleX = 0.8;
		silver_Stone_for_player_.scaleY = 0.8;

		// brown_Stone_for_player_
		const brown_Stone_for_player_ = this.add.image(603, 397, "Brown-Stone(for player)");
		brown_Stone_for_player_.scaleX = 0.8;
		brown_Stone_for_player_.scaleY = 0.8;

		// logo_2
		const logo_2 = this.add.image(970, 424, "Logo-2");
		logo_2.scaleX = 0.9;
		logo_2.scaleY = 0.9;

		// logo_With_Roap
		const logo_With_Roap = this.add.image(960, 510, "Logo-With-Roap");
		logo_With_Roap.visible = false;

		// leaf_1
		const leaf_1 = this.add.image(734, 346, "Leaf-1");
		leaf_1.scaleX = 0.8;
		leaf_1.scaleY = 0.8;
		leaf_1.setOrigin(0, 0.5);

		// leaf_2
		const leaf_2 = this.add.image(1207, 528, "Leaf-2");
		leaf_2.scaleX = 0.8;
		leaf_2.scaleY = 0.8;
		leaf_2.setOrigin(1, 0.5);

		this.pvsP_Highlight = pvsP_Highlight;
		this.pvsC_Highlight = pvsC_Highlight;
		this.player_VS_Computer = player_VS_Computer;
		this.player_VS_Player = player_VS_Player;
		this.silver_Stone_for_player_ = silver_Stone_for_player_;
		this.brown_Stone_for_player_ = brown_Stone_for_player_;
		this.leaf_1 = leaf_1;
		this.leaf_2 = leaf_2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	pvsP_Highlight;
	/** @type {Phaser.GameObjects.Image} */
	pvsC_Highlight;
	/** @type {Phaser.GameObjects.Image} */
	player_VS_Computer;
	/** @type {Phaser.GameObjects.Image} */
	player_VS_Player;
	/** @type {Phaser.GameObjects.Image} */
	silver_Stone_for_player_;
	/** @type {Phaser.GameObjects.Image} */
	brown_Stone_for_player_;
	/** @type {Phaser.GameObjects.Image} */
	leaf_1;
	/** @type {Phaser.GameObjects.Image} */
	leaf_2;

	/* START-USER-CODE */

	// Write your code here

	soundManager;
	create() {

		this.editorCreate();
		this.soundManagerObj = new SoundManager(this);
		// this.soundManagerObj.stopSound(this.soundManagerObj.backgroundSound, false);
		// this.soundManagerObj.playSound(this.soundManagerObj.backgroundSound, true);
		this.backgroundMusic = this.sound.add('quad connect', { loop: true });
        this.backgroundMusic.play();
		// player_VS_Computer
		// this.player_VS_Computer = this.physics.add.image(1205, 818, "Player-VS-Computer");

		// // player_VS_Player
		// this.player_VS_Player = this.physics.add.image(748, 818, "Player-VS-Player");
		// console.log("level object", levelScene.joystick)
		this.growLeafForword(this.leaf_1)
		this.growLeafForword(this.leaf_2)
		this.blowFun(this.player_VS_Player)
		this.blowFun(this.player_VS_Computer)
		// this.growLeafBackward(this.leaf_2)
		this.coinRotate(this.silver_Stone_for_player_)
		this.coinRotate(this.brown_Stone_for_player_)
		this.player_VS_Computer.setInteractive();
		this.player_VS_Player.setInteractive();
		this.player_VS_Computer.on("pointerdown", () => {
			this.soundManagerObj.playSound(this.soundManagerObj.onBtnClick, false);
			this.tweens.add({
				targets: this.player_VS_Computer,
				duration: 100,
				scaleX: 1.2,
				scaleY: 1.2,
				yoyo: true,
				ease: 'Linear',
				onComplete: () => {
					enableBot = true;
					this.input.setDefaultCursor('default');
					this.scene.stop("MenuScene");
					this.scene.start("Level");
				}
			});
		})
		this.player_VS_Player.on("pointerdown", () => {
			this.soundManagerObj.playSound(this.soundManagerObj.onBtnClick, false);
			this.tweens.add({
				targets: this.player_VS_Player,
				duration: 100,
				scaleX: 1.2,
				scaleY: 1.2,
				yoyo: true,
				ease: 'Linear',
				onComplete: () => {
					enableBot = false;
					this.input.setDefaultCursor('default');
					this.scene.stop("MenuScene");
					this.scene.start("Level");
				}
			});
		})

		this.player_VS_Player.on("pointerover", () => {
			this.pvsP_Highlight.setScale(1)
		})
		this.player_VS_Player.on("pointerout", () => {
			this.pvsP_Highlight.setScale(0.9)
		})

		this.player_VS_Computer.on("pointerover", () => {
			this.pvsC_Highlight.setScale(1)
		})

		this.player_VS_Computer.on("pointerout", () => {
			this.pvsC_Highlight.setScale(0.9)
		})

		if(window.innerWidth<450){
			joystick=true;
		}

	}

	blowFun(gameObject){
		gameObject.setInteractive().on("pointerover", () => {
			this.soundManagerObj.playSound(this.soundManagerObj.hover, false);
			this.input.setDefaultCursor('pointer');
			console.log("im in the component")
			if(gameObject==this.player_VS_Player){
				this.pvsP_Highlight.setVisible(true)
				this.pvsP_Highlight.setScale(1)
			}else{
				this.pvsC_Highlight.setVisible(true)
				this.pvsC_Highlight.setScale(1)
			}
			this.add.tween({
				targets: gameObject,
				scaleX: 1.2,
				scaleY: 1.2,
				duration: 200,
			});
		});
		gameObject.on("pointerout", () => {
			this.input.setDefaultCursor('default');
			if(gameObject==this.player_VS_Player){
				this.pvsP_Highlight.setVisible(false)
				this.pvsP_Highlight.setScale(0.9)
			}else{
				this.pvsC_Highlight.setVisible(false)
				this.pvsC_Highlight.setScale(0.9)
			}
			this.add.tween({
				targets: gameObject,
				scaleX: 1,
				scaleY: 1,
				duration: 200,
			});
		});
	}


	growLeafForword(target) {
		console.log("im leaf forward")
		let innerBarWidth = target.displayWidth;
		let maskGraphics = this.make.graphics();
		maskGraphics.fillStyle(0xffffff);
		maskGraphics.fillRect(
			target.x,
			target.y - target.displayHeight / 2,
			target.displayWidth,
			target.displayHeight
		);

		target.setMask(maskGraphics.createGeometryMask());

		const loadingDuration = 5000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			target.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			maskGraphics.clear();
			maskGraphics.fillStyle(0xffffff);

			if(target==this.leaf_1){
				maskGraphics.fillRect(
					target.x,
					target.y - target.displayHeight / 2,
					target.x * currentProgress / 2,
					target.displayHeight
				);
			}else{
				maskGraphics.fillRect(
					target.x,
					target.y - target.displayHeight / 2,
					-target.x * currentProgress / 2,
					target.displayHeight
				);
			}
			currentInterval++;
		};
		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	coinRotate(image) {
		const rotationAngle = (image === this.silver_Stone_for_player_) ? 360 : -360;
		this.add.tween({
			targets: image,
			angle: rotationAngle,
			duration: 2000,
			repeat: -1,
		});
	}
	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
