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
				break;
			case "pl-b-name":
				this.players[1].name = namePlayer.value;
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
		console.log(colorBoard.id);
		console.log(colorBoard.value);
	}

	setSelectedCell(cell){
		let rw,cl;
		rw = Math.floor(cell/7);
		cl = cell%7;
		console.log("cell: ",cell," rw: ",rw," cl: ",cl);
	}
}