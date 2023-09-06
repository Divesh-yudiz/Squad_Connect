
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

		// logo_With_Roap
		this.add.image(960, 510, "Logo-With-Roap");

		// player_VS_Computer
		const player_VS_Computer = this.add.image(1205, 818, "Player-VS-Computer");

		// player_VS_Player
		const player_VS_Player = this.add.image(748, 818, "Player-VS-Player");

		this.pvsP_Highlight = pvsP_Highlight;
		this.pvsC_Highlight = pvsC_Highlight;
		this.player_VS_Computer = player_VS_Computer;
		this.player_VS_Player = player_VS_Player;

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

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.player_VS_Computer.setInteractive();		
		this.player_VS_Player.setInteractive();		
		this.player_VS_Computer.on("pointerdown",()=>{
			this.tweens.add({
				targets: this.player_VS_Computer,
				duration: 100, 
				scaleX: 1.2,    
				scaleY: 1.2,    
				yoyo: true,     
				ease: 'Linear', 
				onComplete:()=>{
					enableBot = true;
					this.scene.stop("MenuScene");
					this.scene.start("Level");
				}
			  });
		})
		this.player_VS_Player.on("pointerdown",()=>{
			this.tweens.add({
				targets: this.player_VS_Player,
				duration: 100, 
				scaleX: 1.2,    
				scaleY: 1.2,    
				yoyo: true,     
				ease: 'Linear',
				onComplete:()=>{
					enableBot = false;
					this.scene.stop("MenuScene");
					this.scene.start("Level");
				} 
			  });
		})

		this.player_VS_Player.on("pointerover",()=>
		{
			this.pvsP_Highlight.setVisible(true)
			this.pvsC_Highlight.setVisible(false)
		})
		this.player_VS_Computer.on("pointerover",()=>
		{
			this.pvsP_Highlight.setVisible(false)
			this.pvsC_Highlight.setVisible(true)
		})



	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
