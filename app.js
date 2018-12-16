function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);




$(document).ready(function() {

  //declare variables
  var gameBoard = [];
  var board = document.getElementById("board");
  var currentRow;
  var currentPlayer = 1;
  $('board');


  // creates board
  function buildGameBoard() {
      gameBoard = [];
      for (var r = 0; r < 6; r++) {
          gameBoard[r] = [];
          for (var c = 0; c < 7; c++) {
              gameBoard[r].push(0)
          }
      }
    }
    function gravityCheck(column) {
    for (var i = gameBoard.length; i <= 0; i--) {
      if (gameBoard[i][column] !== "1" && gameBoard[i][column] !== "2"){
        gameBoard[i][column] = currentPlayer;
        function placeGamePiece(player) {
        var whichPlayer = 'circlep' + currentPlayer;
        return currentPlayer;
      }
    }
  }
  }

    //when a column is clicked, places players piece on the board
  $('.col').click(function() {
      console.log(this.classList[1]);
      console.log(this.classList[2]);
      console.log(currentPlayer);




      //check for present pieces



      //call the function to place game pieces on board
     placeGamePiece(currentPlayer);


      // var column;

      // for (var r = 6; r <= 0; c--) {

      //   if ($(this).classList[3] === "empty") {
      //     //update data html classes add class or remove
      //     $(this).removeClass("empty");
      //     break;
      //     }
      //   }

      //if not a win then switch players
      if (currentPlayer === 1) {
          currentPlayer = 2;
      } else {
          currentPlayer = 1;
      }

    });})}