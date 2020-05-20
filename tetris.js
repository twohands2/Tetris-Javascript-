
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
	var pieceNumber = Math.random() * 4;
	var piece = setPiece(Math.round(pieceNumber) + 1);//1, 2, 3, 4
}

function end(){

}

function setBoard(){
	//10x20
	var board = new Array(10);
	for(var i in board.length){
		board[i] = new Array(20);
	}
	return board;
}

function setPiece(number){
	/* shape
	1. ㅁㅁㅁㅁ
	2. ㅁㅁㅁ
		 ㅁ
	3. ㅁㅁㅁ
		  ㅁ
	4. ㅁㅁ
	   ㅁㅁ
	*/
	/* state
	1. 원래 모양
	2. 시계방향으로 90도 회전
	3. 시계방향으로 180도 회전
	4. 시계방향으로 270도 회전
	*/
	var piece = {
		shape : 0,
		state : 0,
		location : [0,0];
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

	}
	return location;
}

function turnPiece(){
	//
}

