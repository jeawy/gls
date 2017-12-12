
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