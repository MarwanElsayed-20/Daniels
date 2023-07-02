window.addEventListener("scroll", function () {
  if (window.scrollY > 700) {
    document.getElementById("navbar").classList.remove("position-absolute");
    document.getElementById("navbar").classList.add("js-nav");
  } else {
    document.getElementById("navbar").classList.remove("js-nav");
    document.getElementById("navbar").classList.add("position-absolute");
  }
});
