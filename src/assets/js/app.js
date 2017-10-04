import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

//Project JS

    $(document).ready(function () {
        //Функция, которая определяет элемент в зоне видимости
        function isScrolledIntoView(elem) {
            var offset = ($(window).height() - $(elem).height() ) / 2;
            if (elem.length) {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();

                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).height();

                return ((elemBottom <= ( docViewBottom + offset )) && (elemTop >= ( docViewTop + offset )) );
            }
            return false;
        }
        $('.main-header__mobile-nav').on('click', function () {
            $('.menu-icon').toggleClass('menu-icon--open');

            // if ($('.menu-icon').hasClass('menu-icon--open')) {
            //     $('.menu-icon').css('display', 'flex');
            // } else {
            //     $('.menu-icon').css('display', 'none');
            // }
            $('#mobileMenu').toggleClass('mobileMenu--active');
        });


        $(window).scroll(function(){

        })

    });

; (function ($) {
    "use strict";
    //----------------------------------------Isotope---------------------------------------------
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });

    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
})(jQuery);

