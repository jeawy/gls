
/* 点击按钮链接微博 */
jQuery('#microblog').click(function() {
location.href = 'https://weibo.com/asu001';
})

/* 下拉框 */
jQuery(document).ready(function(){
jQuery('ul.spinner').width(jQuery('button.spinner_btn').innerWidth());
});

/* 输入字数监听 */
jQuery("#posted-title").on('keyup input', function (event) {
    var val = jQuery(this).val();
    var len = val.length;
    var count = jQuery(this).siblings('span');
    if (len == 0) { count.text("0/50"); return; }
    if (len > 50) {
        len = 50;
        jQuery(this).val(val.substring(0, 50));
    }
    count.text(len + "/50");
});

/* 底部菜单点击显示隐藏二级菜单 */
jQuery('#forum').click(function(){
    jQuery('.hide-menu').toggle();
})

/* 回到顶部 */
window.onload = function(){
    var oTop = document.getElementById("to_top");
    var screenh = jQuery(window).height()/4;
    window.onscroll = function(){
      var scrolltop =document.documentElement.scrollTop;
      if(screenh<scrolltop){
        jQuery(oTop).show();
      }else{
        jQuery(oTop).hide();
      };
    };
    oTop.onclick = function(){
      document.documentElement.scrollTop = document.body.scrollTop =0;
    };
  };