/*header submenu*/
(function() {
	var $navMenu = $('.h-main .h-m-nav > ul > li');
	$navMenu.hover(function() {
		$(this).find('ul.sub-menu').show().parent().siblings().find('ul.sub-menu').hide();
	}, function() {
		$(this).find('ul.sub-menu').hide()
	});
}());

/*banner main*/
(function() {
	var $main = $('#banner img');
	var $pic = $('#banner li');
	var $btn = $('#banner .b-tab a');
	var length = $pic.length;
	var index = 0;
	var timeout = 500;
	var timer = null;
	var nowTime = 0;
	$pic.eq(0).show();
	$btn.click(function() { //800秒轮播一次。下面的数据控制主要防止在一次轮播完成之前进行点击。导致的跳舞效果 防止动画队列的形成
		if(new Date() - nowTime > 800) {
			nowTime = new Date();
			var i = $(this).index();
			anim(function() {
				if(i) { //0为左侧按钮  1为右侧按钮
					index++;
					index %= length;
				} else {
					index--;
					if(index < 0) {
						index = length - 1;
					}
				}
			});
		}
	});
	$main.hover(function() {
		clearInterval(timer);
	}, auto);

	auto();

	function auto() {
		timer = setInterval(function() {
			anim(function() {
				index++;
				index %= length;
			});
		}, 5000);
	}

	function anim(fn) {
		$pic.eq(index).fadeOut(timeout);
		fn();
		//  		console.info('****$$$$$$**'+$pic.eq(index).find('img').attr('alt'));
		//  		console.info('**索引值 **: '+ index);
		$pic.eq(index).fadeIn(timeout);
	}
})();

/*about banner*/
(function() {
	var $tab = $('#about .b-tab ul li'),
		$part = $('#about .about-img-ul'),
		$banner = $('#about'),
		length = $tab.length;
	index = 0;
	timer = null;

	$tab.eq(0).addClass('on');
	$part.eq(0).show();

	$tab.click(function() {
		change(function() {
			index = $(this).index();
		}.bind(this));
	});

	auto();
	$banner.hover(function() {
		clearInterval(timer);
	}, auto);

	function auto() {
		timer = setInterval(function() {
			change(function() {
				index++;
				index %= length;
			});
		}, 3000);
	}

	function change(fn) {
		fn && fn();
		var x = index * 1;
		$tab.removeClass('on');
		$tab.eq(x).addClass('on');
		//			console.info($tab.eq(x));
		$part.stop().animate({
			marginLeft: -x * 600 + 'px'
		}, 500);
		//			console.info($part.attr('margin-left'));
		//			console.info(x);
	}
}());
/*评价滚动*/
/*	(function(){
		var listUl = $('#showComment .list-ul'),
			listWrap = $('.comment-wraper'),
			listLength = $('#showComment .list-ul').height(),
			listWrapLength = listWrap.height() || 0,
			marginTopVal = 0,
			timer  = null,
			step = 50;
			
		timer = setInterval(function(){
			var marginTopVal = Math.abs(parseInt(listUl.css('marginTop')));
			listUl.css({
				marginTop: -(marginTopVal + step) + 'px'
			});
			if((marginTopVal + listWrapLength) >= listLength){
				listUl.css({'marginTop': '0px'});
			}
		}, 1000);
	}());*/
/*列表页面关闭提示框*/	
	(function(){
		$('#online_close').click(function(){
			$(this).parent().parent().hide();
		});
	}())
