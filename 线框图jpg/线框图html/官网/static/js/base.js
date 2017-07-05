
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

    $('.a_store').click(function(){
    //  体验店点击事件
    
    });
})

 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // Enable debugger
        debugger: true
    });