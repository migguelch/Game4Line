class Checker{

	static isHortWin(board){
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

	static isVertWin(board){
		var l_return = false;
		for(var c = 0; c < board[0].length; c++){
			for(var r = board.length - 1; r > 2; r--){

				if ((board[r][c]   !== 0 &&
			 		 board[r-1][c] !== 0 &&
			 		 board[r-2][c] !== 0 &&
			 		 board[r-3][c] !== 0 ) 
					 && 
					(board[r][c]   === board[r-1][c] &&
			 		 board[r-1][c] === board[r-2][c] &&
			 	     board[r-2][c] === board[r-3][c])) {l_return = true; break;}
			}
		}
		return l_return;
	}

	static isDiagWin(board){
		var l_return = false;

		for (var r = board.length - 1; r>= board.length - 1 - 2; r--){
			for (var c = board[0].length - 1; c >= board[0].length - 1 - 3; c--){
				if((board[r][c] !== 0 &&
					board[r-1][c-1] !== 0 &&
					board[r-2][c-2] !== 0 &&
					board[r-2][c-3] !== 0 )
					&&
			   		(board[r][c] === board[r-1][c-1]     &&
			   		 board[r-1][c-1] === board[r-2][c-2] &&
			   		 board[r-2][c-2] === board[r-3][c-3] )){l_return = true; break;}

				if((board[r-3][c] !== 0   &&
					board[r-2][c-1] !== 0 &&
					board[r-1][c-2] !== 0 &&
					board[r-0][c-3] !== 0 )
					&&
			   	   (board[r-3][c] === board[r-2][c-1]   &&
			   		board[r-2][c-1] === board[r-1][c-2] &&
			   		board[r-1][c-2] === board[r][c-3] )){l_return = true; break;}
				}
			}
		return l_return;
	}
	
}