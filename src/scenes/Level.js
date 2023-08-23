
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

		// background
		this.add.image(960, 540, "Background");

		// game_Board
		const game_Board = this.add.image(960, 540, "Game-Board");
		game_Board.scaleX = 0.9;
		game_Board.scaleY = 0.9;

		// silver_Stone
		const silver_Stone = this.add.image(291, 533, "Silver-Stone");
		silver_Stone.scaleX = 0.8;
		silver_Stone.scaleY = 0.8;

		// brown_Stone
		const brown_Stone = this.add.image(1609, 533, "Brown-Stone");
		brown_Stone.scaleX = 0.8;
		brown_Stone.scaleY = 0.8;

		// brown_Stone_Cover
		const brown_Stone_Cover = this.add.image(1609, 533, "Brown-Stone-Cover");
		brown_Stone_Cover.scaleX = 0.55;
		brown_Stone_Cover.scaleY = 0.55;

		// silver_Stone_Cover
		const silver_Stone_Cover = this.add.image(291, 533, "Silver-Stone-Cover");
		silver_Stone_Cover.scaleX = 0.55;
		silver_Stone_Cover.scaleY = 0.55;

		// character_1
		const character_1 = this.add.image(289, 534, "Character-1");
		character_1.scaleX = 0.5;
		character_1.scaleY = 0.5;

		// character_2
		const character_2 = this.add.image(1612, 536, "Character-2");
		character_2.scaleX = 0.5;
		character_2.scaleY = 0.5;

		// cell_1
		const cell_1 = this.add.ellipse(604, 833, 70, 70);
		cell_1.isFilled = true;

		// cell_7
		const cell_7 = this.add.ellipse(717, 833, 70, 70);
		cell_7.isFilled = true;

		// cell_13
		const cell_13 = this.add.ellipse(828, 833, 70, 70);
		cell_13.isFilled = true;

		// cell_19
		const cell_19 = this.add.ellipse(929, 833, 70, 70);
		cell_19.isFilled = true;

		// cell_25
		const cell_25 = this.add.ellipse(1030, 833, 70, 70);
		cell_25.isFilled = true;

		// cell_31
		const cell_31 = this.add.ellipse(1129, 833, 70, 70);
		cell_31.isFilled = true;

		// cell_37
		const cell_37 = this.add.ellipse(1231, 833, 70, 70);
		cell_37.isFilled = true;

		// cell_43
		const cell_43 = this.add.ellipse(1334, 833, 70, 70);
		cell_43.isFilled = true;

		// cell_2
		const cell_2 = this.add.ellipse(604, 723, 70, 70);
		cell_2.isFilled = true;

		// cell_8
		const cell_8 = this.add.ellipse(717, 723, 70, 70);
		cell_8.isFilled = true;

		// cell_14
		const cell_14 = this.add.ellipse(827, 723, 70, 70);
		cell_14.isFilled = true;

		// cell_20
		const cell_20 = this.add.ellipse(928, 723, 70, 70);
		cell_20.isFilled = true;

		// cell_26
		const cell_26 = this.add.ellipse(1030, 723, 70, 70);
		cell_26.isFilled = true;

		// cell_32
		const cell_32 = this.add.ellipse(1130, 723, 70, 70);
		cell_32.isFilled = true;

		// cell_38
		const cell_38 = this.add.ellipse(1230, 723, 70, 70);
		cell_38.isFilled = true;

		// cell_44
		const cell_44 = this.add.ellipse(1335, 723, 70, 70);
		cell_44.isFilled = true;

		// cell_3
		const cell_3 = this.add.ellipse(603, 614, 70, 70);
		cell_3.isFilled = true;

		// cell_9
		const cell_9 = this.add.ellipse(717.1530300535503, 614, 70, 70);
		cell_9.isFilled = true;

		// cell_15
		const cell_15 = this.add.ellipse(828.2526274214182, 614, 70, 70);
		cell_15.isFilled = true;

		// cell_21
		const cell_21 = this.add.ellipse(928, 614, 70, 70);
		cell_21.isFilled = true;

		// cell_27
		const cell_27 = this.add.ellipse(1031, 614, 70, 70);
		cell_27.isFilled = true;

		// cell_33
		const cell_33 = this.add.ellipse(1130, 614, 70, 70);
		cell_33.isFilled = true;

		// cell_39
		const cell_39 = this.add.ellipse(1230, 614, 70, 70);
		cell_39.isFilled = true;

		// cell_45
		const cell_45 = this.add.ellipse(1334.2659222450707, 614, 70, 70);
		cell_45.isFilled = true;

		// cell_4
		const cell_4 = this.add.ellipse(603, 506, 70, 70);
		cell_4.isFilled = true;

		// cell_10
		const cell_10 = this.add.ellipse(715.6757463743146, 506, 70, 70);
		cell_10.isFilled = true;

		// cell_16
		const cell_16 = this.add.ellipse(828, 506, 70, 70);
		cell_16.isFilled = true;

		// cell_22
		const cell_22 = this.add.ellipse(928, 506, 70, 70);
		cell_22.isFilled = true;

		// cell_28
		const cell_28 = this.add.ellipse(1030.7499940584848, 506, 70, 70);
		cell_28.isFilled = true;

		// cell_34
		const cell_34 = this.add.ellipse(1130, 506, 70, 70);
		cell_34.isFilled = true;

		// cell_40
		const cell_40 = this.add.ellipse(1230, 506, 70, 70);
		cell_40.isFilled = true;

		// cell_46
		const cell_46 = this.add.ellipse(1333.6037994216217, 506, 70, 70);
		cell_46.isFilled = true;

		// cell_5
		const cell_5 = this.add.ellipse(603, 394, 70, 70);
		cell_5.isFilled = true;

		// cell_11
		const cell_11 = this.add.ellipse(716, 394, 70, 70);
		cell_11.isFilled = true;

		// cell_17
		const cell_17 = this.add.ellipse(826, 394, 70, 70);
		cell_17.isFilled = true;

		// cell_23
		const cell_23 = this.add.ellipse(927.8851166703676, 394, 70, 70);
		cell_23.isFilled = true;

		// cell_29
		const cell_29 = this.add.ellipse(1030.497770780217, 394, 70, 70);
		cell_29.isFilled = true;

		// cell_35
		const cell_35 = this.add.ellipse(1130.453690169301, 394, 70, 70);
		cell_35.isFilled = true;

		// cell_41
		const cell_41 = this.add.ellipse(1231, 394, 70, 70);
		cell_41.isFilled = true;

		// cell_47
		const cell_47 = this.add.ellipse(1334, 394, 70, 70);
		cell_47.isFilled = true;

		// cell_6
		const cell_6 = this.add.ellipse(603, 277, 70, 70);
		cell_6.isFilled = true;

		// cell_12
		const cell_12 = this.add.ellipse(716, 277, 70, 70);
		cell_12.isFilled = true;

		// cell_18
		const cell_18 = this.add.ellipse(826, 277, 70, 70);
		cell_18.isFilled = true;

		// cell_24
		const cell_24 = this.add.ellipse(927, 277, 70, 70);
		cell_24.isFilled = true;

		// cell_30
		const cell_30 = this.add.ellipse(1031.2593721979433, 277, 70, 70);
		cell_30.isFilled = true;

		// cell_36
		const cell_36 = this.add.ellipse(1130.3154399145712, 277, 70, 70);
		cell_36.isFilled = true;

		// cell_42
		const cell_42 = this.add.ellipse(1231, 277, 70, 70);
		cell_42.isFilled = true;

		// cell_48
		const cell_48 = this.add.ellipse(1334, 277, 70, 70);
		cell_48.isFilled = true;

		this.cell_1 = cell_1;
		this.cell_7 = cell_7;
		this.cell_13 = cell_13;
		this.cell_19 = cell_19;
		this.cell_25 = cell_25;
		this.cell_31 = cell_31;
		this.cell_37 = cell_37;
		this.cell_43 = cell_43;
		this.cell_2 = cell_2;
		this.cell_8 = cell_8;
		this.cell_14 = cell_14;
		this.cell_20 = cell_20;
		this.cell_26 = cell_26;
		this.cell_32 = cell_32;
		this.cell_38 = cell_38;
		this.cell_44 = cell_44;
		this.cell_3 = cell_3;
		this.cell_9 = cell_9;
		this.cell_15 = cell_15;
		this.cell_21 = cell_21;
		this.cell_27 = cell_27;
		this.cell_33 = cell_33;
		this.cell_39 = cell_39;
		this.cell_45 = cell_45;
		this.cell_4 = cell_4;
		this.cell_10 = cell_10;
		this.cell_16 = cell_16;
		this.cell_22 = cell_22;
		this.cell_28 = cell_28;
		this.cell_34 = cell_34;
		this.cell_40 = cell_40;
		this.cell_46 = cell_46;
		this.cell_5 = cell_5;
		this.cell_11 = cell_11;
		this.cell_17 = cell_17;
		this.cell_23 = cell_23;
		this.cell_29 = cell_29;
		this.cell_35 = cell_35;
		this.cell_41 = cell_41;
		this.cell_47 = cell_47;
		this.cell_6 = cell_6;
		this.cell_12 = cell_12;
		this.cell_18 = cell_18;
		this.cell_24 = cell_24;
		this.cell_30 = cell_30;
		this.cell_36 = cell_36;
		this.cell_42 = cell_42;
		this.cell_48 = cell_48;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Ellipse} */
	cell_1;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_7;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_13;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_19;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_25;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_31;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_37;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_43;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_2;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_8;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_14;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_20;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_26;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_32;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_38;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_44;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_3;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_9;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_15;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_21;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_27;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_33;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_39;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_45;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_4;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_10;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_16;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_22;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_28;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_34;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_40;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_46;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_5;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_11;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_17;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_23;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_29;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_35;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_41;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_47;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_6;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_12;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_18;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_24;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_30;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_36;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_42;
	/** @type {Phaser.GameObjects.Ellipse} */
	cell_48;

	/* START-USER-CODE */
	matrix
	gridData = [];
	numRows = 6;
	numCols = 8;
	// Write more your code here

	create() {
		this.editorCreate();
		this.createMatrix()
	}

	createMatrix() {

		// Initialize gridData with zeros
		for (let i = 0; i < this.numRows; i++) {
			const row = [];
			for (let j = 0; j < this.numCols; j++) {
				row.push(0);
			}
			this.gridData.push(row);
		}

		// Add click event listeners to your cells (eclipses)
		for (let i = 1; i <= this.numRows * this.numCols; i++) {

			const cellName = `cell_${i}`;
			const cell = this[`cell_${i}`]; // Use square brackets to access the object property
			// console.log(cellName);

			if (cell) {
				cell.setInteractive(); // Make sure the object is interactive
				cell.on('pointerdown', () => {
					// Optionally, you can update the visual appearance of the cell here
					cell.fillColor = 0x0000FF; // For example, change the fill color to blue
					this.updateGridData(cellName);
					// console.log(i)
					// console.log(cellName)
					console.log(this.checkSequence(this.gridData));
				});
			}
		}
	}


	updateGridData(cellName) {

		const cellIndex = parseInt(cellName.split('_')[1]) - 1; // Extract the index from cell name
		const row = Math.floor(cellIndex / this.numCols);
		const col = cellIndex % this.numCols;

		if (this.gridData[row] && this.gridData[row][col] !== undefined) {
			this.gridData[row][col] = 1;
			console.log(this.gridData[row][col])
		}
	}


	checkSequence(matrix) {
		console.log("in the check sequennce")
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
		return "no sequence";
	}
	
	
	




	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
