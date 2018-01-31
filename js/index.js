$(function(){

	//初始化wow.js 滚动时动画用
	new WOW().init();

	if(screen.width > 765){
		$(window).stellar({
			horizontalScrolling: false 
		});
	}
	
	// Custom Scrollbar
	var nice = $("html").niceScroll({
		cursorwidth: 8,
		cursorborder: "0px solid #fff",
		cursorborderradius: '',
		cursorcolor: "#4ecdc4",
	});

	//点击滚动 !!!很方便啊 这个！！
	$('.main-nav a:not(.dropdown-toggle)').bind('click', function(event) {
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');

		event.preventDefault();
	});

	//滚动
	var fadeStart=$(window).height()/3 // 100px scroll or less will equiv to 1 opacity
	,fadeUntil=$(window).height() // 200px scroll or more will equiv to 0 opacity
    ,fading = $('.st-home-unit')
    ,fading2 = $('.hero-overlayer');

	$(window).bind("scroll", function() {
		var offset=$(document).scrollTop(),
			opacity = 0,
			opacity2 = 1;

		if(offset<=fadeStart){
	        opacity=1;
	        opacity2=0;
	    }else if( offset<=fadeUntil ){
	        opacity=1-offset/fadeUntil;
	        opacity2=offset/fadeUntil;
	    }

	    fading.css({'opacity': opacity});
		if (offset > 120){
			$(".st-navbar").addClass("st-navbar-mini");
		}else if(offset <= 199){
			$(".st-navbar").removeClass("st-navbar-mini");
		}
	});

	/*鼠标悬停 显示文字*/
	$('#myFocus .text').hide();
	$('#myFocus .pic').hover(function() {
		$(this).find('.text').stop().slideToggle(500);
	});

});
