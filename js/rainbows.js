var keysPressed = [];
konamiCode = "38,38,40,40,37,39,37,39,66,65";

var animationRunning = false;
var content = '<img id="bigRainbow" style="display: none" src="img/rainbow.gif" />';

//Add rainbow to page only if it does not already exist
if($('#bigRainbow').size() == 0){
	$('body').append(content);
}

$(window).bind('keydown', function(e){
	if(animationRunning == false){
		keysPressed.push(e.keyCode);
		
		//if size > 11, trim to 10 most recent key entries
		if(keysPressed.length > 10){
			//remove first
			keysPressed.splice(0,1);
		}
		
		if(keysPressed.toString().indexOf(konamiCode) >= 0){
			start();
		}
	}
});

//Show unicorns
var rainbow;
var rHeight;
var windowWidth;
var windowHeight

function start(){
	animationRunning = true;
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	//Set rainbow size and css as window size may have changed
	rainbow = $("#bigRainbow").attr('width',windowWidth / 1.2);
	rHeight = rainbow.height();
	var rWidth = rainbow.width();
	
	rainbow.css({
		"position":"fixed",
		"bottom":  "-"+rHeight+"px", 
		"left" : (windowWidth / 2) - (rWidth / 2), 
		"display" : "block",
		opacity: 0.0
	})	
					
	//Raise the rainbow!!!
	rainbow.animate({
		bottom: "0px",
		opacity: 1.0
	}, 1800);
}