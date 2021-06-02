let namePlate = document.querySelector(".name-plate");
let splashColor = document.querySelector("#splash-color");

let quoteDiv = document.createElement("div");
quoteDiv.id = "quote-div";
quoteDiv.innerHTML = '<p class="quote">"Not all those who wander are lost."</p><p class="quote" id="attribution">JRR Tolkien</p>'

let nameDiv = document.createElement("div");
nameDiv.id = "name-div";
nameDiv.innerHTML = 
  '<p id="name">Steve Emerson</p>'

let jobDiv = document.createElement("div");
jobDiv.id = "job-div";
jobDiv.innerHTML = '<p id="job">Full Stack Web Development</p>';

nameDiv.appendChild(jobDiv);

let iconDiv = document.createElement("div");
iconDiv.id = "icon-links";
iconDiv.innerHTML = 
'<a href="http://www.linkedin.com/in/sbemerson" target="_blank" class="fa fa-linkedin"></a>' + 
'<a href="https://github.com/SteveEmerson" target="_blank" class="fa fa-github"></a>' +
'<a href="./assets/SEmersonResume.pdf" download="SteveEmerson" class="fa fa-file-text" target="_blank"></a>'

let navDiv = document.createElement("div");
navDiv.className = "nav-links";
navDiv.innerHTML = 
'<a class="navbar-link" href="#about-me"><span class="nav-icon"><i class="fas fa-address-card"></i></span><span class="nav-label">About Me</span></a>' +
'<a class="navbar-link" href="#projects"><span class="nav-icon"><i class="fas fa-project-diagram"></i></span><span class="nav-label">Projects</span></a>' +
'<a class="navbar-link" href="#contact"><span class="nav-icon"><i class="fas fa-envelope"></i></span><span class="nav-label">Contact</span></a>';
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("home").style.top = "0";
//   } else {
//     document.getElementById("home").style.top = "-50px";
//   }
// } 


window.onload = function(){

  setTimeout(function(){
    namePlate.appendChild(quoteDiv);
  }, 1000);

  setTimeout(function(){
    namePlate.removeChild(quoteDiv);
    namePlate.appendChild(nameDiv);
  }, 6000);

  setTimeout(function(){
    jobDiv.appendChild(iconDiv);
    splashColor.appendChild(navDiv);
  }, 9500)
  
}