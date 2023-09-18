
// You can write more code here
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// board__1_
		const board__1_ = this.add.image(927.5499956645881, 568.9043206682622, "Board (1)");
		board__1_.visible = false;

		// glowLeft
		const glowLeft = this.add.image(306, 547, "Glow");
		glowLeft.scaleX = 1.5;
		glowLeft.scaleY = 1.5;

		// glowRight
		const glowRight = this.add.image(1604, 542, "Glow");
		glowRight.scaleX = 1.5;
		glowRight.scaleY = 1.5;
		glowRight.visible = false;

		// game_Board_2
		this.add.image(960, 540, "Game-Board-2");

		// BoxContainer
		const boxContainer = this.add.container(0, 0);

		// box49
		const box49 = this.add.ellipse(1298, 215, 50, 50);
		box49.scaleX = 1.38;
		box49.scaleY = 1.38;
		box49.isFilled = true;
		boxContainer.add(box49);

		// box48
		const box48 = this.add.ellipse(1196, 215, 50, 50);
		box48.scaleX = 1.38;
		box48.scaleY = 1.38;
		box48.isFilled = true;
		boxContainer.add(box48);

		// box47
		const box47 = this.add.ellipse(1095, 215, 50, 50);
		box47.scaleX = 1.38;
		box47.scaleY = 1.38;
		box47.isFilled = true;
		boxContainer.add(box47);

		// box46
		const box46 = this.add.ellipse(989, 215, 50, 50);
		box46.scaleX = 1.38;
		box46.scaleY = 1.38;
		box46.isFilled = true;
		boxContainer.add(box46);

		// box45
		const box45 = this.add.ellipse(880, 215, 50, 50);
		box45.scaleX = 1.38;
		box45.scaleY = 1.38;
		box45.isFilled = true;
		boxContainer.add(box45);

		// box44
		const box44 = this.add.ellipse(772, 215, 50, 50);
		box44.scaleX = 1.38;
		box44.scaleY = 1.38;
		box44.isFilled = true;
		boxContainer.add(box44);

		// box43
		const box43 = this.add.ellipse(657, 215, 50, 50);
		box43.scaleX = 1.38;
		box43.scaleY = 1.38;
		box43.isFilled = true;
		boxContainer.add(box43);

		// box42
		const box42 = this.add.ellipse(1299, 334, 50, 50);
		box42.scaleX = 1.38;
		box42.scaleY = 1.38;
		box42.isFilled = true;
		boxContainer.add(box42);

		// box41
		const box41 = this.add.ellipse(1196, 334, 50, 50);
		box41.scaleX = 1.38;
		box41.scaleY = 1.38;
		box41.isFilled = true;
		boxContainer.add(box41);

		// box40
		const box40 = this.add.ellipse(1095, 334, 50, 50);
		box40.scaleX = 1.38;
		box40.scaleY = 1.38;
		box40.isFilled = true;
		boxContainer.add(box40);

		// box39
		const box39 = this.add.ellipse(989, 334, 50, 50);
		box39.scaleX = 1.38;
		box39.scaleY = 1.38;
		box39.isFilled = true;
		boxContainer.add(box39);

		// box38
		const box38 = this.add.ellipse(880, 334, 50, 50);
		box38.scaleX = 1.38;
		box38.scaleY = 1.38;
		box38.isFilled = true;
		boxContainer.add(box38);

		// box37
		const box37 = this.add.ellipse(772, 334, 50, 50);
		box37.scaleX = 1.38;
		box37.scaleY = 1.38;
		box37.isFilled = true;
		boxContainer.add(box37);

		// box36
		const box36 = this.add.ellipse(658, 334, 50, 50);
		box36.scaleX = 1.38;
		box36.scaleY = 1.38;
		box36.isFilled = true;
		boxContainer.add(box36);

		// box35
		const box35 = this.add.ellipse(1298, 449, 50, 50);
		box35.scaleX = 1.38;
		box35.scaleY = 1.38;
		box35.isFilled = true;
		boxContainer.add(box35);

		// box34
		const box34 = this.add.ellipse(1195, 449, 50, 50);
		box34.scaleX = 1.38;
		box34.scaleY = 1.38;
		box34.isFilled = true;
		boxContainer.add(box34);

		// box33
		const box33 = this.add.ellipse(1094, 449, 50, 50);
		box33.scaleX = 1.38;
		box33.scaleY = 1.38;
		box33.isFilled = true;
		boxContainer.add(box33);

		// box32
		const box32 = this.add.ellipse(989, 449, 50, 50);
		box32.scaleX = 1.38;
		box32.scaleY = 1.38;
		box32.isFilled = true;
		boxContainer.add(box32);

		// box31
		const box31 = this.add.ellipse(881, 449, 50, 50);
		box31.scaleX = 1.38;
		box31.scaleY = 1.38;
		box31.isFilled = true;
		boxContainer.add(box31);

		// box30
		const box30 = this.add.ellipse(772, 449, 50, 50);
		box30.scaleX = 1.38;
		box30.scaleY = 1.38;
		box30.isFilled = true;
		boxContainer.add(box30);

		// box29
		const box29 = this.add.ellipse(658, 449, 50, 50);
		box29.scaleX = 1.38;
		box29.scaleY = 1.38;
		box29.isFilled = true;
		boxContainer.add(box29);

		// box28
		const box28 = this.add.ellipse(1298, 560, 50, 50);
		box28.scaleX = 1.38;
		box28.scaleY = 1.38;
		box28.isFilled = true;
		boxContainer.add(box28);

		// box27
		const box27 = this.add.ellipse(1195, 560, 50, 50);
		box27.scaleX = 1.38;
		box27.scaleY = 1.38;
		box27.isFilled = true;
		boxContainer.add(box27);

		// box26
		const box26 = this.add.ellipse(1094, 560, 50, 50);
		box26.scaleX = 1.38;
		box26.scaleY = 1.38;
		box26.isFilled = true;
		boxContainer.add(box26);

		// box25
		const box25 = this.add.ellipse(990, 560, 50, 50);
		box25.scaleX = 1.38;
		box25.scaleY = 1.38;
		box25.isFilled = true;
		boxContainer.add(box25);

		// box24
		const box24 = this.add.ellipse(882, 560, 50, 50);
		box24.scaleX = 1.38;
		box24.scaleY = 1.38;
		box24.isFilled = true;
		boxContainer.add(box24);

		// box23
		const box23 = this.add.ellipse(773, 560, 50, 50);
		box23.scaleX = 1.38;
		box23.scaleY = 1.38;
		box23.isFilled = true;
		boxContainer.add(box23);

		// box22
		const box22 = this.add.ellipse(658, 560, 50, 50);
		box22.scaleX = 1.38;
		box22.scaleY = 1.38;
		box22.isFilled = true;
		boxContainer.add(box22);

		// box21
		const box21 = this.add.ellipse(1297, 670, 50, 50);
		box21.scaleX = 1.38;
		box21.scaleY = 1.38;
		box21.isFilled = true;
		boxContainer.add(box21);

		// box20
		const box20 = this.add.ellipse(1195, 670, 50, 50);
		box20.scaleX = 1.38;
		box20.scaleY = 1.38;
		box20.isFilled = true;
		boxContainer.add(box20);

		// box19
		const box19 = this.add.ellipse(1095, 670, 50, 50);
		box19.scaleX = 1.38;
		box19.scaleY = 1.38;
		box19.isFilled = true;
		boxContainer.add(box19);

		// box18
		const box18 = this.add.ellipse(990, 670, 50, 50);
		box18.scaleX = 1.38;
		box18.scaleY = 1.38;
		box18.isFilled = true;
		boxContainer.add(box18);

		// box17
		const box17 = this.add.ellipse(882, 670, 50, 50);
		box17.scaleX = 1.38;
		box17.scaleY = 1.38;
		box17.isFilled = true;
		boxContainer.add(box17);

		// box16
		const box16 = this.add.ellipse(772, 670, 50, 50);
		box16.scaleX = 1.38;
		box16.scaleY = 1.38;
		box16.isFilled = true;
		boxContainer.add(box16);

		// box15
		const box15 = this.add.ellipse(657, 670, 50, 50);
		box15.scaleX = 1.38;
		box15.scaleY = 1.38;
		box15.isFilled = true;
		boxContainer.add(box15);

		// box14
		const box14 = this.add.ellipse(1298, 782, 50, 50);
		box14.scaleX = 1.38;
		box14.scaleY = 1.38;
		box14.isFilled = true;
		boxContainer.add(box14);

		// box13
		const box13 = this.add.ellipse(1197, 782, 50, 50);
		box13.scaleX = 1.38;
		box13.scaleY = 1.38;
		box13.isFilled = true;
		boxContainer.add(box13);

		// box12
		const box12 = this.add.ellipse(1095, 782, 50, 50);
		box12.scaleX = 1.38;
		box12.scaleY = 1.38;
		box12.isFilled = true;
		boxContainer.add(box12);

		// box11
		const box11 = this.add.ellipse(989, 782, 50, 50);
		box11.scaleX = 1.38;
		box11.scaleY = 1.38;
		box11.isFilled = true;
		boxContainer.add(box11);

		// box10
		const box10 = this.add.ellipse(881, 782, 50, 50);
		box10.scaleX = 1.38;
		box10.scaleY = 1.38;
		box10.isFilled = true;
		boxContainer.add(box10);

		// box9
		const box9 = this.add.ellipse(773, 782, 50, 50);
		box9.scaleX = 1.38;
		box9.scaleY = 1.38;
		box9.isFilled = true;
		boxContainer.add(box9);

		// box8
		const box8 = this.add.ellipse(658, 782, 50, 50);
		box8.scaleX = 1.38;
		box8.scaleY = 1.38;
		box8.isFilled = true;
		boxContainer.add(box8);

		// box7
		const box7 = this.add.ellipse(1297, 892, 50, 50);
		box7.scaleX = 1.38;
		box7.scaleY = 1.38;
		box7.isFilled = true;
		boxContainer.add(box7);

		// box6
		const box6 = this.add.ellipse(1195, 892, 50, 50);
		box6.scaleX = 1.38;
		box6.scaleY = 1.38;
		box6.isFilled = true;
		boxContainer.add(box6);

		// box5
		const box5 = this.add.ellipse(1093, 892, 50, 50);
		box5.scaleX = 1.38;
		box5.scaleY = 1.38;
		box5.isFilled = true;
		boxContainer.add(box5);

		// box4
		const box4 = this.add.ellipse(988, 892, 50, 50);
		box4.scaleX = 1.38;
		box4.scaleY = 1.38;
		box4.isFilled = true;
		boxContainer.add(box4);

		// box3
		const box3 = this.add.ellipse(881, 892, 50, 50);
		box3.scaleX = 1.38;
		box3.scaleY = 1.38;
		box3.isFilled = true;
		boxContainer.add(box3);

		// box2
		const box2 = this.add.ellipse(773, 892, 50, 50);
		box2.scaleX = 1.38;
		box2.scaleY = 1.38;
		box2.isFilled = true;
		boxContainer.add(box2);

		// box1
		const box1 = this.add.ellipse(656, 892, 50, 50);
		box1.scaleX = 1.38;
		box1.scaleY = 1.38;
		box1.isFilled = true;
		boxContainer.add(box1);

		// player1bg
		const player1bg = this.add.image(300, 545, "Silver-Stone(for player)");
		player1bg.scaleX = 0.9;
		player1bg.scaleY = 0.9;

		// player2bg
		const player2bg = this.add.image(1600, 542, "Brown-Stone(for player)");
		player2bg.scaleX = 0.9;
		player2bg.scaleY = 0.9;

		// silver_Stone_Cover
		const silver_Stone_Cover = this.add.image(300, 546, "Silver-Stone-Cover");
		silver_Stone_Cover.scaleX = 0.7;
		silver_Stone_Cover.scaleY = 0.7;

		// brown_Stone_Cover
		const brown_Stone_Cover = this.add.image(1599, 541, "Brown-Stone-Cover");
		brown_Stone_Cover.scaleX = 0.7;
		brown_Stone_Cover.scaleY = 0.7;

		// row1_Space
		const row1_Space = this.add.rectangle(656, 608, 95, 910);
		row1_Space.isFilled = true;

		// row1_Space_1
		const row1_Space_1 = this.add.rectangle(772, 608, 90, 910);
		row1_Space_1.isFilled = true;

		// row1_Space_2
		const row1_Space_2 = this.add.rectangle(880, 608, 90, 910);
		row1_Space_2.isFilled = true;

		// row1_Space_3
		const row1_Space_3 = this.add.rectangle(990, 608, 90, 910);
		row1_Space_3.isFilled = true;

		// row1_Space_4
		const row1_Space_4 = this.add.rectangle(1095, 608, 85, 910);
		row1_Space_4.isFilled = true;

		// row1_Space_5
		const row1_Space_5 = this.add.rectangle(1197, 608, 85, 910);
		row1_Space_5.isFilled = true;

		// row1_Space_6
		const row1_Space_6 = this.add.rectangle(1299, 608, 85, 910);
		row1_Space_6.isFilled = true;

		// hoverCoin
		const hoverCoin = this.add.image(778, 99, "yellow");
		hoverCoin.scaleX = 0.44;
		hoverCoin.scaleY = 0.44;

		// spritesheet0
		const spritesheet0 = this.add.sprite(-224, -111, "spritesheet", 0);

		// you
		this.add.image(304, 711, "You");

		// opponent
		this.add.image(1614, 711, "Opponent");

		// character_1
		const character_1 = this.add.image(300, 545, "Character-1");
		character_1.scaleX = 0.7;
		character_1.scaleY = 0.7;

		// character_2
		const character_2 = this.add.image(1599, 541, "Character-2");
		character_2.scaleX = 0.7;
		character_2.scaleY = 0.7;

		// settingContainer
		const settingContainer = this.add.container(0, 0);

		// button_Holder
		const button_Holder = this.add.image(1645, 74, "Button-Holder");
		settingContainer.add(button_Holder);

		// sound_Button
		const sound_Button = this.add.image(1645, 42, "Sound-Button");
		sound_Button.scaleX = 0.9;
		sound_Button.scaleY = 0.9;
		settingContainer.add(sound_Button);

		// info_Button
		const info_Button = this.add.image(1645, 105, "Info-Button");
		info_Button.scaleX = 0.9;
		info_Button.scaleY = 0.9;
		settingContainer.add(info_Button);

		// setting_Button
		const setting_Button = this.add.image(1644, 100, "Setting-Button");
		setting_Button.scaleX = 0.7;
		setting_Button.scaleY = 0.7;

		// sound_Button (components)
		new PushOnClick(sound_Button);

		// info_Button (components)
		new PushOnClick(info_Button);

		this.glowLeft = glowLeft;
		this.glowRight = glowRight;
		this.boxContainer = boxContainer;
		this.box49 = box49;
		this.box48 = box48;
		this.box47 = box47;
		this.box46 = box46;
		this.box45 = box45;
		this.box44 = box44;
		this.box43 = box43;
		this.box42 = box42;
		this.box41 = box41;
		this.box40 = box40;
		this.box39 = box39;
		this.box38 = box38;
		this.box37 = box37;
		this.box36 = box36;
		this.box35 = box35;
		this.box34 = box34;
		this.box33 = box33;
		this.box32 = box32;
		this.box31 = box31;
		this.box30 = box30;
		this.box29 = box29;
		this.box28 = box28;
		this.box27 = box27;
		this.box26 = box26;
		this.box25 = box25;
		this.box24 = box24;
		this.box23 = box23;
		this.box22 = box22;
		this.box21 = box21;
		this.box20 = box20;
		this.box19 = box19;
		this.box18 = box18;
		this.box17 = box17;
		this.box16 = box16;
		this.box15 = box15;
		this.box14 = box14;
		this.box13 = box13;
		this.box12 = box12;
		this.box11 = box11;
		this.box10 = box10;
		this.box9 = box9;
		this.box8 = box8;
		this.box7 = box7;
		this.box6 = box6;
		this.box5 = box5;
		this.box4 = box4;
		this.box3 = box3;
		this.box2 = box2;
		this.box1 = box1;
		this.player1bg = player1bg;
		this.player2bg = player2bg;
		this.row1_Space = row1_Space;
		this.row1_Space_1 = row1_Space_1;
		this.row1_Space_2 = row1_Space_2;
		this.row1_Space_3 = row1_Space_3;
		this.row1_Space_4 = row1_Space_4;
		this.row1_Space_5 = row1_Space_5;
		this.row1_Space_6 = row1_Space_6;
		this.hoverCoin = hoverCoin;
		this.spritesheet0 = spritesheet0;
		this.settingContainer = settingContainer;
		this.sound_Button = sound_Button;
		this.info_Button = info_Button;
		this.setting_Button = setting_Button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	glowLeft;
	/** @type {Phaser.GameObjects.Image} */
	glowRight;
	/** @type {Phaser.GameObjects.Container} */
	boxContainer;
	/** @type {Phaser.GameObjects.Ellipse} */
	box49;
	/** @type {Phaser.GameObjects.Ellipse} */
	box48;
	/** @type {Phaser.GameObjects.Ellipse} */
	box47;
	/** @type {Phaser.GameObjects.Ellipse} */
	box46;
	/** @type {Phaser.GameObjects.Ellipse} */
	box45;
	/** @type {Phaser.GameObjects.Ellipse} */
	box44;
	/** @type {Phaser.GameObjects.Ellipse} */
	box43;
	/** @type {Phaser.GameObjects.Ellipse} */
	box42;
	/** @type {Phaser.GameObjects.Ellipse} */
	box41;
	/** @type {Phaser.GameObjects.Ellipse} */
	box40;
	/** @type {Phaser.GameObjects.Ellipse} */
	box39;
	/** @type {Phaser.GameObjects.Ellipse} */
	box38;
	/** @type {Phaser.GameObjects.Ellipse} */
	box37;
	/** @type {Phaser.GameObjects.Ellipse} */
	box36;
	/** @type {Phaser.GameObjects.Ellipse} */
	box35;
	/** @type {Phaser.GameObjects.Ellipse} */
	box34;
	/** @type {Phaser.GameObjects.Ellipse} */
	box33;
	/** @type {Phaser.GameObjects.Ellipse} */
	box32;
	/** @type {Phaser.GameObjects.Ellipse} */
	box31;
	/** @type {Phaser.GameObjects.Ellipse} */
	box30;
	/** @type {Phaser.GameObjects.Ellipse} */
	box29;
	/** @type {Phaser.GameObjects.Ellipse} */
	box28;
	/** @type {Phaser.GameObjects.Ellipse} */
	box27;
	/** @type {Phaser.GameObjects.Ellipse} */
	box26;
	/** @type {Phaser.GameObjects.Ellipse} */
	box25;
	/** @type {Phaser.GameObjects.Ellipse} */
	box24;
	/** @type {Phaser.GameObjects.Ellipse} */
	box23;
	/** @type {Phaser.GameObjects.Ellipse} */
	box22;
	/** @type {Phaser.GameObjects.Ellipse} */
	box21;
	/** @type {Phaser.GameObjects.Ellipse} */
	box20;
	/** @type {Phaser.GameObjects.Ellipse} */
	box19;
	/** @type {Phaser.GameObjects.Ellipse} */
	box18;
	/** @type {Phaser.GameObjects.Ellipse} */
	box17;
	/** @type {Phaser.GameObjects.Ellipse} */
	box16;
	/** @type {Phaser.GameObjects.Ellipse} */
	box15;
	/** @type {Phaser.GameObjects.Ellipse} */
	box14;
	/** @type {Phaser.GameObjects.Ellipse} */
	box13;
	/** @type {Phaser.GameObjects.Ellipse} */
	box12;
	/** @type {Phaser.GameObjects.Ellipse} */
	box11;
	/** @type {Phaser.GameObjects.Ellipse} */
	box10;
	/** @type {Phaser.GameObjects.Ellipse} */
	box9;
	/** @type {Phaser.GameObjects.Ellipse} */
	box8;
	/** @type {Phaser.GameObjects.Ellipse} */
	box7;
	/** @type {Phaser.GameObjects.Ellipse} */
	box6;
	/** @type {Phaser.GameObjects.Ellipse} */
	box5;
	/** @type {Phaser.GameObjects.Ellipse} */
	box4;
	/** @type {Phaser.GameObjects.Ellipse} */
	box3;
	/** @type {Phaser.GameObjects.Ellipse} */
	box2;
	/** @type {Phaser.GameObjects.Ellipse} */
	box1;
	/** @type {Phaser.GameObjects.Image} */
	player1bg;
	/** @type {Phaser.GameObjects.Image} */
	player2bg;
	/** @type {Phaser.GameObjects.Rectangle} */
	row1_Space;
	/** @type {Phaser.GameObjects.Rectangle} */
	row1_Space_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	row1_Space_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	row1_Space_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	row1_Space_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	row1_Space_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	row1_Space_6;
	/** @type {Phaser.GameObjects.Image} */
	hoverCoin;
	/** @type {Phaser.GameObjects.Sprite} */
	spritesheet0;
	/** @type {Phaser.GameObjects.Container} */
	settingContainer;
	/** @type {Phaser.GameObjects.Image} */
	sound_Button;
	/** @type {Phaser.GameObjects.Image} */
	info_Button;
	/** @type {Phaser.GameObjects.Image} */
	setting_Button;

	/* START-USER-CODE */

	// Write more your code here
	mainArray;
	posX;
	posY;
	intialposX;
	intialposY;
	array1Y = 0;
	array2Y = 0;
	array3Y = 0;
	array4Y = 0;
	array5Y = 0;
	array6Y = 0;
	array7Y = 0;
	count = 1;
	resultMatrix;
	colorCode = 1;
	matrix = [];
	player_1Tween;
	player_2Tween;
	cursor;
	hoverX;
	hoverY;
	isHumanTurn = false;
	isSound=true;
	//this is comment
	create() {
		this.editorCreate();

		this.red0_5 = this.add.image(656, 892, 'red');
		this.red0_5.setScale(0.33, 0.33)
		this.red0_5.setAlpha(0.5)
		this.yellow0_5 = this.add.image(773, 892, 'yellow');
		this.yellow0_5.setScale(0.33, 0.33)
		this.yellow0_5.setAlpha(0.5)
		this.rotateCoin2 = this.rotateCoin("player1")
		// Populate the matrix
		for (let i = 0; i < 7; i++) {
			this.matrix[i] = [];
			for (let j = 0; j < 7; j++) {
				this.matrix[i][j] = 0; // Change value to 0
			}
		}
		this.resultMatrix = [];

		// Iterate over the columns of the matrix
		for (let col = 0; col < this.matrix[0].length; col++) {
			let column = [];

			// Iterate over the rows of the matrix and extract the values from the corresponding column
			for (let row = 0; row < this.matrix.length; row++) {
				column.push(0); // Change value to 0
			}

			// Push the column into the transposedMatrix array
			this.resultMatrix.push(column);
		}
		// this.findConclusion();
		// this.glowPlayer()
		this.findPos();
		this.coinHover(-300, -300);
		this.coinUpdate();
		this.stripHover()
		this.settingMaskAnimation()
		if (enableBot == true) {
			// this.botMove();
		}

		// this.spritesheet0.play("sparkleAnims")
	}

	findConclusion() {
		const sequence = this.checkSequence(this.resultMatrix);
		if (sequence) {
			// console.log(sequence)
			if (sequence.sequence == 2) {
				this.glowCoins();
				this.red0_5.setVisible(false);
				this.yellow0_5.setVisible(false);
				setTimeout(() => {
					this.scene.pause('Level')
				}, 700)

				playerWon = "player_2_Won"
				setTimeout(() => {
					this.scene.stop('Level');
					this.scene.start('ResultScene');
				}, 3000);
			} else if (sequence.sequence == 1) {
				this.glowCoins();
				this.red0_5.setVisible(false);
				this.yellow0_5.setVisible(false);
				setTimeout(() => {
					this.scene.pause('Level')
				}, 1000)
				playerWon = "player_1_Won"
				setTimeout(() => {
					this.scene.stop('Level');
					this.scene.start('ResultScene');
				}, 3000);
			}

		} else if (this.array1Y == 7 && this.array2Y == 7 && this.array3Y == 7 && this.array4Y == 7 && this.array5Y == 7 && this.array6Y == 7 && this.array7Y == 7) {
			playerWon = "player_Draw"
			setTimeout(() => {
				this.scene.stop('Level');
				this.scene.start('ResultScene');
			}, 3000);
		}
	}

	checkSequence(matrix) {
		const rows = matrix.length;
		const cols = matrix[0].length;

		// Check rows
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col <= cols - 4; col++) {
				const current = matrix[row][col];
				if (current === 0) continue;

				let count = 1;
				let c = col + 1;
				while (c < cols && matrix[row][c] === current) {
					count++;
					c++;
				}

				if (count === 4) {
					return {
						sequence: current,
						type: "row",
						position: { row, col },
					};
				}
			}
		}

		// Check columns
		for (let col = 0; col < cols; col++) {
			for (let row = 0; row <= rows - 4; row++) {
				const current = matrix[row][col];
				if (current === 0) continue;

				let count = 1;
				let r = row + 1;
				while (r < rows && matrix[r][col] === current) {
					count++;
					r++;
				}

				if (count === 4) {
					return {
						sequence: current,
						type: "column",
						position: { row, col },
					};
				}
			}
		}


		//check diagonal
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				const current = matrix[row][col];
				if (current === 0) continue;

				// Check diagonal (top-left to bottom-right)
				let count = 1;
				let r = row + 1;
				let c = col + 1;
				while (r < rows && c < cols && matrix[r][c] === current) {
					count++;
					r++;
					c++;
				}

				if (count >= 4) {
					// console.log("top-left to bottom-right")
					return {
						sequence: current,
						type: "diagonal",
						position: { row, col },
						direction: "top-left to bottom-right"
					};
				}

				// Check diagonal (top-right to bottom-left)
				count = 1;
				r = row + 1;
				c = col - 1;
				while (r < rows && c >= 0 && matrix[r][c] === current) {
					count++;
					r++;
					c--;
				}

				if (count >= 4) {
					// console.log("top-right to bottom-left")
					return {
						sequence: current,
						type: "diagonal",
						position: { row, col },
						direction: "top-right to bottom-left"
					};
				}
			}
		}
		// No sequence found
		return null;
	}

	findPos() {
		this.boxArray = [this.box49,
		this.box48,
		this.box47,
		this.box46,
		this.box45,
		this.box44,
		this.box43,
		this.box42,
		this.box41,
		this.box40,
		this.box39,
		this.box38,
		this.box37,
		this.box36,
		this.box35,
		this.box34,
		this.box33,
		this.box32,
		this.box31,
		this.box30,
		this.box29,
		this.box28,
		this.box27,
		this.box26,
		this.box25,
		this.box24,
		this.box23,
		this.box22,
		this.box21,
		this.box20,
		this.box19,
		this.box18,
		this.box17,
		this.box16,
		this.box15,
		this.box14,
		this.box13,
		this.box12,
		this.box11,
		this.box10,
		this.box9,
		this.box8,
		this.box7,
		this.box6,
		this.box5,
		this.box4,
		this.box3,
		this.box2,
		this.box1,]


		this.boxArray.reverse();
		// console.log(this.boxArray);
		this.mainArray = this.boxArray;
		this.soundObj = new SoundManager(this);

		for (let i = 0; i < this.boxArray.length; i++) {
			this.boxArray[i].boxNo = i + 1;
		}

		// Create a 2D array for the matrix
		let matrix = [];

		// Divide the objects into rows of 7
		for (let i = 0; i < this.boxArray.length; i += 7) {
			let row = this.boxArray.slice(i, i + 7);
			matrix.push(row);
		}

		let transposedMatrix = [];

		// Iterate over the columns of the matrix
		for (let col = 0; col < matrix[0].length; col++) {
			let column = [];

			// Iterate over the rows of the matrix and extract the values from the corresponding column
			for (let row = 0; row < matrix.length; row++) {
				column.push(matrix[row][col]);
			}

			// Push the column into the transposedMatrix array
			transposedMatrix.push(column);
		}

		// console.log(transposedMatrix);
		this.mainArray = transposedMatrix;

		for (let row = 0; row < transposedMatrix.length; row++) {
			for (let col = 0; col < transposedMatrix[row].length; col++) {
				let element = transposedMatrix[row][col];
				let elementRow = transposedMatrix[row];
				element.isFilled = false;
				element.setInteractive();
				element.on('pointerdown', () => {
					// console.log("row: ", row, "column: ", col)
				});

			}
		}
	}



	coinHover(currentColumnX, currentColumnY) {
		if (this.count == 0) {
			if (!enableBot) {
				this.tweens.add({
					targets: this.red0_5,
					x: currentColumnX,
					y: currentColumnY,
					duration: 50,
					ease: 'Power3',
				});
			}
		} else {

			this.tweens.add({
				targets: this.yellow0_5,
				x: currentColumnX,
				y: currentColumnY,
				duration: 50,
				ease: 'Power3',
			});

		}
	}

	stripHover() {
		const rows = [
			this.row1_Space,
			this.row1_Space_1,
			this.row1_Space_2,
			this.row1_Space_3,
			this.row1_Space_4,
			this.row1_Space_5,
			this.row1_Space_6,
		];

		rows.forEach(element => {
			element.isFilled = false;
		});

		const rowHandlers = [
			"you are on row one",
			"you are on row two",
			"you are on row three",
			"you are on row four",
			"you are on row five",
			"you are on row six",
			"you are on row six",
		];

		rows.forEach((row, index) => {
			row.setInteractive().on('pointerover', () => {
				if (this["array" + (index + 1) + "Y"] <= 6) {
					this.coinHover(this.mainArray[index][this["array" + (index + 1) + "Y"]].x, this.mainArray[index][this["array" + (index + 1) + "Y"]].y);
					this.intialposX = 650 + (index * 110);
					this.intialposY = -78;
				}
			}).on('pointermove', () => {
				// console.log(rowHandlers[index]);
				if (this["array" + (index + 1) + "Y"] <= 6) {
					this.coinHover(this.mainArray[index][this["array" + (index + 1) + "Y"]].x, this.mainArray[index][this["array" + (index + 1) + "Y"]].y);
					this.intialposX = 650 + (index * 110);
					this.intialposY = -78;
				}
			}).on('pointerup', () => {
				// console.log(rowHandlers[index]);
				if (this["array" + (index + 1) + "Y"] <= 6) {
					this.coinHover(this.mainArray[index][this["array" + (index + 1) + "Y"]].x, this.mainArray[index][this["array" + (index + 1) + "Y"]].y);
					this.intialposX = 650 + (index * 110);
					this.intialposY = -78;
				}
			});
		});
	}

	coinUpdate() {
		// if(this.count!=0){
		this[`row1_Space`].setInteractive().on('pointerdown', () => this.coinUpdate1(0), this);
		for (let i = 1; i <= 6; i++) {
			this[`row1_Space_${i}`].setInteractive().on('pointerdown', () => this.coinUpdate1(i), this);
		}
		// }
	}

	coinUpdate1(arrayIndex) {
		console.log(this)
		// console.log(arrayIndex)
		if (this["array" + (arrayIndex + 1) + "Y"] <= 6) {
			this.addCoin(this, arrayIndex);
			this.resultMatrix[arrayIndex][this[`array${arrayIndex + 1}Y`]] = this.colorCode;
			this[`array${arrayIndex + 1}Y`]++;
			// console.log(arrayIndex)
			this.coinHover(this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].x, this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].y);

			if(this.isSound==true){
				console.log("in the sound")
				this.soundObj.playSound(this.soundObj.coinPlacedSound, false);
			}
		}
	}


	rotateCoin1;
	rotateCoin2;


	addCoin(place, arrayIndex) {
		// console.log(place);
		// console.log("PLace",place)
		// console.log("X : ",place.posX," Y :",place.posY)
		console.log("X", this.intialposX, "Y", this.intialposY)
		this.redCoin = this.add.sprite(this.intialposX, this.intialposY, 'red');
		this.redCoin.setDepth(2)
		this.redCoin.setScale(0.33, 0.33)
		this.yellowCoin = this.add.sprite(this.intialposX, this.intialposY, 'yellow');
		this.yellowCoin.setDepth(2)
		this.yellowCoin.setScale(0.33, 0.33)

		if (this.count == 0) {
			// console.log("player 2")
			if(this.isSound==true){
				console.log("in the sound")
				this.soundObj.playSound(this.soundObj.coinPlacedSound, false);
			}
			this.glowBlast(this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].x, this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].y)

			this.tweens.add({
				targets: this.redCoin,
				x: this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].x,
				y: this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].y,
				ease: 'Bounce',
				bounce: 0.05,
				duration: 500,
				onComplete: () => {
					this.findConclusion()
					this.count++
					this.hoverCoin.setTexture("yellow");
					var sequence = this.checkSequence(this.resultMatrix);
					if (!sequence) {
						this.rotateCoin("player1")
						this.glowRight.setVisible(false)
						this.glowLeft.setVisible(true)
					}
					if (this[`array${arrayIndex + 1}Y`] < 7) {
						this.coinHover(this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].x, this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].y);
					}
					place.packedCoin = "red";
					this.colorCode = 1;
					place.packed = true;
					this[`row1_Space`].setInteractive()
					for (let i = 1; i <= 6; i++) {
						this[`row1_Space_${i}`].setInteractive()
					}
				}
			});
		} else {

			// console.log("player1")
			// console.log(enableBot)
			if (enableBot == true) {
				this.botMove();
			}
			if(this.isSound==true){
				console.log("in the sound")
				this.soundObj.playSound(this.soundObj.coinPlacedSound, false);
			}

			this.glowBlast(this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].x, this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].y)

			this.tweens.add({
				targets: this.yellowCoin,
				x: this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].x,
				y: this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].y,
				ease: 'Bounce',
				bounce: 0.1,
				duration: 500,
				onComplete: () => {
					this.findConclusion()
					this.count = 0
					// console.log("coin updated");
					this.hoverCoin.setTexture("red");
					var sequence = this.checkSequence(this.resultMatrix);
					if (!sequence) {
						this.rotateCoin("player2")
						this.glowRight.setVisible(true)
						this.glowLeft.setVisible(false)
					}
					if (this[`array${arrayIndex + 1}Y`] < 7) {
						this.coinHover(this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].x, this.mainArray[arrayIndex][this[`array${arrayIndex + 1}Y`]].y);
					}
					// console.log(this.targets == this.coin);
					place.packedCoin = "yello";
					this.colorCode = 2;
					place.packed = true;
					// console.log(place);
				}
			});
		}
	}



	botMove() {
		this[`row1_Space`].disableInteractive();
		for (let i = 1; i <= 6; i++) {
			this[`row1_Space_${i}`].disableInteractive();
		}

		// Check if the randomly selected row is filled
		const columnIndex = Math.floor(Math.random() * 7);
		console.log("Bot Column Index", columnIndex)
		if (this[`array${columnIndex + 1}Y`] <= 6) {
			var sequence = this.checkSequence(this.resultMatrix);
			if (!sequence) {
				setTimeout(() => {
					// console.log(columnIndex);
					this.intialposX = 650 + (columnIndex * 110);
					this.intialposY = -78;
					this.coinUpdate1(columnIndex);
				}, 1000);
			}
		} else {
			// If the randomly selected row is filled, check other rows
			for (let i = 0; i < 7; i++) {
				if (this[`array${i + 1}Y`] < 6) {
					setTimeout(() => {
						// console.log(i);
						this.coinUpdate1(i);
					}, 1000);
					break; // Exit the loop after finding an available row
				}
			}
		}

		this.isHumanTurn = true;
	}

	glowBlast(x, y) {
		var sequence = this.checkSequence(this.resultMatrix)
		if (!sequence) {
			setTimeout(() => {
				this.spritesheet0.setScale(0.65, 0.65)
				this.spritesheet0.setVisible(true)
				this.spritesheet0.x = x
				this.spritesheet0.y = y - 10
				this.spritesheet0.play("sparkleAnims")
				this.spritesheet0.on('animationcomplete', function () {
					this.setVisible(false)
				});
			}, 450)
		}
	}


	glowCoins() {
		const sequence = this.checkSequence(this.resultMatrix);
		// console.log(sequence)
		if (sequence) {
			if (sequence.type == "row") {
				let row = sequence.position.row;
				let col = sequence.position.col;

				setTimeout(() => {
					// this.mainArray[row][col].y
					for (let i = col; i < col + 4; i++) {
						// console.log("row: ", row, "Cols: ", col)
						// console.log(i)
						let leafCircle = this.add.sprite(this.mainArray[row][i].x, this.mainArray[row][i].y, "Leaf-Circle")
						leafCircle.setScale(.44, .44)
						leafCircle.setDepth(1)
						this.tweens.add({
							targets: leafCircle,
							duration: 1500, // Duration in milliseconds
							angle: '+=360', // Rotate by 360 degrees relative to the current angle
							ease: 'Linear', // Linear easing
							repeat: -1, // -1 means loop indefinitely
						});
					}
				}, 700)

			}
			else if (sequence.type == "column") {
				let row = sequence.position.row;
				let col = sequence.position.col;

				setTimeout(() => {
					for (let i = row; i < row + 4; i++) {
						// console.log("hhhhhhh")
						let leafCircle = this.add.sprite(this.mainArray[i][col].x, this.mainArray[i][col].y, "Leaf-Circle")
						leafCircle.setScale(.44, .44)
						leafCircle.setDepth(1)
						this.tweens.add({
							targets: leafCircle,
							duration: 1500, // Duration in milliseconds
							angle: '+=360', // Rotate by 360 degrees relative to the current angle
							ease: 'Linear', // Linear easing
							repeat: -1, // -1 means loop indefinitely
						});
					}
				}, 700)

			}
			else if (sequence.type == "diagonal") {
				let row = sequence.position.row;
				let col = sequence.position.col;

				// Code for diagonals
				setTimeout(() => {
					if (sequence.direction == "top-left to bottom-right") {
						for (let i = 0; i < 4; i++) {
							// console.log("Diagonal: ", i);
							let leafCircle = this.add.sprite(this.mainArray[row + i][col + i].x, this.mainArray[row + i][col + i].y, "Leaf-Circle");
							leafCircle.setScale(.44, .44);
							leafCircle.setDepth(1);
							this.tweens.add({
								targets: leafCircle,
								duration: 1500, // Duration in milliseconds
								angle: '+=360', // Rotate by 360 degrees relative to the current angle
								ease: 'Linear', // Linear easing
								repeat: -1, // -1 means loop indefinitely
							});
						}
					} else {
						for (let i = 0; i < 4; i++) {
							// console.log("Backward Diagonal: ", i);
							let leafCircle = this.add.sprite(this.mainArray[row + i][col - i].x, this.mainArray[row + i][col - i].y, "Leaf-Circle");
							leafCircle.setScale(.44, .44);
							leafCircle.setDepth(1);
							this.tweens.add({
								targets: leafCircle,
								duration: 1500, // Duration in milliseconds
								angle: '+=360', // Rotate by 360 degrees relative to the current angle
								ease: 'Linear', // Linear easing
								repeat: -1, // -1 means loop indefinitely
							});
						}
					}
				}, 700)
			}
		}
	}

	rotationTween1;
	rotationTween2;

	rotateCoin(player) {
		// console.log("Player playing", player);

		// Stop any existing rotation tweens for both players
		if (this.rotationTween1) {
			this.rotationTween1.stop();
		}

		if (this.rotationTween2) {
			this.rotationTween2.stop();
		}

		if (player === "player1") {
			// Create a new rotation tween for player 1
			this.rotationTween1 = this.tweens.add({
				targets: this.player1bg,
				duration: 1500, // Duration in milliseconds
				angle: '+=360', // Rotate by 360 degrees relative to the current angle
				ease: 'Linear', // Linear easing
				repeat: -1, // -1 means loop indefinitely
			});
		} else if (player === "player2") {
			// Create a new rotation tween for player 2
			this.rotationTween2 = this.tweens.add({
				targets: this.player2bg,
				duration: 1500, // Duration in milliseconds
				angle: '+=360', // Rotate by 360 degrees relative to the current angle
				ease: 'Linear', // Linear easing
				repeat: -1, // -1 means loop indefinitely
			});
		} else {
			// console.log("Invalid player:", player);
		}
	}

	// settingButtonFun() {
	// }
	settingMaskAnimation() {

		let settingShape = this.make.graphics();
		settingShape.fillEllipse(1615, 200, 200, 180, 32);
		const settingMask = settingShape.createGeometryMask();
		this.settingContainer.setMask(settingMask);

		this.setting_Button.setInteractive();
		this.setting_Button.on("pointerdown", () => {
			if (this.settingContainer.y == 145) {
				this.y = -18;
				this.angle = 360;
			}
			else {
				this.y = 145;
				this.angle = -360;
			}

			this.add.tween({
				targets: this.setting_Button,
				angle: this.angle,
				ease: "Power2",
				duration: 100,
				onComplete: () => {
					this.setting_Button.setInteractive();
				}
			});

			this.add.tween({
				targets: this.settingContainer,
				y: this.y,
				ease: "Power2",
				duration: 300,
				onComplete: () => {
					this.info_Button.setInteractive();
					var flag=0;
					this.sound_Button.setInteractive().on("pointerdown", () => {

						if (this.sound_Button.texture.key == "Sound-Button") {
							this.sound_Button.setScale(0.9,0.9)
							this.sound_Button.setTexture("Sound-Button-Off");
							this.isSound=false;
							flag++
							console.log("im in buttonnnnnnnn")
						}
						else {
							this.sound_Button.setScale(0.9,0.9)
							this.sound_Button.setTexture("Sound-Button");
							this.isSound=true;
						}
					});
				}
			});
		})


		this.sound_Button.on("pointerdown",()=>{

		})
	}




	update() {
		// console.log(this.count)

		// console.log("Column 1",this.array1Y,"Column 2",this.array2Y,"Column 3",this.array3Y,"Column 4",this.array4Y,"Column 5",this.array5Y,"Column 6",this.array1Y,"Column 7",this.array7Y)

		//for Column Indicator
		const mouseX = this.input.x;
		const minX = 656;
		const maxX = 1305;
		const clampedX = Phaser.Math.Clamp(mouseX, minX, maxX);
		this.hoverCoin.x = clampedX;


		if (this.count == 0) {
			this.red0_5.setVisible(true);
			this.yellow0_5.setVisible(false);
			this.posX = this.red0_5.x
			this.posY = this.red0_5.y
		} else if (this.count == 1) {
			this.yellow0_5.setVisible(true);
			this.red0_5.setVisible(false);
			this.posX = this.yellow0_5.x
			this.posY = this.yellow0_5.y
		}
		// console.log(this.colorCode);
		this.findConclusion();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
