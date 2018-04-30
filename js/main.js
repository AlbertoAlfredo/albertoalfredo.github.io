
$( document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1) {
            $('#nav-stick').addClass('sticky');
            $('.navbar-brand').removeClass('logo-padding');
            $('ul.nav li').addClass('zero-padding');
        } else {
            $('#nav-stick').removeClass('sticky');
            $('.navbar-brand').addClass('logo-padding');
            $('ul.nav li').removeClass('zero-padding');
        }
    });

    new WOW().init();
});