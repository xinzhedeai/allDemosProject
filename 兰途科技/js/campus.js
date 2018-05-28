/*part1随屏幕高度变化*/
(function(){
	var $content = $('#content');
	var $part1 = $('#part1');
	part1H();
	function part1H(){
		var winH = $(window).height();
		$part1.height(winH - parseFloat($content.css('margin-top')));
	}
	$(window).resize(function(){
		part1H();
	});
})();
/*part3栏目点击*/
(function(){
	var $thirdLi = $('#part3 .p3-wrap .third ul li'),
		$secondLi = $('#part3 .p3-wrap .second ul li'),
		index = 0,
		length = $thirdLi.length,
		timer = null;
	$thirdLi.click(function(){
		clearInterval(timer);
		index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$secondLi.eq($(this).index()).show().siblings().hide();
		auto();
	});
	auto();
	function auto(){
		timer = setInterval(function(){
			index ++;
			index %= length;
			$thirdLi.eq(index).addClass('active').siblings().removeClass('active');
			$secondLi.eq(index).show().siblings().hide();
		}, 3000);
	}
})();
/*part按钮点击事件*/
(function(){
	var $part = $('#content .part');
	$part.find('.btn').click(function(){
		var index = $(this).parents('.part').index();
		var scrollTop = $part.eq(index + 1).offset().top - ($(window).height() - $part.eq(index + 1).height() + 71)/2;
		$('body, html').animate({//chrome和其他浏览器兼容写法
			scrollTop: scrollTop
		}, 800);
	});
})();
