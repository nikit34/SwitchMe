function randomColor() {
  return Math.floor(Math.random() * 255);
}

window.onload = function() {
  const bg = document.getElementById("bg");
  const navbar = document.getElementById("navbar");

  bg.addEventListener("click", () => {
    let r = randomColor()
    let g = randomColor()
    let b = randomColor()
    let a = randomColor()
    bg.style.backgroundColor =
      "rgba(" + r +
        "," + g +
        "," + b +
        "," + a + ")";
    navbar.style.backgroundColor =
      "rgba(" + (255 - r) +
        "," + (255 - g) +
        "," + (255 - b) +
        "," + (255 - a) + ")";
  });
};