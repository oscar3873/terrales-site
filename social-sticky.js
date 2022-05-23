// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var headerSocial = document.getElementsByClassName("header-social");

// Get the offset position of the navbar
var sticky = headerSocial[0].offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        headerSocial[0].classList.add("sticky")
    } else {
        headerSocial[0].classList.remove("sticky");
    }
}