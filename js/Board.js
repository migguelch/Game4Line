class Board{
	constructor(){
		this.nameA  = document.getElementById("scr-pl-a-name");
		this.nameB  = document.getElementById("scr-pl-b-name");
		this.board = document.getElementById("board");

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
}