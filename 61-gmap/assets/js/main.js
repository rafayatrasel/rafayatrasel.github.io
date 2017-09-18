(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
		
    var center = [23.7983774, 90.3669595];
    $('.map')
      .gmap3({
        center: center,
        zoom: 18,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .marker({
        position: center,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })
		.overlay({
        position: center,
        content:  '<div style="color:#000000; border:1px solid #FF0000;background-color: none; width:200px; line-height:20px; height: 20px; text-align:center">' +
          'Hello From Dhaka !' +
        '</div>',
        x:12,
        y:-32
      });

      }); // End of documnet ready

    jQuery(window).load(function(){

        
    });


}(jQuery));	