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

 

 
  window.onload = function () {
    document.getElementById("LearnMoreBtn").onclick = function () {
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
        overlay.style.display = "block";
        popup.style.display = "block";
    };

    document.getElementById("CloseBtn").onclick = function () {
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
        overlay.style.display = "none";
        popup.style.display = "none";
    }
};

$(function() {
  var topBtn = $('#pageTop');
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
