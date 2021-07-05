
$(document).ready(function(){
    $("#fast-carousel").owlCarousel({
        items:1,
        loop:1,
        nav:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:15000,
        autoplayHoverPause:true

    });
  });

  $(document).ready(function(){
    $('#advet-show').owlCarousel({
     loop:true,
     margin:0,
     nav:true,
     autoplay:true,
     responsive:{
         0:{
             items:2
         },
         600:{
             items:3
         },
         1000:{
             items:5
         }
     }
    })
    });


    
  $(document).ready(function(){
     $('#product-show').owlCarousel({
     loop:true,
     nav:false,
     autoplay:true,
     responsive:{
         0:{
             items:2
         },
         600:{
             items:2
         },
         1000:{
             items:6
         }
     }
    })
    });


       
  $(document).ready(function(){
     $('#product-show-item').owlCarousel({
     loop:true,
     nav:false,
     autoplay:true,
     responsive:{
         0:{
             items:2
         },
         600:{
             items:2
         },
         1000:{
             items:6
         }
     }
    })
    });




// owl.owlcarousel2_filter( '.blue' );

// $( '.owl-filter-bar' ).on( 'click', '.item', function() {

//     var $item = $(this);
//     var filter = $item.data( 'owl-filter' )

//     owl.owlcarousel2_filter( filter );

// } )