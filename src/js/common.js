$(function(){
var background_img = [
			'../img/background/slide_1.jpg',
			'../img/background/slide_2.jpg',
			'../img/background/slide_3.jpg',
			'../img/background/slide_4.jpg',
			'../img/background/slide_5.jpg',
			'../img/background/slide_6.jpg'
			], 
	preview_img = $('.slider__image--item'),
	preview_text = $('.slider__title--item'),
	i = 1,
	duration = 700,
	background_element = $('.full_background');
function preview_index(class, arg) {
	return class.eq(arg);
}
function background_slider(){
	// if (typeof(i) === "undefined") { i = 1; }
	if(i > (background_img.length-1)){
		background_element.animate({'opacity':'0'},duration,function(){
			i=1;
			background_element.css({'background-image':'url('+background_img[0]+')'});
			preview_img.removeClass('active_image');
			preview_text.removeClass('active_title');
			preview_index(preview_img, 0).addClass('active_image');
			preview_index(preview_text, 0).addClass('active_title');
		});
		background_element.animate({'opacity':'1'},duration);
	} else {
		background_element.animate({'opacity':'0'},duration,function(){
			background_element.css({'background-image':'url('+background_img[i]+')'});
			preview_img.removeClass('active_image');
			preview_text.removeClass('active_title');
			preview_index(preview_img, i).addClass('active_image');
			preview_index(preview_text, i).addClass('active_title');
			i++;
		});
		background_element.animate({'opacity':'1'},duration);
	}
}

var intervalBackground_slider = setInterval(background_slider,3000);
	preview_img.on('click', function() {
		i = $(this).index();
		preview_img.removeClass('active_image');
		preview_text.removeClass('active_title');
		$(this).addClass('active_image');
		preview_index(preview_text, $(this).index()).addClass('active_title');
		i++;
	});

	$('.activeBoard__title').on('click', function () {
		var activeBlock = $('.activeText');
		if ( activeBlock.hasClass('visibleActiveText')) {
			activeBlock.removeClass('visibleActiveText');
			$('.activeBoard__arrow').removeClass('rotate_arrow')
		}
		else {
			activeBlock.addClass('visibleActiveText');
			$('.activeBoard__arrow').addClass('rotate_arrow')
		};		
	})

	$('.activeText__close').on('click', function () {
		$('.activeText').removeClass('visibleActiveText');
		$('.activeBoard__arrow').removeClass('rotate_arrow');
	});
});