// smooth scrolling
$('a[href*="#"]').on("click", function(e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top - 90
    },
    500,
    "linear"
  );
});

// Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#main-nav").style.opacity = 0.9;
  } else {
    document.querySelector("#main-nav").style.opacity = 1;
  }
});
