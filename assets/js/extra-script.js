//extra-script.js
$(document).ready(function() {

	var $window = $(window),
		$bodyHtml = $('body,html');


	/* MENU */

	//responsive visibility list menu
	$("#css-toggle-menu").click(function(e) {
		$(".menu").fadeToggle();
		e.preventDefault();
		if($("div.menu").is(":visible")) {
			$("ul.menu-nav li a").click(function() {
				$("div.menu").hide();
			});
		}

	});

	//menu click and jump to the section
	$("ul.menu-nav li a").on('click', function(event) {

		var	$this = $(this),
			href = $this.attr('href'),
			$target, x, y;

		// Get target.
			if (href == '#'
			||	($target = $(href)).length == 0)
				return;

		// Prevent default.
			event.preventDefault();
			event.stopPropagation();

		// Calculate x, y.
			if (skel.breakpoint('small').active) {

				x = $target.offset().top - (Math.max(0, $window.height() - $target.outerHeight()) / 2);
				y = { scrollTop: x };

			}
			else {

				x = $target.offset().left - (Math.max(0, $window.width() - $target.outerWidth()) / 2);
				y = { scrollLeft: x };

			}

		// Scroll.
			$bodyHtml
				.stop()
				.animate(
					y,
					1000,
					'swing'
				);

	});

	//initialize for make active menu (first section)
	$(window).scrollTop(1);
	$(window).scrollLeft(1);


	// Scroll Effect

	$(window).scroll( function(){

		// Section panel jump
		// make menu background
		$("section.panel").each(function(i){

			//check screen size
			if (skel.breakpoint('small').active) {
				var top_of_object = $(this).position().top - 300;
				var top_of_window = $(window).scrollTop();
				if( top_of_window > top_of_object ){
					var id = $(this).attr('id');
					if($(this).has("#"+id)) {
						$("ul.menu-nav li a[href=#"+id+"]").addClass("active-menu");
						$("ul.menu-nav li a").not("[href=#"+id+"]").removeClass("active-menu");
					}
				}
			}
			else {
				var left_of_object = $(this).position().left - 300;
				var left_of_window = $(window).scrollLeft();
				if( left_of_window > left_of_object ){
					var id = $(this).attr('id');
					if($(this).has("#"+id)) {
						$("ul.menu-nav li a[href=#"+id+"]").addClass("active-menu");
						$("ul.menu-nav li a").not("[href=#"+id+"]").removeClass("active-menu");
					}
				}
			}


		});


		// content appear on scrolling
		$('.reveal-scroll').each( function(i){

			if (skel.breakpoint('small').active) {
				var bottom_of_object = $(this).position().top - 300;
				var bottom_of_window = $(window).scrollTop();
				if( bottom_of_window > bottom_of_object ){
					$(this).animate({'opacity':'1'},500);

				}

			} else {
				var bottom_of_object = $(this).position().left - 600;
				var bottom_of_window = $(window).scrollLeft();
				if( bottom_of_window > bottom_of_object ){
					$(this).animate({'opacity':'1'},500);

				}
			}


		});


	});


});
