// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  /*
  var i=1;
  function newElement() {
      var x = document.getElementById("myInput").value;
      if(x==="") {
        alert("You must write something!");
      } else{
        document.getElementById("myUL").innerHTML +="<li>"+x+"</li>";
        i++;
      }
  */
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  //cookie to store the no. of clicks of button
  var cookie = document.cookie;
    if(cookie!= null && cookie!=undefined){
      if(cookie.length>0){
        var cookies = cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) =>({ ...accumulator, [key.trim()]: decodeURIComponent(value) }),{});
        var seenCount= cookies.click;

        //Not first time click!!
        seenCount++;
        //Then save the cookie again
        document.cookie = "click="+seenCount+";";
      }
    }
    else{
    //Treat as first time visit
      document.cookie = "click=1;";
    }
    document.getElementsById("clicks").innerHTML = "button clicked "+seenCount+" times."
    //alert("button clicked "+seenCount+" times.");
}
