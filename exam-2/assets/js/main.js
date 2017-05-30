
// Class 
(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        
        $(".video-play-btn").magnificPopup({
			type: 'video',
		});
        
        $(".testimonial-area").owlCarousel({
			items: 1,
			nav: false,
			dots: true,
			loop: true,
			autoplay: false,
		});

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));
