require('mdbootstrap/js/bootstrap');
import jQuery from 'jquery';
import Waves from 'node-waves/src/js/waves';

(function ($) {
    var SCROLLING_NAVBAR_OFFSET_TOP = 50;
    $(window).on('scroll', function () {
        var $navbar = $('.navbar');

        if ($navbar.length) {
            if ($navbar.offset().top > SCROLLING_NAVBAR_OFFSET_TOP) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        }
    });
})(jQuery);

jQuery(document).ready((function () {
    Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]);
    Waves.attach(".btn-flat", ["waves-effect"]);
    Waves.attach(".chip", ["waves-effect"]);
    Waves.attach(".view a .mask", ["waves-light"]);
    Waves.attach(".waves-light", ["waves-light"]);
    Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]);
    Waves.attach(".pager li a", ["waves-light"]);
    Waves.attach(".pagination .page-item .page-link", ["waves-effect"]);
    Waves.init();
}));

require('./blocks/gallery');
require('./blocks/picture');
