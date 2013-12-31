// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
(function($){
	// Foundation定形
	$(document).foundation();

	// スムーズスクロール
	$(function(){
		$('a[href^=#]').click(function(){
			var speed = 500;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
		});
	});
	$(function() {
		var topBtn = $('#pageTop');
		topBtn.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				topBtn.fadeIn();
			} else {
				topBtn.fadeOut();
			}
		});
			topBtn.click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
			});
	});
})(jQuery);