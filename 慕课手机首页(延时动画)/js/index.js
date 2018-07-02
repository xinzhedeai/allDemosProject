var getByClass = function(className) { // 根据类名获取元素
	return document.getElementsByClassName(className);
}
var addClass = function(element, _className) {

	var className = element.className.split(' '); // 获取元素的原有类名并存入数组
	var classNameMap = {}

	for(var i = 0; i < className.length; i++) {
		classNameMap[className[i]] = 1; // 将类名的值设置为1并存到map中
	}
	classNameMap[_className] = 1; // 将元素新添加的类的值置为1

	className = [];
	for(i in classNameMap) { // 遍历类名
		className.push(i);
	}
	element.className = className.join(' '); // 将数组转化为字符串重新赋值给元素

}
var removeClass = function(element, _className) { // 将指定类从元素上删掉

	var className = element.className.split(' ');
	var classNameMap = {}
	for(var i = 0; i < className.length; i++) {
		classNameMap[className[i]] = 1;
	}
	delete classNameMap[_className];
	className = [];
	for(i in classNameMap) {
		className.push(i);
	}
	element.className = className.join(' '); // 类的删除
}

window.onload = function(argument) { // 页面加载初始化

	addClass(getByClass('header')[0], 'header_active_1');
	// 第一屏 初始化
	addClass(getByClass('screen-1__heading')[0], 'screen-1__heading_animate_init');
	addClass(getByClass('screen-1__phone')[0], 'screen-1__phone_animate_init');
	addClass(getByClass('screen-1__shadow')[0], 'screen-1__shadow_animate_init');

	// screen 2 init
	addClass(getByClass('screen-2__heading')[0], 'screen-2__heading_animate_init');
	addClass(getByClass('screen-2__subheading')[0], 'screen-2__subheading_animate_init');
	addClass(getByClass('screen-2__phone')[0], 'screen-2__phone_animate_init');

	addClass(getByClass('screen-3__heading')[0], 'screen-3__heading_animate_init');
	addClass(getByClass('screen-3__subheading')[0], 'screen-3__subheading_animate_init');
	addClass(getByClass('screen-3__phone')[0], 'screen-3__phone_animate_init');
	addClass(getByClass('screen-3__features')[0], 'screen-3__features_animate_init');

	addClass(getByClass('screen-4__heading')[0], 'screen-4__heading_animate_init');
	addClass(getByClass('screen-4__subheading')[0], 'screen-4__subheading_animate_init');
	addClass(getByClass('screen-4__type')[0], 'screen-4__type_animate_init');

	addClass(getByClass('screen-5__heading')[0], 'screen-5__heading_animate_init');
	addClass(getByClass('screen-5__subheading')[0], 'screen-5__subheading_animate_init');
	addClass(getByClass('screen-5__back')[0], 'screen-5__back_animate_init');

	setTimeout(function() {

		getByClass('screen-1__heading')[0].style.visibility = 'visible';
		getByClass('screen-1__phone')[0].style.visibility = 'visible';
		getByClass('screen-1__shadow')[0].style.visibility = 'visible';

		addClass(getByClass('screen-1__heading')[0], 'screen-1__heading_animate_done');
		addClass(getByClass('screen-1__phone')[0], 'screen-1__phone_animate_done');
		addClass(getByClass('screen-1__shadow')[0], 'screen-1__shadow_animate_done');
	}, 500)

	getByClass('header__nav-item_i_1')[0].onclick = function() {
		document.body.scrollTop = 0;
	}
	getByClass('header__nav-item_i_2')[0].onclick = function() {
		document.body.scrollTop = 1 * 800 - 60; //之所以减60,是减掉顶部栏的高度。
	}
	getByClass('header__nav-item_i_3')[0].onclick = function() {
		document.body.scrollTop = 2 * 800 - 60;
	}
	getByClass('header__nav-item_i_4')[0].onclick = function() {
		document.body.scrollTop = 3 * 800 - 60;
	}

	getByClass('header__nav-item_i_5')[0].onclick = function() {
		document.body.scrollTop = 4 * 800 - 60;
	}

	getByClass('header__nav')[0].onmouseout = function() { // 标题栏下的红色边框线位置
		getByClass('header__nav-item-tip')[0].style.left = '';
	}
	getByClass('header__nav-item_i_1')[0].onmouseover = function() {
		getByClass('header__nav-item-tip')[0].style.left = (0 * 100 + 20) + 'px';
	}
	getByClass('header__nav-item_i_2')[0].onmouseover = function() {
		getByClass('header__nav-item-tip')[0].style.left = (1 * 100 + 20) + 'px';
	}
	getByClass('header__nav-item_i_3')[0].onmouseover = function() {
		getByClass('header__nav-item-tip')[0].style.left = (2 * 100 + 20) + 'px';
	}
	getByClass('header__nav-item_i_4')[0].onmouseover = function() {
		getByClass('header__nav-item-tip')[0].style.left = (3 * 100 + 20) + 'px';
	}
	getByClass('header__nav-item_i_5')[0].onmouseover = function() {
		getByClass('header__nav-item-tip')[0].style.left = (4 * 100 + 20) + 'px';
	}
}

