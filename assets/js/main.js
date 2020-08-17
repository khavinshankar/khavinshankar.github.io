 //loader
 const preloader = document.getElementById('loader');
 const header = document.getElementById("home-top");
 window.addEventListener("load", () => {
   preloader.style.display = "none";
   header.style.visibility = "visible";
 })


// for smooth scrolling
$(function () {
  $(".nav-list li a, .js-connect").click(function (e) {
    e.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      750
    );
  });
});

// header
$("#home-top").headroom(),
  $("img.lazy").lazyload({ effect: "fadeIn" }),
  $("a.new-window, .footer-list a").click(function () {
    return ($(this).target = "_blank"), window.open($(this).prop("href")), !1;
  }),
  $("#notes a").click(function () {
    return ($(this).target = "_blank"), window.open($(this).prop("href")), !1;
  }),
  $("a.email-lnk").each(function () {
    var o = $(this),
      t = o.attr("href").split("||");
    o.attr("href", "mailto:" + t[1] + t[0]);
  }),
  $(window).scroll(function () {
    var o = $(window).scrollTop();
    o >= 5
      ? $("header").removeClass("nav-root")
      : 6 >= o && $("header").addClass("nav-root");
  });
