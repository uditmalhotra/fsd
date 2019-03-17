// Get the modal
var modal1 = document.getElementsByClassName('modal')[0];

var modal2 = document.getElementsByClassName('modal')[1];

var modal3 = document.getElementsByClassName('modal')[2];

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

var btn2 = document.getElementById("myBtn2");

var allPost = document.getElementById('allPost');

var createPost = document.getElementById("createPost");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

var span2 = document.getElementsByClassName("close")[1];

var span3 = document.getElementsByClassName("close")[2];

var link = document.getElementById('link');

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

createPost.onclick = function(){
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function(){
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
    if (event.target == modal2) {
    modal2.style.display = "none";
  }
    if (event.target == modal3)  {
    modal3.style.display = "none";  
    }
}

link.onclick = function(){
    modal1.style.display = "none";
    modal2.style.display = "block";
}

allPost.onclick = function(){
    window.open('html/bloglist.html');
}