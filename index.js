var vid= document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

btn.addEventListener('click',myFunction)

function myFunction() {
  if (vid.paused) {
    vid.play();
    btn.innerHTML = "Pause";
  } else {
    vid.pause();
    btn.innerHTML = "Play";
  }
}