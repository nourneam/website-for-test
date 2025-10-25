const navLinks = document.querySelectorAll("#navbarSupportedContent .nav-link");
const menuCollapse = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(menuCollapse, {
  toggle: false,
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    bsCollapse.hide();
  });
});

const darkModeToggle = document.getElementById("darkMode");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const navbarCollapse = document.querySelector(".navbar-collapse");
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false,
  });
  bsCollapse.hide();
});

// button to Top
let elementTop = $("#about").offset().top;
$(window).scroll(function () {
  let windowScroll = $(window).scrollTop();
  if (windowScroll > elementTop - 200) {
    $("#btnTop").fadeIn(500);
  } else {
    $("#btnTop").fadeOut(500);
  }
});

$("#btnTop").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 500);
});

// loadingPage
$(document).ready(function () {
  $("#loading i").fadeOut(500, function () {
    $("#loading").fadeOut(250, function () {
      $("body").css("overflow", "auto");
      $("#loading").remove();
    });
  });
});

// side bar
let coloriconLeft = $("#ColorBoxId").outerWidth();
$(".color-icon").click(function () {
  $(".color-box").toggle(500);
});

$("#ColorBoxId .color-box span").click(function (e) {
  let targeticon = e.target;
  let bgColorSpan = $(targeticon).css("backgroundColor");
  $("body").css({ backgroundColor: bgColorSpan });
});

// dark Mode button
$("#darkMode").click(function () {
  $("body").toggleClass("dark");

  if ($("body").hasClass("dark")) {
    $("body").css({ backgroundColor: "#0b0f14", color: "#e6eef8" }); // darkMode enable
  } else {
    $("body").css({ backgroundColor: "#ffffff", color: "#111111" });
  }
});
