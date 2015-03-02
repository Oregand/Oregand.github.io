(function($){
	$(document).ready(function(){

		$(".banner-image").backstretch('images/background3.jpg');

		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) {
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) {
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);
@charset "UTF-8";

/*!
Animate.css - http://daneden.me/animate
Licensed under the MIT license - http://opensource.org/licenses/MIT

Copyright (c) 2014 Daniel Eden
*/

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

@-webkit-keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0,-4px,0);
    transform: translate3d(0,-4px,0);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    -webkit-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -30px, 0);
    -ms-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -15px, 0);
    -ms-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0,-4px,0);
    -ms-transform: translate3d(0,-4px,0);
    transform: translate3d(0,-4px,0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  -ms-transform-origin: center bottom;
  transform-origin: center bottom;
}

@-webkit-keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

@keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    -ms-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
    transform: scale3d(1.05, .95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    -ms-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    -ms-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    -ms-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
    -ms-transform: scale3d(.95, 1.05, 1);
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
    -ms-transform: scale3d(1.05, .95, 1);
    transform: scale3d(1.05, .95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}

@-webkit-keyframes shake {
  0%, 100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

@keyframes shake {
  0%, 100% {
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    -ms-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    -ms-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  100% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    -ms-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    -ms-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    -ms-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    -ms-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  100% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    -ms-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes wobble {
  0% {
    -webkit-transform: none;
    transform: none;
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes wobble {
  0% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    -ms-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    -ms-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    -ms-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    -ms-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    -ms-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}

@-webkit-keyframes bounceIn {
  0%, 20%, 40%, 60%, 80%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(.97, .97, .97);
    transform: scale3d(.97, .97, .97);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes bounceIn {
  0%, 20%, 40%, 60%, 80%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    -ms-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    -ms-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(.9, .9, .9);
    -ms-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    -ms-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(.97, .97, .97);
    -ms-transform: scale3d(.97, .97, .97);
    transform: scale3d(.97, .97, .97);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

@-webkit-keyframes bounceInDown {
  0%, 60%, 75%, 90%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInDown {
  0%, 60%, 75%, 90%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    -ms-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    -ms-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    -ms-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    -ms-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

@-webkit-keyframes bounceInLeft {
  0%, 60%, 75%, 90%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInLeft {
  0%, 60%, 75%, 90%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    -ms-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    -ms-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    -ms-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    -ms-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}

@-webkit-keyframes bounceInRight {
  0%, 60%, 75%, 90%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInRight {
  0%, 60%, 75%, 90%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    -ms-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    -ms-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    -ms-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    -ms-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

@-webkit-keyframes bounceInUp {
  0%, 60%, 75%, 90%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInUp {
  0%, 60%, 75%, 90%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    -ms-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    -ms-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    -ms-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    -ms-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}

@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }
}

@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(.9, .9, .9);
    -ms-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    -ms-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    -ms-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }
}

.bounceOut {
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

@-webkit-keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    -ms-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    -ms-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    -ms-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}

@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    -ms-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    -ms-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}

@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    -ms-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    -ms-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}

@-webkit-keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    -ms-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    -ms-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    -ms-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

.bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    -ms-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

@-webkit-keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    -ms-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    -ms-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    -ms-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    -ms-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    -ms-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    -ms-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    -ms-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes fadeOutDown {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    -ms-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

@-webkit-keyframes fadeOutDownBig {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes fadeOutDownBig {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    -ms-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

.fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}

@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    -ms-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    -ms-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

.fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}

@-webkit-keyframes fadeOutRight {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes fadeOutRight {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    -ms-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@-webkit-keyframes fadeOutRightBig {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes fadeOutRightBig {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    -ms-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

.fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}

@-webkit-keyframes fadeOutUp {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes fadeOutUp {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    -ms-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

.fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}

@-webkit-keyframes fadeOutUpBig {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes fadeOutUpBig {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    -ms-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

.fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}

@-webkit-keyframes flip {
  0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
    transform: perspective(400px) scale3d(.95, .95, .95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

@keyframes flip {
  0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -ms-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -ms-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
    -ms-transform: perspective(400px) scale3d(.95, .95, .95);
    transform: perspective(400px) scale3d(.95, .95, .95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  -webkit-backface-visibility: visible;
  -ms-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}

@-webkit-keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  100% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  100% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@-webkit-keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  100% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  100% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}

@-webkit-keyframes flipOutX {
  0% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

@keyframes flipOutX {
  0% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

@-webkit-keyframes flipOutY {
  0% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

@keyframes flipOutY {
  0% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -ms-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.flipOutY {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

@-webkit-keyframes lightSpeedIn {
  0% {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes lightSpeedIn {
  0% {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    -ms-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    -ms-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    -ms-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
  }
}

.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

@-webkit-keyframes lightSpeedOut {
  0% {
    opacity: 1;
  }

  100% {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

@keyframes lightSpeedOut {
  0% {
    opacity: 1;
  }

  100% {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    -ms-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

.lightSpeedOut {
  -webkit-animation-name: lightSpeedOut;
  animation-name: lightSpeedOut;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}

@-webkit-keyframes rotateIn {
  0% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateIn {
  0% {
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    -ms-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
}

@-webkit-keyframes rotateInDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    -ms-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
}

@-webkit-keyframes rotateInDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    -ms-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
}

@-webkit-keyframes rotateInUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    -ms-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
}

@-webkit-keyframes rotateInUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    -ms-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
}

@-webkit-keyframes rotateOut {
  0% {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

@keyframes rotateOut {
  0% {
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    -ms-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

.rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
}

@-webkit-keyframes rotateOutDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0, 0, 1, 45deg);
    transform: rotate(0, 0, 1, 45deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0, 0, 1, 45deg);
    -ms-transform: rotate(0, 0, 1, 45deg);
    transform: rotate(0, 0, 1, 45deg);
    opacity: 0;
  }
}

.rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
}

@-webkit-keyframes rotateOutDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    -ms-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
}

@-webkit-keyframes rotateOutUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    -ms-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
}

@-webkit-keyframes rotateOutUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    -ms-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

.rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
}

@-webkit-keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%, 80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  100% {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

@keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    -ms-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%, 80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    -ms-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  100% {
    -webkit-transform: translate3d(0, 700px, 0);
    -ms-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

.hinge {
  -webkit-animation-name: hinge;
  animation-name: hinge;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    -ms-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

@keyframes rollOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    -ms-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

.rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    -ms-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

@-webkit-keyframes zoomInDown {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInDown {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -ms-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInDown {
  -webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
}

@-webkit-keyframes zoomInLeft {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInLeft {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    -ms-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -ms-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInLeft {
  -webkit-animation-name: zoomInLeft;
  animation-name: zoomInLeft;
}

@-webkit-keyframes zoomInRight {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInRight {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    -ms-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -ms-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInRight {
  -webkit-animation-name: zoomInRight;
  animation-name: zoomInRight;
}

@-webkit-keyframes zoomInUp {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInUp {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    -ms-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInUp {
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}

@-webkit-keyframes zoomOut {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  100% {
    opacity: 0;
  }
}

@keyframes zoomOut {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    -ms-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  100% {
    opacity: 0;
  }
}

.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}

@-webkit-keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    -ms-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutDown {
  -webkit-animation-name: zoomOutDown;
  animation-name: zoomOutDown;
}

@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
    transform: scale(.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}

@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    -ms-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
    -ms-transform: scale(.1) translate3d(-2000px, 0, 0);
    transform: scale(.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center;
  }
}

.zoomOutLeft {
  -webkit-animation-name: zoomOutLeft;
  animation-name: zoomOutLeft;
}

@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
    transform: scale(.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}

@keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    -ms-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
    -ms-transform: scale(.1) translate3d(2000px, 0, 0);
    transform: scale(.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center;
  }
}

.zoomOutRight {
  -webkit-animation-name: zoomOutRight;
  animation-name: zoomOutRight;
}

@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    -ms-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutUp {
  -webkit-animation-name: zoomOutUp;
  animation-name: zoomOutUp;
}
/*!
Animate.css - http://daneden.me/animate
Licensed under the MIT license - http://opensource.org/licenses/MIT

Copyright (c) 2014 Daniel Eden
*/

@import url(animate.css);

/*
Theme Name: Worthy - Free Powerful Theme by HtmlCoder
Author:HtmlCoder
Author URI:http://www.htmlcoder.me
Version:1.0.0
Created:November 2014
License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
File Description: Custom Animations
*/

/*Custom Animations*/

@-webkit-keyframes fadeInDownSmall {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInDownSmall {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
    -ms-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDownSmall {
  -webkit-animation-name: fadeInDownSmall;
  animation-name: fadeInDownSmall;
}

@-webkit-keyframes fadeInLeftSmall {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInLeftSmall {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-20px, 0, 0);
    -ms-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInLeftSmall {
  -webkit-animation-name: fadeInLeftSmall;
  animation-name: fadeInLeftSmall;
}

@-webkit-keyframes fadeInRightSmall {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInRightSmall {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(20px, 0, 0);
    -ms-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInRightSmall {
  -webkit-animation-name: fadeInRightSmall;
  animation-name: fadeInRightSmall;
}

@-webkit-keyframes fadeInUpSmall {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUpSmall {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 20px, 0);
    -ms-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUpSmall {
  -webkit-animation-name: fadeInUpSmall;
  animation-name: fadeInUpSmall;
}
/* Typography
----------------------------------------------------------------------------- */
body {
    font-family: 'Open Sans', sans-serif;
}

.site-name {
    font-family: 'Raleway', sans-serif;
}

html,
body {
    height: 100%;
}

body {
    font-size: 15px;
    line-height: 1.50;
    color: #333333;
    background-color: #ffffff;
    position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: #333333;
}

h1 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 20px;
}

h2 {
    font-size: 28px;
    margin-bottom: 15px;
}

h3 {
    font-size: 22px;
}

h4 {
    font-size: 18px;
    font-weight: 700;
}

h5 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
}

h6 {
    font-weight: 700;
}

h1 span,
h2 span,
h3 span,
h4 span {
    color: #339BEB;
}

.text-colored {
    color: #55acee;
}

a {
    color: #55acee;
}

a:hover {
    color: #339BEB;
}

a:focus,
a:active {
    outline: none;
}

.large {
    font-size: 18px;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

.list-unstyled li {
    padding: 5px 0;
}

.list-horizontal {
    padding: 15px 0;
}

.list-horizontal-item img {
    display: block;
    margin: 0 auto;
}

.list-icons {
    padding: 0;
    margin: 20px 0;
    list-style: none;
    font-size: 18px;
}

.list-icons li {
    padding: 0 0 15px 0;
}

blockquote {
    border-left: none;
    padding-left: 0;
    padding-right: 0;
}

.title {
    margin-top: 0;
}

/* Layout
----------------------------------------------------------------------------- */
.header {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.10);
    padding: 10px 0;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.banner {
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: relative;
    color: #fff;
}

.banner-image {
    vertical-align: middle;
    min-height: 100%;
    width: 100%;
}

.banner:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.55);
    content: "";
}

.banner-caption {
    position: absolute;
    top: 40%;
    width: 100%;
    z-index: 2;
}

.subfooter {
    background-color: #fafafa;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    padding: 40px 0;
}

.section {
    background-color: #ffffff;
    padding: 80px 0;
}

/* Backgrounds
----------------------------------------------------------------------------- */
.default-bg {
    background-color: #222222;
    color: #ffffff;
}

.default-bg.blue {
    background-color: #55acee;
}

.translucent-bg {
    color: #ffffff;
}

.default-bg h1,
.default-bg h2,
.default-bg h3,
.default-bg h4,
.default-bg h5,
.default-bg h6,
.translucent-bg h1,
.translucent-bg h2,
.translucent-bg h3,
.translucent-bg h4,
.translucent-bg h5,
.translucent-bg h6 {
    color: #ffffff;
}

.default-bg blockquote footer,
.translucent-bg blockquote footer {
    color: #cccccc;
}

.default-bg a,
.translucent-bg a {
    color: #ffffff;
    text-decoration: underline;
}

.default-bg a:hover,
.translucent-bg a:hover {
    text-decoration: none;
}

.translucent-bg {
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    background-position: 50% 0;
    background-repeat: no-repeat;
    z-index: 1;
    position: relative;
}

.translucent-bg .translucent-bg {
    margin-top: 80px;
    z-index: 3;
}

.translucent-bg:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

.translucent-bg.blue:after {
    background-color: rgba(85, 172, 238, 0.7);
}

.translucent-bg .container {
    z-index: 3;
    position: relative;
}

.bg-image-1 {
    background: url("../images/background8.jpg") 50% 0px no-repeat;
}

.bg-image-2 {
    background: url("../images/background6.jpg") 50% 0px no-repeat;
}

/* Misc
----------------------------------------------------------------------------- */
.object-non-visible {
    opacity: 0;
    filter: alpha(opacity=0);
}

.object-visible,
.touch .object-non-visible {
    opacity: 1 !important;
    filter: alpha(opacity=100) !important;
}

/* Targeting only Firefox for smoothest animations */
@-moz-document url-prefix() {
    .object-visible,
    .touch .object-non-visible {
        -webkit-transition: opacity 0.6s ease-in-out;
        -moz-transition: opacity 0.6s ease-in-out;
        -o-transition: opacity 0.6s ease-in-out;
        -ms-transition: opacity 0.6s ease-in-out;
        transition: opacity 0.6s ease-in-out;
    }
}

.space {
    padding: 20px 0;
}

.pr-10 {
    padding-right: 10px;
}

.pl-10 {
    padding-left: 10px;
}

.pb-clear {
    padding-bottom: 0;
}

/* Sections
----------------------------------------------------------------------------- */
.banner-caption h1,
.banner-caption h2,
.banner-caption h3,
.banner-caption h4,
.banner-caption h5,
.banner-caption h6 {
    color: #ffffff;
}

.banner-caption h1 {
    font-size: 60px;
}

.subfooter p {
    margin-bottom: 0;
}

/* Template Components
----------------------------------------------------------------------------- */
/* Buttons
---------------------------------- */
.btn {
    padding: 8px 15px;
    font-size: 14px;
    line-height: 1.42857143;
    min-width: 160px;
    text-align: center;
    border-radius: 0;
    text-transform: uppercase;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.btn-default {
    color: #55acee;
    border: 1px solid #cccccc;
}

.btn-default:hover {
    color: #ffffff;
    background-color: #339BEB;
    border-color: #339BEB;
}

/* Collapse
---------------------------------- */
.panel-group .panel {
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
    border: none;
}

.panel-default > .panel-heading {
    padding: 0;
    outline: none;
    border: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    width: 100%;
}

.panel-default > .panel-heading + .panel-collapse > .panel-body {
    border: 1px solid #f0f0f0;
    border-top: none;
    background-color: #fafafa
}

.panel-heading a {
    font-weight: 400;
    padding: 12px 35px 12px 15px;
    display: inline-block;
    width: 100%;
    background-color: #55acee;
    color: #ffffff;
    position: relative;
    text-decoration: none;
}

.panel-heading a.collapsed {
    color: #ffffff;
    background-color: #333333;
}

.panel-heading a:after {
    font-family: "FontAwesome";
    content: "\f147";
    position: absolute;
    right: 15px;
    font-size: 14px;
    font-weight: 300;
    top: 50%;
    line-height: 1;
    margin-top: -7px;
}

.panel-heading a.collapsed:after {
    content: "\f196";
}

.panel-heading a:hover {
    text-decoration: none;
    background-color: #55acee;
    color: #ffffff;
}

.panel-title a i {
    padding-right: 10px;
    font-size: 20px;
}

/* Pills
---------------------------------- */
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus,
.nav-pills > li > a:hover {
    background-color: #55acee;
    border-color: #55acee;
    color: #ffffff;
}

.nav-pills > li > a {
    border-radius: 0;
    padding: 8px 20px;
    border: 1px solid #cacaca;
    color: #666666;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
}

/* Forms
---------------------------------- */
.form-control {
    height: 45px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
}

.form-control-feedback {
    color: #cccccc;
}

.has-feedback label.sr-only ~ .form-control-feedback {
    top: 15px;
}

textarea {
    resize: vertical;
}

/* Modals
---------------------------------- */
.modal-content {
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
}

.modal-header {
    background-color: #55acee;
    color: #ffffff;
}

.modal-header h4 {
    color: #ffffff;
}

.modal-header .close {
    font-weight: 300;
    color: #FFFFFF;
    text-shadow: none;
    filter: alpha(opacity=100);
    opacity: 1;
}

/* Large devices (Large desktops 1200px and up) */
@media (min-width: 1200px) {
    .modal-lg {
        width: 1140px;
    }
}

/* Media
---------------------------------- */
.media .fa {
    font-size: 24px;
    width: 40px;
    height: 25px;
    line-height: 25px;
    padding: 0 5px;
    text-align: center;
}

/* Navigations
----------------------------------------------------------------------------- */
.header .navbar {
    margin-bottom: 0;
}

.main-navigation .navbar-default {
    background-color: transparent;
    border: none;
}

.main-navigation .navbar-default .navbar-nav > li > a {
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 300;
}

.main-navigation .navbar-default .navbar-nav > li.active > a {
    background-color: transparent;
    color: #55acee;
}

.main-navigation .navbar-default .navbar-nav > li > a:hover,
.main-navigation .navbar-default .navbar-nav > li.active > a:hover {
    color: #55acee;
}

@media (min-width: 768px) {
    .main-navigation .navbar-default .navbar-nav > li > a {
        padding-top: 30px;
        padding-bottom: 30px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .main-navigation .container-fluid {
        padding-left: 0;
        padding-right: 0;
    }

    .navbar-nav {
        float: left !important;
    }
}

@media (max-width: 767px) {
    .header.navbar-fixed-top {
        position: absolute;
    }
}

/* Fixed Header
----------------------------------------------------------------------------- */
.fixed-header-on .header {
    background-color: rgba(0, 0, 0, 0.95);
    padding: 5px 0;
}

.fixed-header-on .site-name {
    font-size: 24px;
}

.fixed-header-on .logo {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    margin-top: 0;
    margin-bottom: 0;
}

@media (min-width: 768px) {
    .fixed-header-on .navbar-default .navbar-nav > li > a {
        padding-top: 20px;
        padding-bottom: 20px;
    }
}

@media (max-width: 991px) {
    .fixed-header-on .logo,
    .fixed-header-on .site-name,
    .fixed-header-on .site-slogan {
        display: none;
    }
}

/* Blocks/Widgets
----------------------------------------------------------------------------- */
/* Logo, Site Name, Site Slogan
---------------------------------- */
.logo {
    margin: 10px 10px 10px 0;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.logo,
.site-name-and-slogan {
    float: left;
}

.site-name {
    font-size: 36px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.site-name a {
    color: #ffffff;
}

.site-name a:hover {
    text-decoration: none;
}

.site-slogan {
    font-size: 12px;
}

/* Testimonials
---------------------------------- */
.testimonial .media-left {
    width: 60px;
}

/* Social Links
---------------------------------- */
.social-links {
    padding: 0;
    list-style: none;
    margin: 15px 0;
}

.social-links li {
    margin: 10px 25px 10px 0;
    display: inline-block;
    font-size: 36px;
}

.social-links li a {
    color: #333333;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.social-links li.twitter a:hover {
    color: #55acee;
}

.social-links li.skype a:hover {
    color: #00aff0;
}

.social-links li.linkedin a:hover {
    color: #0976b4;
}

.social-links li.googleplus a:hover {
    color: #dd4b39;
}

.social-links li.youtube a:hover {
    color: #b31217;
}

.social-links li.flickr a:hover {
    color: #ff0084;
}

.social-links li.facebook a:hover {
    color: #3b5998;
}

.social-links li.pinterest a:hover {
    color: #cb2027;
}

/* Isotope Items
---------------------------------- */
.filters {
    margin: 0 0 30px 0;
}

.filters .nav-pills > li {
    margin-right: 2px;
    margin-bottom: 2px;
}

.filters .nav-pills > li + li {
    margin-left: 0px;
}

.text-center.filters .nav-pills > li {
    margin-right: 2px;
    margin-left: 2px;
    margin-bottom: 2px;
    display: inline-block;
    float: none;
}

.isotope-container {
    overflow: hidden;
}

.isotope-item {
    margin-bottom: 20px;
}

.isotope-item .btn-default {
    color: #999999;
}

.isotope-item .btn-default:hover {
    color: #ffffff;
}

@media (max-width: 480px) {
    .filters .nav-pills > li {
        width: 100%;
        display: block;
    }
}

/* Images Overlay
----------------------------------------------------------------------------- */
.overlay-container {
    position: relative;
    display: block;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    bottom: -1px;
    left: 0;
    right: -1px;
    background-color: rgba(85, 172, 238, 0.9);
    cursor: pointer;
    overflow: hidden;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    -webkit-transition: all linear 0.2s;
    -moz-transition: all linear 0.2s;
    -ms-transition: all linear 0.2s;
    -o-transition: all linear 0.2s;
    transition: all linear 0.2s;
}

.overlay:hover {
    text-decoration: none;
}

.overlay span {
    position: absolute;
    display: block;
    bottom: 10px;
    text-align: center;
    width: 100%;
    color: #ffffff;
    font-size: 13px;
    font-weight: 300;
}

.overlay i {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 18px;
    line-height: 1x;
    color: #ffffff;
    margin-top: -8px;
    margin-left: -8px;
    text-align: center;
}

.overlay-container:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: scale(1);
    transform: scale(1);
}