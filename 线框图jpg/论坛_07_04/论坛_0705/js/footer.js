 $(document).ready(function(){
	 $('.code').hide();
	 $('.qqgroup, .wechat').hover(function(){
		 $('.code').show();
	 });
	 
	 $( ".qqgroup, .wechat" ).mouseout(function() {
         $('.code').hide();
    });

	
 })