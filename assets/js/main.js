

    // Menu settings
//$('#menuToggle, .menu-close').on('click', function(){
//    $('#menuToggle').toggleClass('active');
//    $('body').toggleClass('body-push-toleft');
//    $('#theMenu').toggleClass('menu-open');
//});

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


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-77126871-1', 'auto');
ga('send', 'pageview');


( function( $ ) {

	$.fn.hoverfold = function( args ) {

		this.each( function() {

			$( this ).children( '.view' ).each( function() {

				var $item 	= $( this ),
					img		= $item.children( 'img' ).attr( 'src' ),
					struct	= '<div class="slice s1">';
				struct	+='<div class="slice s2">';
				struct	+='<div class="slice s3">';
				struct	+='<div class="slice s4">';
				struct	+='<div class="slice s5">';
				struct	+='</div>';
				struct	+='</div>';
				struct	+='</div>';
				struct	+='</div>';
				struct	+='</div>';

				var $struct = $( struct );

				$item.find( 'img' ).remove().end().append( $struct ).find( 'div.slice' ).css( 'background-image', 'url(' + img + ')' ).prepend( $( '<span class="overlay" ></span>' ) );

			} );

		});

	};

} )( jQuery );/**
 * Created by Mad Martigan on 5/2/2016.
 */



	$(document).ready(function(){
	$( '#grid' ).hoverfold();
})


