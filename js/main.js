(function() {
	'use strict';

	/*----------------------------------------
		Detect Mobile
	----------------------------------------*/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	/*----------------------------------------
		Back to top
	----------------------------------------*/
	var backToTop = function() {
		$('.js-backtotop').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
	      scrollTop: $('body').offset().top
	    }, 700, 'easeInOutExpo');
		});
	}

	var nextScroll = function() {
		$('.js-next').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
      	scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 700, 'easeInOutExpo');
		});

		$(window).scroll(function(){

			var $this = $(this),
				st = $this.scrollTop();

			if (st > 10) {
				$('.js-next').addClass('site-sleep');
			} else {
				$('.js-next').removeClass('site-sleep');
			}

		});
	}

	/*----------------------------------------
		Burger Menu
	----------------------------------------*/	
	var mobileMenuControl = function() {
		

		// click burger menu
		$('.site-burger-menu').on('click', function(e){
			e.preventDefault();
			if ($('body').hasClass('show')) {
				$('.site-burger-menu').removeClass('active');
				$('body').removeClass('show');
			} else {
				$('.site-burger-menu').addClass('active');
				$('body').addClass('show');
			}
		});

		if ($(window).width() > 766) {
			$('body').removeClass('site-mobile-menu-active');
			$('.site-burger-menu').removeClass('active');
		} else {
			$('body').addClass('site-mobile-menu-active');
		}

		$(window).resize(function(){
			if ($(window).width() > 766) {
				$('body').removeClass('site-mobile-menu-active');
				$('.site-burger-menu').removeClass('active');
			} else {
				$('body').addClass('site-mobile-menu-active');
			}
		});

		// Click outside of the Mobile Menu content
		$(document).click(function (e) {
	    var container = $(".site-nav, .site-burger-menu");
	    
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('show') ) {
					$('body').removeClass('show');
					$('.site-burger-menu').removeClass('active');
				}
	    }
		});
		

	};

	/*----------------------------------------
		Search
	----------------------------------------*/
	var searchControl = function() {
		$('.js-site-search').on('click', function(){
			$('#site-search').addClass('active');
			setTimeout(function(){
				$('#site-search').find('#search').focus().select();
			}, 500);
		});
		$('.js-site-close').on('click', function(){
			$('#site-search').removeClass('active');
		});
	};

	/*----------------------------------------
		Menu Hover
	----------------------------------------*/
	var menuHover = function() {
		if (!isMobile.any()) {
			$('.site-navbar .navbar-nav li.dropdown').hover(function() {
			  $(this).find('> .dropdown-menu').stop(true, true).delay(200).fadeIn(500).addClass('animated-fast fadeInUp');
			}, function() {
				$(this).find('> .dropdown-menu').stop(true, true).fadeOut(200).removeClass('animated-fast fadeInUp')
			});
		}
	}
	/*----------------------------------------
		Carousel
	----------------------------------------*/
	var owlCarousel = function(){

		var owl1 = $('.owl-carousel-carousel'),
			 	owl2 = $('.owl-carousel-carousel2'),
			 	owl3 = $('.owl-carousel-carousel3');
		owl1.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: false,
			dots: false,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});

		owl2.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: false,
			dots: false,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});

		owl3.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: false,
			dots: false,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});


		// Custom Navigation Events
		$('.site-owl-next').click(function(e){
		  owl1.trigger('next.owl.carousel');
		  e.preventDefault();
		});
		$('.site-owl-prev').click(function(e){
		  owl1.trigger('prev.owl.carousel');
		  e.preventDefault();
		});

		// Custom Navigation Events
		$('.site-owl-next2').click(function(e){
		  owl2.trigger('next.owl.carousel');
		  e.preventDefault();
		});
		$('.site-owl-prev2').click(function(e){
		  owl2.trigger('prev.owl.carousel');
		  e.preventDefault();
		});

		// Custom Navigation Events
		$('.site-owl-next3').click(function(e){
		  owl3.trigger('next.owl.carousel');
		  e.preventDefault();
		});
		$('.site-owl-prev3').click(function(e){
		  owl3.trigger('prev.owl.carousel');
		  e.preventDefault();
		});

		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			loop: true,
			margin: 20,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			autoplay: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	    ],
	    responsive:{
	    	0:{
		      items: 1
			  },
			  980:{
		      items: 1
			  },
			  1100:{
		      items: 2
			  }
			}
		});

		var owl = $('.owl-work');
		owl.owlCarousel({
			stagePadding: 150,
			loop: true,
			margin: 20,
			nav: true,
			dots: false,
			mouseDrag: false,
			autoWidth: true,
			autoHeight: true,
	    autoplay: true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
			navText: [	
				"<i class='icon-chevron-thin-left'></i>",
				"<i class='icon-chevron-thin-right'></i>"
			],
			responsive:{
			  0:{
		      items:1,
		      stagePadding: 10
			  },
			  500:{
			  	items:2,
		      stagePadding: 20
			  },
			  600:{
		      items:2,
		      stagePadding: 40
			  },
			  800: {
			  	items:2,
			  	stagePadding: 100
			  },
			  1100:{
		      items:3
			  },
			  1400:{
		      items:4
			  },
			}
		});
	};

	
	/*----------------------------------------
		Slider
	----------------------------------------*/
	var flexSlider = function() {
	  $('.flexslider').flexslider({
	    animation: "fade",
	    prevText: "",
	    nextText: "",
	    slideshowSpeed: 2000, // speed of slides
	    animationSpeed: 600,
	    slideshow: true,
	    directionNav: false,
	    controlNav: true
	  });
	  $('.flexslider2').flexslider({
	    animation: "fade",
	    prevText: "",
	    nextText: "",
	    slideshowSpeed: 2000, // speed of slides
	    animationSpeed: 600,
	    slideshow: true,
	    directionNav: false,
	    controlNav: false
	  });
	}

	
	/*----------------------------------------
		Content Animation
	----------------------------------------*/
	var contentWayPoint = function() {
		var i = 0;
		$('.site-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('site-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .site-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn site-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft site-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight site-animated');
							} else {
								el.addClass('fadeInUp site-animated');
							}
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 200);
				
			}

		} , { offset: '95%' } );
	};

	

	/*----------------------------------------
		Counter Animation
	----------------------------------------*/
	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};
	var counterWayPoint = function() {
		if ($('#site-counter').length > 0 ) {
			$('#site-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('site-animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('site-animated');
				}
			} , { offset: '90%' } );
		}
	};

	var magnificPopupControl = function() {


		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

		$('.with-caption').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				}
			},
			zoom: {
				enabled: true
			}
		});


		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
	}

	/*----------------------------------------
		Stellar
	----------------------------------------*/
	var stellarInit = function() {
		if( !isMobile.any() ) {
			$(window).stellar();
		}
	};

	var inlineSVG = function() {
		$('img.svg').each(function(){
	    var $img = $(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = jQuery(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');

	});
	};

	// Loading page
	var loaderPage = function() {
		$(".site-loader").fadeOut("slow");
	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){
			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	/*----------------------------------------
		Document Ready 
	----------------------------------------*/
	$(document).ready(function(){
		menuHover();
		counterWayPoint();
		contentWayPoint();
		backToTop();
		searchControl();
		magnificPopupControl();
		stellarInit();
		mobileMenuControl();
		nextScroll();
		loaderPage();
		goToTop();
		inlineSVG();
	});

	$(window).load(function(){
		owlCarousel();
		flexSlider();
	});

	

})();