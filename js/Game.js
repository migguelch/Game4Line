class Game{
	constructor(){
		this.currentPlayer = 0;
		this.turns = 0;
		this.GameStatus = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
	}

	startStatus(){
		this.turns = 1;
		this.currentPlayer = Math.floor(Math.random()*100)%2;
		this.GameStatus    = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
	}

	setmove(){
		this.turns++;
		this.currentPlayer =(++this.currentPlayer)%2
	}
}