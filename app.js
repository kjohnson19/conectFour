// declare all variables below

var allColumns = ['a','b','c','d','e','f','g','h'];
var allRows = ['one','two','three','four','five','six','seven',
'eight'];
var colors = ['sun', 'moon'];
var fadeTime = 420;
var player1 = 0;

$(".hole").click(function(){
  // declare variables for the onclick event for playing game
  var classes = ($(this).attr('class')).split(" ");
  // everything that is .hole is going to check the 2 classes and put into a list
  // splits the string into an array by spaces and 
  // splits a string into an array of substrings
  // gives back new array of words.
  // if they have all the same class, then checks everything
  //  in the same column and get select "A" until the parent a is selected 
  // or what is directly below that

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
    // either "sun(sun)" or "moon(moon)"
    // console.log(belowClasses);

    belowClasses = belowClasses.split(" ");
    // belowClasses is turned into an array with a space as the separator
		if (belowClasses.indexOf("sun") >= 0 || belowClasses.indexOf("moon") >= 0){
			var token = true;
    }
    // declare variable and assigned it to the value of true
		else{
			token = false;
		}
		if((thisClass == 'moon' || thisClass == 'sun')){
      // if thisClass is equal to 'moon' which is the blue coins OR thisClass is equal to 
      // "sun which is the yellow coins"
			token = false;
		}
  }
	else{
		if((thisClass == 'moon' || thisClass == 'sun')){
			token = false;
		}
		else{
			token = true;
		}
  }
  // if something is below it will place a coin above
  // if it is empty then it places a coin in that space 
  // if one of the other is not met then do not allow the space to be filled
	if(token){
  // site source for color rotate: https://products.askupasoftware.com/color-rotator/
    setTimeout(rotateColor(this), fadeTime);
    // this is whatever we are calling inside of.
    rotateRestartColor();
    // this is setting up the color change event that happens 
    // when players switch turns
	}
});

function rotateColor(k){
	$(k).fadeOut(fadeTime);
	setTimeout(function(){
    $(k).addClass(""+colors[player1]+"");
    // 
		player1 == 0 ? player1 = 1 : player1 = 0;
	}, fadeTime);
	$(k).fadeIn(fadeTime);
}
// ===============restart game button jquery function below============

$("#red").on("click", function(){
  location.reload()
})

// fade in and fade out attributes for when page refreshes
$("#board").fadeOut(fadeTime);
$("#board").fadeIn(fadeTime);
