/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


function music() {
  var song = document.getElementById("music")
  song.play(); 
}



var myVar;

function loading() {
  document.body.style.backgroundImage = "url('css/loading-pic.jpg')";
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.body.style.backgroundImage = "url('css/home-screen.jpg')";
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}