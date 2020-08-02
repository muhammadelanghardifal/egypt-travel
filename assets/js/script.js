// NAVBAR
// auto hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.cssText = "display:0;transition:ease-in-out 1s";
    } else {
        document.getElementById("navbar").style.top = "-500px";
    }
    prevScrollpos = currentScrollPos;
}

// page scroll smooth
$('.page-scroll').on('click', function(e){

  var href = $(this).attr('href');

  var elemenHref = $(href);

$('html,body').animate({
  scrollTop: elemenHref.offset().top - 50
}, 1800, 'easeInOutExpo');

  e.preventDefault();

});

// /NAVBAR 