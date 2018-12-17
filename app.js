var columns = ['a','b','c','d','e','f','g','h'];
var rows = ['one','two','three','four','five','six','seven',
'eight'];
var fadeTime = 300;

var player = 0;
var colors = ['red', 'black'];

$(".place").click(function(){
	var classes = ($(this).attr('class')).split(" ");
	var thisClass = classes[classes.length - 1];
	var belowClasses = '';
	var thisId = $(this).parent().attr('id');
	
	if ((thisId == "one") == false){
		var below = (rows[rows.indexOf(thisId) - 1]);
		belowClasses = ($("#" + below + " ." + thisClass + "").attr('class'));
		belowClasses = belowClasses.split(" ");
		if (belowClasses.indexOf("red") >= 0 || belowClasses.indexOf("black") >= 0){
			var valid = true;
		}
		else{
			valid = false;
		}
		if((thisClass == 'black' || thisClass == 'red')){
			valid = false;
		}
	}
	else{
		if((thisClass == 'black' || thisClass == 'red')){
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
		$(t).addClass(""+colors[player]+"");
		player == 0 ? player = 1 : player = 0;
	}, fadeTime);
	$(t).fadeIn(fadeTime);
}

function rotateRestartColor(){
	if ($("#restart").attr("class") == 'red'){
		setTimeout(function(){
			$("#restart").removeClass("red");
		}, fadeTime);
		$("#restart").fadeOut(fadeTime);
		setTimeout(function(){
			$("#restart").addClass("black");
		}, fadeTime);
		$("#restart").fadeIn(fadeTime);
		
	}
	else if($("#restart").attr("class") == 'black'){
		setTimeout(function(){
			$("#restart").removeClass("black");
		}, fadeTime);
		$("#restart").fadeOut(fadeTime);
		setTimeout(function(){
			$("#restart").addClass("red");
		}, fadeTime);
		$("#restart").fadeIn(fadeTime);
	}
}

$("#restart").click(function(){
	setTimeout(function(){
		$(".place").removeClass("red black");
	}, fadeTime);
	$("#board").fadeOut(fadeTime);
	$("#board").fadeIn(fadeTime);
});