
// Class 
(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        
        $(".embed-responsive iframe").addClass(".embed-responsive-item");
        $("carousel-inner .item:first-child").addClass("active");
        $('[data-toggle="tooltip"]').tooltip();
        
          $(".theme-1-select").on('click', function(){
            $("body").addClass("theme-1");
            $("body").removeClass("theme-2");
        });
        $(".theme-2-select").on('click', function(){
            $("body").addClass("theme-2");
            $("body").removeClass("theme-1");
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));
