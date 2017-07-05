
$(document).ready(function(){
    //
    var height = window.innerHeight;
    var width = window.innerWidth;
    $('.wechat_div').hide();
    $('.swiper-container').height(height);
    //$('.swiper-slide').css({'margin':height/2+'px ' + (width/2-20) + 'px'});
    $('.wechat').hover(function(){
        $('.wechat_div').show();
    });
    $( ".wechat" ).mouseout(function() {
         $('.wechat_div').hide();
    });

    $('.store_sec_menu').hide();
    $('.a_store').click(function(e){
        //
       e.preventDefault();
        var mark = $('.store_sec_menu').is(":visible");
        if (mark)
        {
            $('.store_sec_menu').hide();
        }
        else{
            $('.store_sec_menu').show();
        }
    })
})

 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // Enable debugger
        debugger: true
    });