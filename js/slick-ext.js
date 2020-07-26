$(document).ready(function(){
 	$('.fade').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});
});

 // $(document).ready(function(){
 //      $('.your-class').slick({
 //        setting-name: setting-value
 //      });
 //   });

$(document).ready(function(){
	$('.single-item').slick({

	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows: false
	  // prevArrow:  <i class=" fa fa-arrow-right icon-orange"></i>,

	});
});

$('.left').click(function(){
  $('.single-item').slick('slickPrev');
})

$('.right').click(function(){
  $('.single-item').slick('slickNext');
})
