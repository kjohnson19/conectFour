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
  // splits the string into an array by spaces and 
  // splits a string into an array of substrings
  // gives back new array of words.

  var thisClass = classes[classes.length - 1];
  // returns the number of elements in an array
	var belowClasses = '';
  var placement = $(this).parent().attr('id');
  // jquery version of getelementbyid
	
	if ((placement == "one") == false){
     // this is calling the value in the placement in allRows
    //  so... if "placement (the circles) is equal 
    // to the div id of "one"  
    var below = (allRows[allRows.indexOf(placement) - 1]);

    //  returns the first index where the first time a specified 
    // value appears can be found in the array or if the
    //  -1 value is not there. 

    belowClasses = ($("#" + below + " ." + thisClass + "").attr('class'));
    // calling the "#" which is finding all the ids 
    // which are the columns.. then the below function is 
    // looking inside of that div for .hole (".") classes
    // and you have another class "a, b, c, d etc."
    //  and it looks to see which hole to go to. Lastly,
    // when you click on circle it is adding a class of
    // either "yellow" or "purple"
    console.log(belowClasses);

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
  // site source for color rotate: https://products.askupasoftware.com/color-rotator/
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
