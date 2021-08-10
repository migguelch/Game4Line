class App{
	constructor(game, players, board){
		this.game    = game;
		this.players = players;
		this.board   = board;
	}

	setPlyrName(namePlayer){
		
		switch(namePlayer.id){
			case "pl-a-name":
				this.players[0].name = namePlayer.value;
				this.board.setScrAName(namePlayer.value.substr(0,7).toUpperCase());
				break;
			case "pl-b-name":
				this.players[1].name = namePlayer.value;
				this.board.setScrBName(namePlayer.value.substr(0,7).toUpperCase());
				break;
			default:
				//pass
		}
		this.board.setCurrPlayer(this.players[this.game.currentPlayer].name);
	}

	 setPlyrColor(colorPicker){
	 	switch(colorPicker.id){
	 		case "pl-a-color":
	 			this.players[0].color = colorPicker.value;
        		break;
        	case "pl-b-color":
        		this.players[1].color = colorPicker.value;
        		break;
        	default:
        		//pass
	 	}

	 	this.board.printBoard(this.game.GameStatus, 
	 						  this.players[0].color, 
	 						  this.players[1].color);        
    }

	setBrdColor(colorBoard){
		this.board.setBoardColor(colorBoard.value);
	}

	rotatePlay(){
		this.game.setmove();
		this.board.setDataInfo(this.game.turns, this.players[this.game.currentPlayer].name);
	}

	startGame(){		
		this.game.startStatus();
		this.board.setDataScore(
			this.players[0].name,
			this.players[0].score,
			this.players[1].name,
			this.players[1].score);
		this.board.setDataInfo(
			this.game.turns,
			this.players[this.game.currentPlayer].name);
	}

	restarGame(){
		this.startGame();
	}

	isWinner(board){
		return Checker.isHortWin(board) || Checker.isVertWin(board) || Checker.isDiagWin(app.game.GameStatus);
	}

	setSelectedCell(cell){
		let rw,cl,drw;
		rw = Math.floor(cell/7);
		cl = cell%7;
		//console.log("cell: ",cell," rw: ",rw," cl: ",cl);

		if(this.game.isCellTaken(rw, cl)){
			alert("stat.config.takenMsg");			
		}else{
			drw = this.game.dropDown(rw,cl);
			this.game.setCell(drw, cl);
			this.board.printCell(drw, cl, this.players[this.game.currentPlayer].color);
			this.isWinner(app.game.GameStatus)
			this.rotatePlay();
		}
	}
}