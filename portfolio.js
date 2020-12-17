let namePlate = document.querySelector(".name-plate");
let quoteDiv = document.querySelector("#quote-div");
let nameDiv = document.createElement("div");
nameDiv.id = "name-div";
nameDiv.innerHTML = '<p id="name">Steve Emerson</p> <p id="job">JavaScript and Python Development</p>';

setTimeout(function(){
  namePlate.removeChild(quoteDiv);
  namePlate.appendChild(nameDiv);
}, 4000);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("home").style.top = "0";
  } else {
    document.getElementById("home").style.top = "-50px";
  }
} 