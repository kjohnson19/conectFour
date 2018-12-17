// declare all variables below

var allColumns = ['a','b','c','d','e','f','g','h'];
var allRows = ['one','two','three','four','five','six','seven',
'eight'];
var fadeTime = 300;

var player1 = 0;
var colors = ['yellow', 'purple'];

$(".place").click(function(){
	var classes = ($(this).attr('class')).split(" ");
	var thisClass = classes[classes.length - 1];
	var belowClasses = '';
	var thisId = $(this).parent().attr('id');
	
	if ((thisId == "one") == false){
		var below = (rows[rows.indexOf(thisId) - 1]);
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

$("#red").on("click", function(){
  location.reload()
})

$("#board").fadeOut(fadeTime);
$("#board").fadeIn(fadeTime);
