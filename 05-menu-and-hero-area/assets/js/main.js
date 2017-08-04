
// Class 
(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        
        $(".case-study-carousel").owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			dots: true,
			nav: false,
			
			
		});
        $(".logo-carousel").owlCarousel({
			items: 6,
			margin: 10,
			loop: true,
			dots: false,
			nav: false,
			
			
		});
		
        $(".testimonial-study-carousel").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
		
			
		});
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));
