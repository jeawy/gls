
/* 点击按钮链接微博 */
jQuery('#microblog').click(function() {
location.href = 'https://weibo.com/asu001';
})

/* 下拉框 */
jQuery(document).ready(function(){
jQuery('ul.spinner').width(jQuery('button.spinner_btn').innerWidth());
});