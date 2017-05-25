
// Class 
(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        
        
        
        $(".homepage-slide").owlCarousel({
			items: 1,
			dots: true,
			nav: true,
			loop: true,
			aotoplay: false,
			navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			animateOut: 'fadeOut'
		
			
		});

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));
