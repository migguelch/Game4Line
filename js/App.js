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
    }

	setBrdColor(colorBoard){
		this.board.setBoardColor(colorBoard.value);
	}

	startGame(){
		console.log("Restar Game !!!");
		this.game.startStatus();
	}

	restarGame(){
		this.startGame();
	}

	setSelectedCell(cell){
		let rw,cl;
		rw = Math.floor(cell/7);
		cl = cell%7;
		console.log("cell: ",cell," rw: ",rw," cl: ",cl);
	}
}