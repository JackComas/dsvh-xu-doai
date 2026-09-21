window.addEventListener("resize", (e) => {
  e.preventDefault();
  resizeTexts();
});

function resizeTexts() {
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  var aspectRatio = viewportWidth / viewportHeight;

  const bigTitle = document.getElementById("big-title");
  const allTexts = document.getElementsByClassName("text");
  console.log(allTexts);

  if (aspectRatio < 0.9) {
    bigTitle.style.fontSize = "200%";
  } else if (aspectRatio >= 0.9 && aspectRatio < 1.2) {
    bigTitle.style.fontSize = "300%";
  } else {
    bigTitle.style.fontSize = "400%";
  }
}

window.onload = () => {
  resizeTexts();
};
