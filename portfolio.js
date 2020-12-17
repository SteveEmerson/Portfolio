let namePlate = document.querySelector(".name-plate");
let quoteDiv = document.createElement("div");
quoteDiv.id = "quote-div";
quoteDiv.innerHTML = '<p class="quote">"Not all those who wander are lost."</p><p class="quote" id="attribution">JRR Tolkien</p>'
let nameDiv = document.createElement("div");
nameDiv.id = "name-div";
nameDiv.innerHTML = '<p id="name">Steve Emerson</p> <p id="job">JavaScript and Python Development</p>';



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("home").style.top = "0";
  } else {
    document.getElementById("home").style.top = "-50px";
  }
} 


window.onload = function(){

  setTimeout(function(){
    namePlate.appendChild(quoteDiv);
  }, 1000);

  setTimeout(function(){
    namePlate.removeChild(quoteDiv);
    namePlate.appendChild(nameDiv);
  }, 6000);
  
}