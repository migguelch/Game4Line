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

	setCell(rw,cl){
		this.GameStatus[rw][cl] = this.currentPlayer + 1;
	}

	isCellTaken(rw, cl){
		return this.GameStatus[rw][cl] !== 0;
	}

	dropDown(rw, cl){
		let l_rw = rw;
		for( var y = this.GameStatus.length - 1; y > rw; y--){
			if (!this.isCellTaken(y,cl)){
				l_rw = y;
				break;
			}
		}
		return l_rw;
	}
}