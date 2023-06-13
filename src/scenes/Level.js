
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

		// bgImage
		const bgImage = this.add.image(989, 506, "bgImage");
		bgImage.scaleX = 3.5;
		bgImage.scaleY = 3.5;

		// board__1_
		this.add.image(927.5499956645881, 568.9043206682622, "Board (1)");

		// BoxContainer
		const boxContainer = this.add.container(0, 0);

		// box49
		const box49 = this.add.rectangle(1331, 159, 95, 95);
		box49.scaleX = 1.38;
		box49.scaleY = 1.38;
		box49.isFilled = true;
		boxContainer.add(box49);

		// box48
		const box48 = this.add.rectangle(1198, 159, 95, 95);
		box48.scaleX = 1.38;
		box48.scaleY = 1.38;
		box48.isFilled = true;
		boxContainer.add(box48);

		// box47
		const box47 = this.add.rectangle(1064, 159, 95, 95);
		box47.scaleX = 1.38;
		box47.scaleY = 1.38;
		box47.isFilled = true;
		boxContainer.add(box47);

		// box46
		const box46 = this.add.rectangle(928, 159, 95, 95);
		box46.scaleX = 1.38;
		box46.scaleY = 1.38;
		box46.isFilled = true;
		boxContainer.add(box46);

		// box45
		const box45 = this.add.rectangle(793, 159, 95, 95);
		box45.scaleX = 1.38;
		box45.scaleY = 1.38;
		box45.isFilled = true;
		boxContainer.add(box45);

		// box44
		const box44 = this.add.rectangle(659, 159, 95, 95);
		box44.scaleX = 1.38;
		box44.scaleY = 1.38;
		box44.isFilled = true;
		boxContainer.add(box44);

		// box43
		const box43 = this.add.rectangle(525, 159, 95, 95);
		box43.scaleX = 1.38;
		box43.scaleY = 1.38;
		box43.isFilled = true;
		boxContainer.add(box43);

		// box42
		const box42 = this.add.rectangle(1331, 295, 95, 95);
		box42.scaleX = 1.38;
		box42.scaleY = 1.38;
		box42.isFilled = true;
		boxContainer.add(box42);

		// box41
		const box41 = this.add.rectangle(1198, 295, 95, 95);
		box41.scaleX = 1.38;
		box41.scaleY = 1.38;
		box41.isFilled = true;
		boxContainer.add(box41);

		// box40
		const box40 = this.add.rectangle(1064, 295, 95, 95);
		box40.scaleX = 1.38;
		box40.scaleY = 1.38;
		box40.isFilled = true;
		boxContainer.add(box40);

		// box39
		const box39 = this.add.rectangle(928, 295, 95, 95);
		box39.scaleX = 1.38;
		box39.scaleY = 1.38;
		box39.isFilled = true;
		boxContainer.add(box39);

		// box38
		const box38 = this.add.rectangle(793, 295, 95, 95);
		box38.scaleX = 1.38;
		box38.scaleY = 1.38;
		box38.isFilled = true;
		boxContainer.add(box38);

		// box37
		const box37 = this.add.rectangle(659, 295, 95, 95);
		box37.scaleX = 1.38;
		box37.scaleY = 1.38;
		box37.isFilled = true;
		boxContainer.add(box37);

		// box36
		const box36 = this.add.rectangle(525, 295, 95, 95);
		box36.scaleX = 1.38;
		box36.scaleY = 1.38;
		box36.isFilled = true;
		boxContainer.add(box36);

		// box35
		const box35 = this.add.rectangle(1331, 431, 95, 95);
		box35.scaleX = 1.38;
		box35.scaleY = 1.38;
		box35.isFilled = true;
		boxContainer.add(box35);

		// box34
		const box34 = this.add.rectangle(1198, 431, 95, 95);
		box34.scaleX = 1.38;
		box34.scaleY = 1.38;
		box34.isFilled = true;
		boxContainer.add(box34);

		// box33
		const box33 = this.add.rectangle(1064, 431, 95, 95);
		box33.scaleX = 1.38;
		box33.scaleY = 1.38;
		box33.isFilled = true;
		boxContainer.add(box33);

		// box32
		const box32 = this.add.rectangle(928, 431, 95, 95);
		box32.scaleX = 1.38;
		box32.scaleY = 1.38;
		box32.isFilled = true;
		boxContainer.add(box32);

		// box31
		const box31 = this.add.rectangle(793, 431, 95, 95);
		box31.scaleX = 1.38;
		box31.scaleY = 1.38;
		box31.isFilled = true;
		boxContainer.add(box31);

		// box30
		const box30 = this.add.rectangle(659, 431, 95, 95);
		box30.scaleX = 1.38;
		box30.scaleY = 1.38;
		box30.isFilled = true;
		boxContainer.add(box30);

		// box29
		const box29 = this.add.rectangle(525, 431, 95, 95);
		box29.scaleX = 1.38;
		box29.scaleY = 1.38;
		box29.isFilled = true;
		boxContainer.add(box29);

		// box28
		const box28 = this.add.rectangle(1331, 568, 95, 95);
		box28.scaleX = 1.38;
		box28.scaleY = 1.38;
		box28.isFilled = true;
		boxContainer.add(box28);

		// box27
		const box27 = this.add.rectangle(1198, 568, 95, 95);
		box27.scaleX = 1.38;
		box27.scaleY = 1.38;
		box27.isFilled = true;
		boxContainer.add(box27);

		// box26
		const box26 = this.add.rectangle(1064, 568, 95, 95);
		box26.scaleX = 1.38;
		box26.scaleY = 1.38;
		box26.isFilled = true;
		boxContainer.add(box26);

		// box25
		const box25 = this.add.rectangle(928, 568, 95, 95);
		box25.scaleX = 1.38;
		box25.scaleY = 1.38;
		box25.isFilled = true;
		boxContainer.add(box25);

		// box24
		const box24 = this.add.rectangle(793, 568, 95, 95);
		box24.scaleX = 1.38;
		box24.scaleY = 1.38;
		box24.isFilled = true;
		boxContainer.add(box24);

		// box23
		const box23 = this.add.rectangle(659, 568, 95, 95);
		box23.scaleX = 1.38;
		box23.scaleY = 1.38;
		box23.isFilled = true;
		boxContainer.add(box23);

		// box22
		const box22 = this.add.rectangle(525, 568, 95, 95);
		box22.scaleX = 1.38;
		box22.scaleY = 1.38;
		box22.isFilled = true;
		boxContainer.add(box22);

		// box21
		const box21 = this.add.rectangle(1331, 704, 95, 95);
		box21.scaleX = 1.38;
		box21.scaleY = 1.38;
		box21.isFilled = true;
		boxContainer.add(box21);

		// box20
		const box20 = this.add.rectangle(1198, 704, 95, 95);
		box20.scaleX = 1.38;
		box20.scaleY = 1.38;
		box20.isFilled = true;
		boxContainer.add(box20);

		// box19
		const box19 = this.add.rectangle(1064, 704, 95, 95);
		box19.scaleX = 1.38;
		box19.scaleY = 1.38;
		box19.isFilled = true;
		boxContainer.add(box19);

		// box18
		const box18 = this.add.rectangle(928, 704, 95, 95);
		box18.scaleX = 1.38;
		box18.scaleY = 1.38;
		box18.isFilled = true;
		boxContainer.add(box18);

		// box17
		const box17 = this.add.rectangle(793, 704, 95, 95);
		box17.scaleX = 1.38;
		box17.scaleY = 1.38;
		box17.isFilled = true;
		boxContainer.add(box17);

		// box16
		const box16 = this.add.rectangle(659, 704, 95, 95);
		box16.scaleX = 1.38;
		box16.scaleY = 1.38;
		box16.isFilled = true;
		boxContainer.add(box16);

		// box15
		const box15 = this.add.rectangle(525, 704, 95, 95);
		box15.scaleX = 1.38;
		box15.scaleY = 1.38;
		box15.isFilled = true;
		boxContainer.add(box15);

		// box14
		const box14 = this.add.rectangle(1331, 840, 95, 95);
		box14.scaleX = 1.38;
		box14.scaleY = 1.38;
		box14.isFilled = true;
		boxContainer.add(box14);

		// box13
		const box13 = this.add.rectangle(1198, 840, 95, 95);
		box13.scaleX = 1.38;
		box13.scaleY = 1.38;
		box13.isFilled = true;
		boxContainer.add(box13);

		// box12
		const box12 = this.add.rectangle(1064, 840, 95, 95);
		box12.scaleX = 1.38;
		box12.scaleY = 1.38;
		box12.isFilled = true;
		boxContainer.add(box12);

		// box11
		const box11 = this.add.rectangle(928, 840, 95, 95);
		box11.scaleX = 1.38;
		box11.scaleY = 1.38;
		box11.isFilled = true;
		boxContainer.add(box11);

		// box10
		const box10 = this.add.rectangle(793, 840, 95, 95);
		box10.scaleX = 1.38;
		box10.scaleY = 1.38;
		box10.isFilled = true;
		boxContainer.add(box10);

		// box9
		const box9 = this.add.rectangle(659, 840, 95, 95);
		box9.scaleX = 1.38;
		box9.scaleY = 1.38;
		box9.isFilled = true;
		boxContainer.add(box9);

		// box8
		const box8 = this.add.rectangle(525, 840, 95, 95);
		box8.scaleX = 1.38;
		box8.scaleY = 1.38;
		box8.isFilled = true;
		boxContainer.add(box8);

		// box7
		const box7 = this.add.rectangle(1331, 975, 95, 95);
		box7.scaleX = 1.38;
		box7.scaleY = 1.38;
		box7.isFilled = true;
		boxContainer.add(box7);

		// box6
		const box6 = this.add.rectangle(1198, 975, 95, 95);
		box6.scaleX = 1.38;
		box6.scaleY = 1.38;
		box6.isFilled = true;
		boxContainer.add(box6);

		// box5
		const box5 = this.add.rectangle(1064, 975, 95, 95);
		box5.scaleX = 1.38;
		box5.scaleY = 1.38;
		box5.isFilled = true;
		boxContainer.add(box5);

		// box4
		const box4 = this.add.rectangle(928, 975, 95, 95);
		box4.scaleX = 1.38;
		box4.scaleY = 1.38;
		box4.isFilled = true;
		boxContainer.add(box4);

		// box3
		const box3 = this.add.rectangle(793, 975, 95, 95);
		box3.scaleX = 1.38;
		box3.scaleY = 1.38;
		box3.isFilled = true;
		boxContainer.add(box3);

		// box2
		const box2 = this.add.rectangle(659, 975, 95, 95);
		box2.scaleX = 1.38;
		box2.scaleY = 1.38;
		box2.isFilled = true;
		boxContainer.add(box2);

		// box1
		const box1 = this.add.rectangle(525, 975, 95, 95);
		box1.scaleX = 1.38;
		box1.scaleY = 1.38;
		box1.isFilled = true;
		boxContainer.add(box1);

		// red
		const red = this.add.image(516, -89, "red");

		// yellow
		this.add.image(1333, -78, "yellow");

		// player_1
		const player_1 = this.add.image(196, 616, "player_1");
		player_1.scaleY = 1.1;

		// player_2
		const player_2 = this.add.image(1690, 583, "player_2");
		player_2.flipX = true;

		// gameTitle
		const gameTitle = this.add.text(960, 46, "", {});
		gameTitle.setOrigin(0.5, 0.5);
		gameTitle.text = "Connect 4";
		gameTitle.setStyle({ "align": "right", "color": "#190b0bff", "fontSize": "40px" });

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
		this.red = red;
		this.player_1 = player_1;
		this.player_2 = player_2;
		this.gameTitle = gameTitle;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	boxContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	box49;
	/** @type {Phaser.GameObjects.Rectangle} */
	box48;
	/** @type {Phaser.GameObjects.Rectangle} */
	box47;
	/** @type {Phaser.GameObjects.Rectangle} */
	box46;
	/** @type {Phaser.GameObjects.Rectangle} */
	box45;
	/** @type {Phaser.GameObjects.Rectangle} */
	box44;
	/** @type {Phaser.GameObjects.Rectangle} */
	box43;
	/** @type {Phaser.GameObjects.Rectangle} */
	box42;
	/** @type {Phaser.GameObjects.Rectangle} */
	box41;
	/** @type {Phaser.GameObjects.Rectangle} */
	box40;
	/** @type {Phaser.GameObjects.Rectangle} */
	box39;
	/** @type {Phaser.GameObjects.Rectangle} */
	box38;
	/** @type {Phaser.GameObjects.Rectangle} */
	box37;
	/** @type {Phaser.GameObjects.Rectangle} */
	box36;
	/** @type {Phaser.GameObjects.Rectangle} */
	box35;
	/** @type {Phaser.GameObjects.Rectangle} */
	box34;
	/** @type {Phaser.GameObjects.Rectangle} */
	box33;
	/** @type {Phaser.GameObjects.Rectangle} */
	box32;
	/** @type {Phaser.GameObjects.Rectangle} */
	box31;
	/** @type {Phaser.GameObjects.Rectangle} */
	box30;
	/** @type {Phaser.GameObjects.Rectangle} */
	box29;
	/** @type {Phaser.GameObjects.Rectangle} */
	box28;
	/** @type {Phaser.GameObjects.Rectangle} */
	box27;
	/** @type {Phaser.GameObjects.Rectangle} */
	box26;
	/** @type {Phaser.GameObjects.Rectangle} */
	box25;
	/** @type {Phaser.GameObjects.Rectangle} */
	box24;
	/** @type {Phaser.GameObjects.Rectangle} */
	box23;
	/** @type {Phaser.GameObjects.Rectangle} */
	box22;
	/** @type {Phaser.GameObjects.Rectangle} */
	box21;
	/** @type {Phaser.GameObjects.Rectangle} */
	box20;
	/** @type {Phaser.GameObjects.Rectangle} */
	box19;
	/** @type {Phaser.GameObjects.Rectangle} */
	box18;
	/** @type {Phaser.GameObjects.Rectangle} */
	box17;
	/** @type {Phaser.GameObjects.Rectangle} */
	box16;
	/** @type {Phaser.GameObjects.Rectangle} */
	box15;
	/** @type {Phaser.GameObjects.Rectangle} */
	box14;
	/** @type {Phaser.GameObjects.Rectangle} */
	box13;
	/** @type {Phaser.GameObjects.Rectangle} */
	box12;
	/** @type {Phaser.GameObjects.Rectangle} */
	box11;
	/** @type {Phaser.GameObjects.Rectangle} */
	box10;
	/** @type {Phaser.GameObjects.Rectangle} */
	box9;
	/** @type {Phaser.GameObjects.Rectangle} */
	box8;
	/** @type {Phaser.GameObjects.Rectangle} */
	box7;
	/** @type {Phaser.GameObjects.Rectangle} */
	box6;
	/** @type {Phaser.GameObjects.Rectangle} */
	box5;
	/** @type {Phaser.GameObjects.Rectangle} */
	box4;
	/** @type {Phaser.GameObjects.Rectangle} */
	box3;
	/** @type {Phaser.GameObjects.Rectangle} */
	box2;
	/** @type {Phaser.GameObjects.Rectangle} */
	box1;
	/** @type {Phaser.GameObjects.Image} */
	red;
	/** @type {Phaser.GameObjects.Image} */
	player_1;
	/** @type {Phaser.GameObjects.Image} */
	player_2;
	/** @type {Phaser.GameObjects.Text} */
	gameTitle;

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
	count = 0;
	resultMatrix;
	colorCode = 2;
	matrix = [];
	player_1Tween;
	player_2Tween;
	cursor;
	hoverX;
	hoverY;

	create() {
		this.editorCreate();

		this.input.on('pointerover', this.showpoint, this);
		this.input.on('pointermove', this.showpoint, this);
		this.input.on('pointerup', this.showpoint, this);
		// this.input.on('pointerenter', this.showpoint, this);
		// this.input.on('pointerleave', this.showpoint, this);

		this.red0_5 = this.add.image(this.hoverX, this.hoverY, 'red');
		this.red0_5.setAlpha(0.5)
		this.yellow0_5 = this.add.image(this.hoverX, this.hoverY, 'yellow');
		this.yellow0_5.setAlpha(0.5)

		this.gameTitle.setStyle({ 'fontFamily': 'GameFont1' })
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
		this.glowPlayer()
		this.findPos();
		this.coinHover(-200, -200);
		this.coinUpdate();
	}

	findConclusion() {
		// console.log(this.resultMatrix);

		const sequence = this.checkSequence(this.resultMatrix);
		if (sequence) {
			if (sequence.sequence == 2) {
				setTimeout(() => {
					playerWon = "Player 1"
					this.scene.stop('Level');
					this.scene.start('ResultScene');
				}, 1000);
			} else if (sequence.sequence == 1) {
				setTimeout(() => {
					playerWon = "Player 2"
					this.scene.stop('Level');
					this.scene.start('ResultScene');
				}, 1000);
			}

		} else {
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

		// Check diagonals
		for (let row = 0; row <= rows - 4; row++) {
			for (let col = 0; col <= cols - 4; col++) {
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

				if (count === 4) {
					return {
						sequence: current,
						type: "diagonal",
						position: { row, col },
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

				if (count === 4) {
					return {
						sequence: current,
						type: "diagonal",
						position: { row, col: col + 3 },
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
				// element.on('pointerdown', () => {
				// 	// this.addCoin(element)
				// });

			}
		}
	}

	coinHover(currentColumnX, currentColumnY) {
		// console.log("coinHover Called...")
		if (this.count == 0) {
			this.tweens.add({
				targets: this.red0_5,
				x: currentColumnX,
				y: currentColumnY,
				duration: 50,
				ease: 'Power3',
			});
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

	showpoint(pointer){
		// console.log('on pointer up ',pointer.x)
		this.hoverX = pointer.x
			this.hoverY = pointer.y
			if (pointer.y >= 108 && pointer.y <= 1000) {
				if (pointer.x >= 480 && pointer.x <= 590) {
					this.coinHover(this.mainArray[0][this.array1Y].x, this.mainArray[0][this.array1Y].y)
					this.intialposX = 518
					this.intialposY = -78
				}
				else if (pointer.x >= 600 && pointer.x <= 710) {
					this.coinHover(this.mainArray[1][this.array2Y].x, this.mainArray[1][this.array2Y].y)
					this.intialposX = 659
					this.intialposY = -78
				}
				else if (pointer.x >= 740 && pointer.x <= 850) {
					this.coinHover(this.mainArray[2][this.array3Y].x, this.mainArray[2][this.array3Y].y);
					this.intialposX = 790;
					this.intialposY = -78;
				}
				else if (pointer.x >= 880 && pointer.x <= 990) {
					this.coinHover(this.mainArray[3][this.array4Y].x, this.mainArray[3][this.array4Y].y)
					this.intialposX = 926
					this.intialposY = -78
				}
				else if (pointer.x >= 1010 && pointer.x <= 1130) {

					this.coinHover(this.mainArray[4][this.array5Y].x, this.mainArray[4][this.array5Y].y)
					this.intialposX = 1062
					this.intialposY = -78

				}
				else if (pointer.x >= 1150 && pointer.x <= 1260) {

					this.coinHover(this.mainArray[5][this.array6Y].x, this.mainArray[5][this.array6Y].y)
					this.intialposX = 1203
					this.intialposY = -78

				}
				else if (pointer.x >= 1280 && pointer.x <= 1330) {

					this.coinHover(this.mainArray[6][this.array7Y].x, this.mainArray[6][this.array7Y].y)
					this.intialposX = 1333
					this.intialposY = -78

				}
			}
	}

	coinUpdate() {
		this.input.cursor = "pointer";
		this.input.on('pointerdown', this.handlePointerDown, this);
	}
	
	handlePointerDown(pointer, localX, localY, event) {
		if (pointer.y < 120 || pointer.y > 1000) {
			return;
		}
	
		const xRanges = [
			{ min: 500, max: 570, arrayIndex: 0 },
			{ min: 620, max: 690, arrayIndex: 1 },
			{ min: 760, max: 830, arrayIndex: 2 },
			{ min: 900, max: 970, arrayIndex: 3 },
			{ min: 1030, max: 1100, arrayIndex: 4 },
			{ min: 1170, max: 1240, arrayIndex: 5 },
			{ min: 1300, max: 1370, arrayIndex: 6 }
		];
	
		for (const range of xRanges) {
			if (pointer.x >= range.min && pointer.x <= range.max) {
				this.addCoin(this);
				this.resultMatrix[range.arrayIndex][this[`array${range.arrayIndex + 1}Y`]] = this.colorCode;
				this[`array${range.arrayIndex + 1}Y`]++;
				this.coinHover(this.mainArray[range.arrayIndex][this[`array${range.arrayIndex + 1}Y`]].x, this.mainArray[range.arrayIndex][this[`array${range.arrayIndex + 1}Y`]].y);
				this.soundObj.playSound(this.soundObj.coinPlacedSound, false);
				this.glowPlayer();
				break;
			}
		}
	}
	

	addCoin(place) {
		// console.log(place);
		this.redCoin = this.add.image(this.intialposX, this.intialposY, 'red');
		this.yellowCoin = this.add.image(this.intialposX, this.intialposY, 'yellow');

		if (this.count == 0) {
			this.soundObj.playSound(this.soundObj.coinPlacedSound, false);
			this.tweens.add({
				targets: this.redCoin,
				x: this.posX,
				y: this.posY,
				ease: 'Bounce',
				bounce: 0.05,
				duration: 500,
				onComplete: () => {
					place.packedCoin = "red";
					this.colorCode = 1;
					place.packed = true;
					this.count++
					console.log(place);
				}
			});
		} else {
			this.soundObj.playSound(this.soundObj.coinPlacedSound, false);
			this.tweens.add({
				targets: this.yellowCoin,
				x: this.posX,
				y: this.posY,
				ease: 'Bounce',
				bounce: 0.1,
				duration: 500,
				onComplete: () => {
					console.log(this.targets == this.coin);
					place.packedCoin = "yello";
					this.colorCode = 2;
					place.packed = true;
					this.count = 0
					// console.log(place);
				}
			});
		}
	}

	glowPlayer() {
		if (this.count == 0) {
			this.tweens.add({
				targets: this.player_1,
				scaleX: 1.2,
				scaleY: 1.2,
				onComplete: () => {
					this.tweens.add({
						targets: this.player_1,
						scaleX: 1,
						scaleY: 1,
						onComplete: () => {
							this.glowPlayer();
						}
					})
				}
			})
		} else if (this.count == 1) {
			this.tweens.add({
				targets: this.player_2,
				scaleX: 1.2,
				scaleY: 1.2,
				onComplete: () => {
					this.tweens.add({
						targets: this.player_2,
						scaleX: 1,
						scaleY: 1,
						onComplete: () => {
							this.glowPlayer();
						}
					})
				}
			})
		}
	}

	update() {
		// this.hover(this.mainArray);
		if (this.count == 0) {
			this.posX = this.red0_5.x
			this.posY = this.red0_5.y
		} else if (this.count == 1) {
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
