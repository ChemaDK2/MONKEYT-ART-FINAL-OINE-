const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const menulinks = document.querySelectorAll('.nav-menu a[href^="#"]');

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("Aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

menulinks.forEach(menulink => {
	menulink.addEventListener("click", function() {
		navMenu.classList.remove("nav-menu_visible")
	})
})

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("scrolldown",window.scrollY>0);
})
