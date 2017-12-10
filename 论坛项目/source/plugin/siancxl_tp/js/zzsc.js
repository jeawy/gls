// JavaScript Document
jQuery(document).ready(function(e) {
	/***不需要自动滚动，去掉即可***/
	time = window.setInterval(function(){
		jQuery('.og_next').click();	
	},5000);
	/***不需要自动滚动，去掉即可***/
	linum = jQuery('.mainlist li').length;//图片数量
	w = linum * 250;//ul宽度
	jQuery('.piclist').css('width', w + 'px');//ul宽度
	jQuery('.swaplist').html(jQuery('.mainlist').html());//复制内容
	
	jQuery('.og_next').click(function(){
		
		if(jQuery('.swaplist,.mainlist').is(':animated')){
			jQuery('.swaplist,.mainlist').stop(true,true);
		}
		
		if(jQuery('.mainlist li').length>4){//多于4张图片
			ml = parseInt(jQuery('.mainlist').css('left'));//默认图片ul位置
			sl = parseInt(jQuery('.swaplist').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w*-1){//默认图片显示时
				jQuery('.swaplist').css({left: '1000px'});//交换图片放在显示区域右侧
				jQuery('.mainlist').animate({left: ml - 1000 + 'px'},'slow');//默认图片滚动				
				if(ml==(w-1000)*-1){//默认图片最后一屏时
					jQuery('.swaplist').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				jQuery('.mainlist').css({left: '1000px'})//默认图片放在显示区域右
				jQuery('.swaplist').animate({left: sl - 1000 + 'px'},'slow');//交换图片滚动
				if(sl==(w-1000)*-1){//交换图片最后一屏时
					jQuery('.mainlist').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	jQuery('.og_prev').click(function(){
		
		if(jQuery('.swaplist,.mainlist').is(':animated')){
			jQuery('.swaplist,.mainlist').stop(true,true);
		}
		
		if(jQuery('.mainlist li').length>4){
			ml = parseInt(jQuery('.mainlist').css('left'));
			sl = parseInt(jQuery('.swaplist').css('left'));
			if(ml<=0 && ml>w*-1){
				jQuery('.swaplist').css({left: w * -1 + 'px'});
				jQuery('.mainlist').animate({left: ml + 1000 + 'px'},'slow');				
				if(ml==0){
					jQuery('.swaplist').animate({left: (w - 1000) * -1 + 'px'},'slow');
				}
			}else{
				jQuery('.mainlist').css({left: (w - 1000) * -1 + 'px'});
				jQuery('.swaplist').animate({left: sl + 1000 + 'px'},'slow');
				if(sl==0){
					jQuery('.mainlist').animate({left: '0px'},'slow');
				}
			}
		}
	})    
});

jQuery(document).ready(function(){
	jQuery('.og_prev,.og_next').hover(function(){
			jQuery(this).fadeTo('fast',1);
		},function(){
			jQuery(this).fadeTo('fast',0.7);
	})

})

