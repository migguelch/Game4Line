class Board{
	constructor(){
		this.nameA  = document.getElementById("scr-pl-a-name");
		this.nameB  = document.getElementById("scr-pl-b-name");
		this.scoreA = document.getElementById("scr-pl-a");
		this.scoreB = document.getElementById("scr-pl-b");
		this.board  = document.getElementById("board");
		this.turns  = document.getElementById("inf-turn");
		this.player = document.getElementById("inf-player");

	}

	setBoardColor(color){
		this.board.style.backgroundColor = color;
	}

	setScrAName(iName){
		this.nameA.innerHTML = iName;
	}

	setScrBName(iName){
		this.nameB.innerHTML = iName;
	}

	setPlyrScore(iPlayer, iScr){
		switch(iPlayer){
			case 0:
				this.scoreA.innerHTML = iScr;
				break;
			case 1:
				this.scoreB.innerHTML = iScr;
				break;
			case 2:
				break;
			default:
				break;
		}		
	}


	setDataScore(aName, aScr, bName, bScr){
		this.nameA.innerHTML  = aName;
		this.scoreA.innerHTML = aScr;
		this.nameB.innerHTML  = bName;
		this.scoreB.innerHTML = bScr;
	}

	setCurrPlayer(iPlayer){
		this.player.innerHTML = iPlayer;
	}

	setDataInfo(iTurn, iPlayer){
		this.turns.innerHTML = iTurn;
		this.player.innerHTML = iPlayer;
	}


	printCell(rw, cl, color){
		var cell = "cell"+((7*rw)+cl);
		document.getElementById(cell).style.backgroundColor = color;
	}

	printBoard(board, PlyAColor, PlyBColor){		
		for (var r = 0; r < board.length; r++){
			for (var c = 0; c < board[0].length; c++){
				switch(board[r][c]){
					case 1:
						this.printCell(r, c, PlyAColor);
						break;
					case 2:
						this.printCell(r, c, PlyBColor);
						break;
					default:
						this.printCell(r, c, "#FFFFFF");
						break;						
				}
			}
		}
	}
}