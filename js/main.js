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
  const allH1 = document.getElementsByClassName("section-title");

  if (aspectRatio < 0.9) {
    var bigTitleFontSize = "200%";
    var smallTextFontSize = "0.9rem";
  } else if (aspectRatio >= 0.9 && aspectRatio < 1.3) {
    var bigTitleFontSize = "300%";
    var smallTextFontSize = "1.25rem";
  } else {
    var bigTitleFontSize = "400%";
    var smallTextFontSize = "1.5rem";
  }
  bigTitle.style.fontSize = bigTitleFontSize;
  for (let el of allTexts) {
    el.style.fontSize = smallTextFontSize;
  }
  for (let el of allH1) {
    el.style.fontSize = bigTitleFontSize;
  }
}

window.onload = () => {
  resizeTexts();
};
