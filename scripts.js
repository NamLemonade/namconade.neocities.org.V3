AOS.init();

$(function() {
    /*Ajoute une classe "active" au header quand le dÃ©filement arrive Ã  un certain point*/
    var scrollObjectif = 50;
    $(window).on("load", function () {
    $("header").toggleClass("active", $(this).scrollTop() > scrollObjectif);
    });
    $(window).on("scroll", function () {
    $("header").toggleClass("active", $(this).scrollTop() > scrollObjectif);
    });
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});