$(document).ready(function () {
    $(".menu").click(function () {
      $(".essay").addClass("slide");
      $(".close").addClass("show");
    });
  
    $(".close").click(function () {
      $(".essay").removeClass("slide");
      $(".close").removeClass("show");
    });
  });

 

window.onload = function() {
  document.getElementById("LearnMoreBtn").onclick = function(){
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
        overlay.style.display = "block";
        popup.style.display = "block";
    };

  document.getElementById("CloseBtn").onclick = function(){
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
        overlay.style.display = "none";
        popup.style.display = "none";      
  }
};

let heading = document.querySelector("h1");

let subHeading = document.querySelector("h4");

let sun = document.querySelector("#sun");

let moon = document.querySelector("#moon");

let footer = document.querySelector("footer");

sun.onclick = function(){

  sun.style.animation = "sink 5s";

  setTimeout(function(){

  sun.style.display = "none";

  heading.innerHTML = "Night";

  subHeading.innerHTML = "Click on the Moon to change to Day";

  footer.style.backgroundColor = "#043d47";

  heading.style.color = "#fff";

  subHeading.style.color = "#fff";

  sun.style.animation = "revolve 10s infinite";

  setTimeout(function(){

  moon.style.display = "inline";

  moon.style.animation = "rise 5s";

  setTimeout(function(){

  moon.style.animation = "revolve 10s infinite";

  }, 5000);

  },1000);

  }, 4000); 

} 

moon.onclick = function(){

  moon.style.animation = "sink 5s";

  setTimeout(function(){

  moon.style.display = "none";

  heading.innerHTML = "Day";

  subHeading.innerHTML = "Click on the Sun to switch to Night";

  footer.style.backgroundColor = "#ebc034";

  heading.style.color = "#D95919";

  subHeading.style.color = "#D95919";

  moon.style.animation = "revolve 10s infinite";

  setTimeout(function(){

  sun.style.display = "inline";

  sun.style.animation = "rise 5s";

  setTimeout(function(){

  sun.style.animation = "revolve 10s infinite";

  }, 5000);

  },1000);

  }, 4000);

}