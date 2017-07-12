
$(document).ready(function(){
    $(document).scroll(function() { 
         var scrollheight = $(document).scrollTop();
         if (scrollheight > 100)
         {
              $('.menu-holder').hide( );
         }
         else{
             ////移除 top menu的fix
             $('.menu-holder').show( );
         } 
    });

});

