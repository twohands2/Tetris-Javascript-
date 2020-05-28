
document.addEventListener('keyDown', keyDownHandler, false);
document.addEventListener('DOMContentLoaded', function(){
	init();
});

function keyDownHandler(e){
	//keycode(38:up, 40:down, 37:left, 39:right, 32:space)
	if(e.keyCode == 32){
		//space
		movePiece(0);
	} else if(e.keyCode == 37){
		//left
		movePiece(2);
	} else if(e.keyCode == 38){
		//up
		turnPiece();
	} else if(e.keyCode == 39){
		//right
		movePiece(3);
	} else if(e.keyCode == 40){
		//down
		movePiece(1);
	}
}

function init(){
	var board = setBoard();
	start(board);
}

function start(board){
	var pieceNumber = Math.random() * 7;
	var piece = setPiece(Math.round(pieceNumber) + 1);//1, 2, 3, 4, 5, 6, 7
}

function end(){

}

function setBoard(){
	/* board(10x20)
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
	*/

	var board = new Array(10);
	for(var i in board.length){
		board[i] = new Array(20);
	}
	return board;
}

function setPiece(number){
	/* shape
	1. ㅁㅁㅁㅁ

	2. 	ㅁ
		ㅁㅁ
		ㅁ

	3.	ㅁㅁ
		ㅁ
		ㅁ

	4. ㅁㅁ
		 ㅁ
		 ㅁ

	5.  ㅁ
		ㅁㅁ
		  ㅁ

	6.	  ㅁ
		ㅁㅁ
		ㅁ

	7. ㅁㅁ
	   ㅁㅁ
	*/

	var piece = {
		one 	: { [3,0], [4,0], [5,0], [6,0] },
		two 	: { [4,0], [4,1], [4,2], [5,1] },
		three 	: { [4,0], [4,1], [4,2], [5,0] },
		four 	: { [4,0], [5,0], [5,1], [5,2] },
		five 	: { [4,0], [4,1], [5,0], [5,1] },
		six 	: { [4,1], [4,2], [5,0], [5,1] },
		seven 	: { [4,0], [4,1], [5,0], [5,1] }
	}
	return '';
}

function movePiece(pointer){
	//예외처리

	var location = new Array();
	if(pointer == 1){//down
		this.location[0] - 1;

	} else if(pointer == 2){//left
		this.location[1] - 1;

	} else if(pointer == 3){//right
		this.location[1] + 1;

	} else if(pointer == 0){//space
		setScore();
	}
	return location;
}

function turnPiece(){
	//
}

function setScore(){

}