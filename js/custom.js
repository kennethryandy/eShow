const navBar = document.querySelector("nav");
$(".owl-carousel").owlCarousel({
  items: 1,
  smartSpeed: 1500,
  autoplayTimeout: 7000,
  thumbsPrerendered: true,
  autoplayHoverPause: true,
  autoplay: true,
  loop: true,
});
window.addEventListener("scroll", (e) => {
  const scroll = window.scrollY;
  if (scroll >= 100) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
});
