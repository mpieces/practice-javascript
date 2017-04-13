// $( "#target" ).mousemove(function( event ) {
//   var msg = "Handler for .mousemove() called at ";
//   msg += event.pageX + ", " + event.pageY;
//   $( "#log" ).append( "<div>" + msg + "</div>" );
// });

// THIS JUST PRINTS OUT THE COORDS:

// $("div").mousemove(function(event) {

//   var clientCoords = event.clientX;

//   $("span").text("event.clientX : " + clientCoords );
// })

//THE FOLLOWING SORT OF WORKS:

// if (clientCoords <= 75) {
//   $('#image1').removeClass("hidden");

//  if (clientCoords > 76 && clientCoords < 150) {
//   $('#image1').addClass("hidden");
//   $('#image2').removeClass("hidden");
// } else if (clientCoords > 151 && clientCoords < 225) {
//   $('#image2').addClass("hidden");
//   $('#image3').removeClass("hidden");
// } else if (clientCoords > 226 && clientCoords <= 300) {
//   $('#image3').addClass("hidden");
//   $('#image4').removeClass("hidden");
// }
// })


//I WASN'T SURE WHAT THIS VALUE SHOULD BE.

// var show = document.getElementbyId("#image1").value;

// switch(show) {
//   case (clientCoords > 76 && clientCoords < 150)
//   $('#image1').addClass("hidden");
//   $('#image2').removeClass("hidden");
//   break;
//   case (clientCoords > 151 && clientCoords < 225)
//   $('#image2').addClass("hidden");
//   $('#image3').removeClass("hidden");
//   break;
//   case (clientCoords > 226 && clientCoords <= 300)
//   $('#image3').addClass("hidden");
//   $('#image4').removeClass("hidden");
//   break;
//   default: #image1.show;
// }

// })

//THIS IS MY ATTEMPT TO MAKE MY OWN VERSION OF THAT ARTICLE "ROTATING HEAD":

$(window).mousemove(getMousePosition);

var mouseX;
var mouseY;
var imageTop;
var imageLeft;
var imageBottom;
var imageRight;
// var imageRight;

$(window).on("load", init);

function init() {
  mouseX = 0;
  mouseY = 0;
// Returns an objects top and left position relative to the document. Save the returned values in a variable.
    imageTop = $(".bowl").offset().top;
    imageLeft = $(".bowl").offset().left;
    imageBottom = imageTop + $(".bowl").height();
    imageRight = imageLeft + $(".bowl").width();
    // imageRight = imageLeft + $(".bowl").width();
}

function getMousePosition(event) {
  mouseX = event.pageX;
  mouseY = event.pageY

   $("span").text("event.mouseX : " + mouseX + " " + "event.mouseY : " + mouseY);


   $(".bowl").css("z-index","0");

if(mouseX >imageLeft && mouseX <imageRight && mouseY <imageTop){

    $(".middle").css("z-index","1");

} else if(mouseX <imageLeft && mouseY <imageTop){

    $(".left").css("z-index","1");

} else if(mouseX <imageLeft && mouseY >imageTop && mouseY <imageBottom){

    $(".left").css("z-index","1");

} else if(mouseX <imageLeft && mouseY >imageBottom){

    $(".left").css("z-index","1");

} else if(mouseX >imageLeft && mouseX <imageRight && mouseY >imageBottom){

    $(".middle").css("z-index","1");

} else if(mouseX >imageRight && mouseY >imageBottom){

    $(".right").css("z-index","1");

} else if(mouseX >imageRight && mouseY >imageTop && mouseY <imageBottom){

    $(".right").css("z-index","1");

} else if(mouseX >imageRight && mouseY <imageTop){

    $(".right").css("z-index","1");

} else{

    $(".front").css("z-index","1");

}
}


//   $(".bowl").css("z-index", "0");
//   if (mouseX < imageMiddle && mouseX < imageRight) {
//     $(".left").css("z-index", "1");
//   } else if (mouseX > imageLeft && mouseX < imageRight) {
//     $(".middle").css("z-index", "1");
//   } else if (mouseX > imageLeft && mouseX > imageMiddle) {
//     $(".right").css("z-index","1");
//   } else {
//     $(".front").css("z-index","1");
//   }
// }