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

  const button = document.querySelector(".item");
const close = document.querySelector(".popup__close");
const popup = document.querySelector(".popup__wrapper");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});
