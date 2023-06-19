
!(function ($) {

  // $("#toggle").click(function (e) { 
  //   $("#show").animate({
  //     width: "toggle",
  //   }, 1000);
  // });

  $(window).scroll(function () { 
     if($(window).scrollTop() > 150){
       $(".sticky_head").addClass("shadow fixed-top");
       $(".sticky_head").show();

     }
     else{
       $(".sticky_head").removeClass("shadow fixed-top");
        $(".sticky_head").hide();
      }
  });

  $(".manubar").click(function () { 
    // alert("hellow")
    var bo = $("#main-mnue").html();
    $("#mnus-clone").html(bo);
    $("#mobile-header").show();

  });   

  $("#mobile-header #close").click(function () { 
   $("#mobile-header").hide();
   var got = $("#mnus-clone").html();
   $(got).remove();
  });

  // var owl = $(' .Team .owl-carousel');
  // owl.owlCarousel({
  //     items:1,
  //     loop:true,
  //     margin:10,
  //     autoplay:true,
  //     autoplayTimeout:1500,
  //     autoplayHoverPause:true
  // });

  $('.counters .counter').counterUp({
    delay: 10,
    time: 3000
  });
  
  $("#show_popu").hide();
  $(" .Gallery .card img").click(function () { 
    var ok = $(this).attr("src");
    $("#show_popu").slideDown(1000);
    $("#show_popu .shows").html('<img src="'+ok+'" />');
  });

  $("#clos").click(function () { 
    $("#show_popu").slideUp();(1000);
  });
  

})(jQuery);