window.onscroll = function() { // 监听滚轮时间，开启动画
	
	var top = document.body.scrollTop;
	console.info(top);
	if(top < 100) { // 顶部栏添加样式
		getByClass('header')[0].setAttribute('class', 'header header_active_1')
		removeClass(getByClass('header')[0], 'header_status_black');
	} else {
		addClass(getByClass('header')[0], 'header_status_black'); // 顶部栏背景色变灰
	}

	if(top < 400) {
		getByClass('outline')[0].style.opacity = 0; // 侧边栏
	} else {
		getByClass('outline')[0].style.opacity = 1;
		getByClass('outline')[0].setAttribute('class', 'outline outline_active_1');

	}

	if(top > 1 * 800 - 61) { // 第二屏
		getByClass('header')[0].setAttribute('class', 'header header_status_black header_active_2');

		removeClass(getByClass('screen-2__heading')[0], 'screen-2__heading_animate_init');
		removeClass(getByClass('screen-2__subheading')[0], 'screen-2__subheading_animate_init');
		removeClass(getByClass('screen-2__phone')[0], 'screen-2__phone_animate_init');

		addClass(getByClass('screen-2__heading')[0], 'screen-2__heading_animate_done');
		addClass(getByClass('screen-2__subheading')[0], 'screen-2__subheading_animate_done');
		addClass(getByClass('screen-2__phone')[0], 'screen-2__phone_animate_done');

		getByClass('outline')[0].setAttribute('class', 'outline outline_active_2'); // 这个类控制这侧边栏当前位置的颜色 
	}

	if(top > 2 * 800 - 61) { // 第三屏 
		getByClass('header')[0].setAttribute('class', 'header header_status_black header_active_3');

		removeClass(getByClass('screen-3__heading')[0], 'screen-3__heading_animate_init');
		removeClass(getByClass('screen-3__subheading')[0], 'screen-3__subheading_animate_init');
		removeClass(getByClass('screen-3__phone')[0], 'screen-3__phone_animate_init');
		removeClass(getByClass('screen-3__features')[0], 'screen-3__features_animate_init');

		addClass(getByClass('screen-3__heading')[0], 'screen-3__heading_animate_done');
		addClass(getByClass('screen-3__subheading')[0], 'screen-3__subheading_animate_done');
		addClass(getByClass('screen-3__phone')[0], 'screen-3__phone_animate_done');
		addClass(getByClass('screen-3__features')[0], 'screen-3__features_animate_done');

		getByClass('outline')[0].setAttribute('class', 'outline outline_active_3'); 
	}
	if(top > 3 * 800 - 61) {
		getByClass('header')[0].setAttribute('class', 'header header_status_black header_active_4');

		removeClass(getByClass('screen-4__heading')[0], 'screen-4__heading_animate_init');
		removeClass(getByClass('screen-4__subheading')[0], 'screen-4__subheading_animate_init');
		removeClass(getByClass('screen-4__type')[0], 'screen-4__type_animate_init');

		addClass(getByClass('screen-4__heading')[0], 'screen-4__heading_animate_done');
		addClass(getByClass('screen-4__subheading')[0], 'screen-4__subheading_animate_done');
		addClass(getByClass('screen-4__type')[0], 'screen-4__type_animate_done');

		getByClass('outline')[0].setAttribute('class', 'outline outline_active_4');

	}
	if(top > 4 * 800 - 61) {
		getByClass('header')[0].setAttribute('class', 'header header_status_black header_active_5');

		removeClass(getByClass('screen-5__heading')[0], 'screen-5__heading_animate_init');
		removeClass(getByClass('screen-5__subheading')[0], 'screen-5__subheading_animate_init');
		removeClass(getByClass('screen-5__back')[0], 'screen-5__back_animate_init');

		addClass(getByClass('screen-5__heading')[0], 'screen-5__heading_animate_done');
		addClass(getByClass('screen-5__subheading')[0], 'screen-5__subheading_animate_done');
		addClass(getByClass('screen-5__back')[0], 'screen-5__back_animate_done');

		getByClass('outline')[0].setAttribute('class', 'outline outline_active_5');

	}
}
// var mouseEnterTip = function (element) {
//   var e = document.createEvent('MouseEvents');
//   e.initEvent( 'mouseenter', true, false );
//   element.dispatchEvent(e);
// }