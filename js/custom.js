
$(document).ready(function() {
	function header() {
		$(window).height();
		$(window).width() > 767;
	}

	$(".fancylight").fancybox({
			openEffect : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
    

});


$(document).ready(function() {
	$(".container-masonry2").isotope({
      itemSelector : ".col-lg-3",
			layoutMode : "masonry",
			masonry : {
				columnWidth : 0,
				gutter : 0
			}
    });
});


