 jQuery(document).ready(function() {
     jQuery('.code').hide();
     jQuery('.qqgroup, .wechat').hover(function() {
         jQuery('.code').show();
     });

     jQuery(".qqgroup, .wechat").mouseout(function() {
         jQuery('.code').hide();
     });
 });