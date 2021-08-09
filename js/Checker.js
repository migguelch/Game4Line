class Checker{

	static isHortwin(board){
		var l_return = false;
		for(var r = board.length - 1; r >= 0; r--){
			for(var c = 0; c <= board[0].length - 4; c++){

				if ((board[r][c]   !== 0 &&
			     	 board[r][c+1] !== 0 &&
			     	 board[r][c+2] !== 0 &&
			     	 board[r][c+3] !== 0) 
					&& 
					(board[r][c]   === board[r][c+1] &&
			   	 	 board[r][c+1] === board[r][c+2] &&
			   	 	 board[r][c+2] === board[r][c+3])) {l_return = true; break;}

			}
		}
		return l_return;
	}
	
}