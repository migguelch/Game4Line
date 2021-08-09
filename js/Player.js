class Player {
	constructor(iname, icolor){
		this.name  = iname;
		this.color = icolor;
		this.score = 0;
	}

	addScore(){
		this.score++;
	}
}