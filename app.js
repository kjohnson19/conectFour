// declare all variables below

var allColumns = ['a','b','c','d','e','f','g','h'];
var allRows = ['one','two','three','four','five','six','seven',
'eight'];
var colors = ['yellow', 'purple'];
var fadeTime = 420;
var player1 = 0;

$(".hole").click(function(){
  // declare variables for the onclick event for playing game
	var classes = ($(this).attr('class')).split(" ");
	var thisClass = classes[classes.length - 1];
	var belowClasses = '';
	var thisId = $(this).parent().attr('id');
	
	if ((thisId == "one") == false){
		var below = (allRows[allRows.indexOf(thisId) - 1]);
		belowClasses = ($("#" + below + " ." + thisClass + "").attr('class'));
		belowClasses = belowClasses.split(" ");
		if (belowClasses.indexOf("yellow") >= 0 || belowClasses.indexOf("purple") >= 0){
			var valid = true;
		}
		else{
			valid = false;
		}
		if((thisClass == 'purple' || thisClass == 'yellow')){
			valid = false;
		}
	}
	else{
		if((thisClass == 'purple' || thisClass == 'yellow')){
			valid = false;
		}
		else{
			valid = true;
		}
	}
	if(valid){
		setTimeout(rotateColor(this), fadeTime);
		rotateRestartColor();
	}
});

function rotateColor(t){
	$(t).fadeOut(fadeTime);
	setTimeout(function(){
		$(t).addClass(""+colors[player1]+"");
		player1 == 0 ? player1 = 1 : player1 = 0;
	}, fadeTime);
	$(t).fadeIn(fadeTime);
}
// ===============restart game button jquery function below============

$("#red").on("click", function(){
  location.reload()
})

// fade in and fade out attributes for when page refreshes
$("#board").fadeOut(fadeTime);
$("#board").fadeIn(fadeTime);
