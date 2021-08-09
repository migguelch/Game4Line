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


	printCell(cell, color){
		document.getElementById("cell"+cell).style.backgroundColor = color;
	}
}