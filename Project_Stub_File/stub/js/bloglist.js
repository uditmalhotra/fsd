// Get the modal
var modal1 = document.getElementsByClassName('modal')[0];

var modal2 = document.getElementsByClassName('modal')[1];

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

var link = document.getElementById('link');

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
    if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

link.onclick = function(){
    modal1.style.display = "none";
    modal2.style.display = "block";
}

function deletePost(){
		var modal = document.getElementById('myModal_3');

		var btn = document.getElementById('myBtn3');

		var span = document.getElementById("noBtn");

		  modal.style.display = "block";

		span.onclick = function() {
		  modal.style.display = "none";
		}

		window.onclick = function(event) {
		  if (event.target == modal) {
		    modal.style.display = "none";
		  }
		}
	}