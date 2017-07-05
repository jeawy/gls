
$(document).ready(function(){
    //
    var height = window.innerHeight;
    var width = window.innerWidth;
    $('.swiper-container').height(height);
    $('.advice').hide();
    $('.parameter').hide();
    $('.scene').hide();
    $('.fitting').hide();
    $('.div-roll-tip-up').hide();
    $('.roll-tip').click(function(){ 
        $('.div-roll-tip-up').show();
    })
    

    var advice = $('.advice');//安全使用建议
    var fitting = $('.fitting');//配件介绍
    var scene = $('.scene');//应用场景
    var parameter = $('.parameter');//技术特性
    var character = $('.character');//特性
    
    //$('.swiper-slide').css({'margin':height/2+'px ' + (width/2-20) + 'px'});
    
    $(document).scroll(function() { 
         var scrollheight = $(document).scrollTop();
         if (scrollheight > height-60)
         {
             //移除 top menu的fix
             $('.menu').addClass('menu-hidden');
             $('.container-second-menu').addClass('second-menu-fixed');
             
             
             //场景应用菜单
             if (scrollheight > height)
             { 
                $('.panel-menu').addClass('panel-menu-fixed'); 
                //fitting-panel-menu
                $('.fitting-panel-menu').addClass('panel-menu-fixed'); 
             }
             else{
                //移除 top menu的fix 
                $('.panel-menu').removeClass('panel-menu-fixed');  
                $('.fitting-panel-menu').removeClass('panel-menu-fixed'); 
             }
         }
         else{
             //移除 top menu的fix
             $('.menu').removeClass('menu-hidden');
             $('.container-second-menu').removeClass('second-menu-fixed');
         } 
    });

    $('.roll-tip-up').click(function(e){
        $(document).scrollTop(height);// 
    });

    //二级菜单切换
    function sec_menu(sec )
    {
        advice.hide();
        fitting.hide();
        scene.hide();
        parameter.hide();
        character.hide();

        switch(sec)
        {
            case 'advice': 
            advice.show();
            break;
            case 'fitting': 
            fitting.show();
            break;
            case 'scene': 
            scene.show();
            $('.div-roll-tip-up').hide();
            break;
            case 'parameter': 
            parameter.show();
            break;
            case 'character': 
            character.show();
            break;
            default:
              advice.show();break;
        }
    }

    $('.a_secondmenu_item').click(function(e){
        //
        e.preventDefault();
        var $this = $(this);
        var sec = $this.attr('target');

        console.log(sec);
        $('.tb_secondmenu_item').removeClass('active');
        $($this.parent()).addClass('active'); 
        sec_menu(sec );
    })
})


 