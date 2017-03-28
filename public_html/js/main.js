
//
$(document).ready(function(){

    var s = skrollr.init();   
    
    
    $('.bar').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});


$('.play a').on('click',function(){
         $('.video').addClass("show_video");
        
    });
$('.close').on('click',function(){
     $('.video').removeClass("show_video");

});





    
    $('a[href^="#"]').click(function(e) {

            $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 600);            
        
             if($(this.hash).selector == "#s3"){
                $('.bar').addClass('grey');                
             }
             else{
                 $('.bar').removeClass('grey');
             }
            
             

            return false;

            e.preventDefault();
            

        });
                
                
                
    
     
     
                
    $('.mark').on('click',function(){
    $('.entry').animate({opacity: 0.4, left: '-1800px'},1000);
           
});

});



/* -------slider------- */
$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 2],
        [450, 4],
        [600, 7],
        [700, 9],
        [1000, 3],
        [1200, 5],
        [1400, 13],
        [1600, 15]
      ],
      navigation : true
 
  }); 
   /// show video and hide
     
 
});

