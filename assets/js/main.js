

    // Menu settings
$('#menuToggle, .menu-close').on('click', function(){
    $('#menuToggle').toggleClass('active');
    $('body').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
});

var screenWidth = 500;

var cloudArray = [];

new CloudObject(cloudArray, "cloud1", -125, -300, .7);
new CloudObject(cloudArray, "cloud2", 0, -200, .8, .2);
new CloudObject(cloudArray, "cloud3", 0, 100, -.5, .6);
new CloudObject(cloudArray, "cloud4", -355, 10, .7, .01);
new CloudObject(cloudArray, "cloud5", 0, -200, .8, .2);
new CloudObject(cloudArray, "cloud6", 0, 100, -.5, .6);
startParallaxPosition(cloudArray);

window.onscroll = function(e){ scrollEvent(e); };
var cloudFlag = true;
function scrollEvent(e){
	//console.log(pageYOffset);
	if(pageYOffset < 1900 && cloudFlag){
		scrollCloud()
	}
	if(pageYOffset > 1900){
		//cloudFlag = false;
	}
}

function scrollCloud(){
	for (var i = 0; i < cloudArray.length; i++) {
		//parallaxArray[i].id.style.left = (-1 * .5 * pageYOffset) + "px";
		var newX = cloudArray[i].speedX * (0.5 * screenWidth - pageYOffset) + cloudArray[i].x;
		$(cloudArray[i].id).css("left", newX + "px");
	}
}

function CloudObject(array, id, x, y, sX, sY){
	this.id = "#" + id;// document.getElementById(id);
	this.x = x;
	this.y = y;
	this.speedX = sX;
	this.speedY = sY || 0;
	array.push(this);
}

function startParallaxPosition(array){
	for (var i = 0; i < array.length; i++){
		$(array[i].id).css("left", array[i].x + "px");
		$(array[i].id).css("top", array[i].y + "px");
	}
}

var ref = new Firebase("https://nealcloud.firebaseio.com/address");

ref.once("value", function(snap) {
    console.log("snap", snap.val());
    var email = "cloud@gmail.com";
    var number = -2505;
    $("#phone").text(snap.val().number);
    $("#email").text(snap.val().email);
    $("#phone2").text(number);
    $("#email2").text(email);
},
function(error){
    console.log(error);
});




