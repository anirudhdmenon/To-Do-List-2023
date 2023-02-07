var cookie = document.cookie;
  if(cookie!= null && cookie!=undefined){
    if(cookie.length>0){
      var cookies = cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) =>({ ...accumulator, [key.trim()]: decodeURIComponent(value) }),{});
      var seenCount= cookies.visit;
      //Not first time visit!!
      seenCount++;
      //Then save the cookie again
      document.cookie = "visit="+seenCount+";";
    }
  }
  else{
    //Treat as first time visit
    document.cookie = "visit=1;";
  }
  document.cookie = "click=0;";
  //document.getElementsByClassName('demo').innerHTML='Visitinf for'+seenCount+'time';
  //document.getElementById("visitno").innerHTML = "visited website "+seenCount+" times."

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
//document.getElementById("clicks").innerHTML = "button clicked "+seenCount+" times."
//alert("button clicked "+seenCount+" times.");