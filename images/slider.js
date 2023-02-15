var current = document.getElementById("current");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var slides = document.getElementsByClassName("slide");
var i = 0;

prevBtn.onclick = function() {
  slides[i].id = "";
  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  slides[i].id = "current";
}

nextBtn.onclick = function() {
  slides[i].id = "";
  i++;
  if (i >= slides.length) {
    i = 0;
  }
  slides[i].id = "current";
}

setInterval(function() {
  nextBtn.onclick();
}, 10000);
