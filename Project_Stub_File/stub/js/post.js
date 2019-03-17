var flag = 0;

function save(){
   if(flag===0){
       document.getElementById("editBtn").innerHTML = "Save <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>";
       flag=1;
        const para = document.getElementById("blogBody");
        para.contentEditable = "true";
        para.style.border="1px solid"
    }
    else{
        document.getElementById("editBtn").innerHTML = "Edit <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>";
        flag=0;
        const para = document.getElementById("blogBody");
        para.contentEditable = "false";
        para.style.border="none";
    }
}
var button = document.getElementById("likeBlog");
var counter = document.getElementById("likeCount");
var word = document.getElementById("likeWord");
  count = 0;
button.onclick = function() {
  count += 1;
  if(count <= 1){
    counter.innerHTML = "1 person likes this!";
    }else{
    counter.innerHTML = count + " people have liked this!";
    }
    word.innerHTML= "Liked!";
};
function addComments(id){
		var node = document.createElement('p');
		node.setAttribute('class','commentValue');
        var addEventName = id.value +'<br>';
        node.innerHTML = addEventName;
        var a = document.getElementById('userComments');
        document.getElementById('addEventNames').appendChild(node);         
        a.value=a.defaultValue;
    }