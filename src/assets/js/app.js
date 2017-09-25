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
        $('.menu-icon').on('click', function () {
            $(this).toggleClass('menu-icon--open');

            if ($(this).hasClass('menu-icon--open')) {
                $('.menu').css('display', 'flex');
            } else {
                $('.menu').css('display', 'none');
            }
            $('#mobileMenu').toggleClass('mobileMenu--active');
        });


    })

