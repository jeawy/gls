
$(document).ready(function(){
    //
    var height = window.innerHeight;
    var width = window.innerWidth;
    $('.wechat_div').hide();
    $('.product_sec_menu').hide();
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

    $('.store_sec_menu').hide();
    
    $('.a_store').click(function(e){
        //体验店菜单点击了
        var store_show = $('.store_sec_menu').is(":visible");
        var product_show = $('.product_sec_menu').is(":visible");
        e.preventDefault();
        
        if (store_show)
        { 
            $('.store_sec_menu').hide();
        }
        else{
            if(product_show)
            {
                $('.product_sec_menu').hide();
            }
            $('.store_sec_menu').show();
        }
    });

    $('.product_sec_menu').hide();
    $('.a_product').click(function(e){
        // cast菜单点击了
        e.preventDefault();
        var product_show = $('.product_sec_menu').is(":visible");
        var store_show = $('.store_sec_menu').is(":visible");
        if (product_show)
        { 
            $('.product_sec_menu').hide();
        }
        else{
            if(store_show)
            {
                $('.store_sec_menu').hide();
            }
            $('.product_sec_menu').show();
        }
    });


    //
   
         $('.bussiness_img_hove').hover(
            function() {
                // Called when the mouse enters the element
                $(this).attr({'src':'../static/img/bussiness-1.png'});
            },
            function() {
                // Called when the mouse leaves the element
                $(this).attr({'src':'../static/img/bussiness.png'});
            });

            $('.store_img_hove').hover(
            function() {
                // Called when the mouse enters the element
                $(this).attr({'src':'../static/img/store-1.png'});
            },
            function() {
                // Called when the mouse leaves the element
                $(this).attr({'src':'../static/img/store.png'});
            });


            $('.cast_img_hove').hover(
            function() {
                // Called when the mouse enters the element
                $(this).attr({'src':'../static/img/cast-1.png'});
            },
            function() {
                // Called when the mouse leaves the element
                $(this).attr({'src':'../static/img/cast.png'});
            });

            $('.castdock_img_hove').hover(
            function() {
                // Called when the mouse enters the element
                $(this).attr({'src':'../static/img/castdock-1.png'});
            },
            function() {
                // Called when the mouse leaves the element
                $(this).attr({'src':'../static/img/castdock.png'});
            });

            //底部菜单hover in and out
            $('.tr_menu').hide();
            $('.sidemenu').click(
            function() {
               // Called when the mouse enters the element
               var menu_show = $('.tr_menu').is(":visible");
                if (menu_show)
                { 
                    $('.tr_menu').hide('slow');
                    $('.sidemenu').attr({'src':'../static/img/menu.png'});
                }
                else{ 
                    $('.tr_menu').show('slow');
                    $('.sidemenu').attr({'src':'../static/img/menu_close.png'});
                }
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