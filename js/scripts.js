$(document).ready(function() {

	// Smooth Scrool
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

			if ($target.length) {
				var targetOffset = $target.offset().top - 42;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
	
	$navbar__title = '<li class="navbar__title"><a href="#menu" title="">menu</a></li>';
	$($navbar__title).prependTo('.navbar__list');

	$('.navbar__list a').click(function(event) {
		event.preventDefault();
		$('.navbar__list').toggleClass('navbar--open');
	});
	
});


/* Inspectlet */

var	__insp = __insp || [];
	__insp.push(['wid', 985987434]);

(function() {
	function __ldinsp() {
		var insp = document.createElement('script');		
			insp.type = 'text/javascript';
			insp.async = true;
			insp.id = "inspsync";
			insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://www.inspectlet.com/inspectlet.js';
			
		var	x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x);
	}

	if (window.attachEvent){
		window.attachEvent('onload', __ldinsp);
	} else {
		window.addEventListener('load', __ldinsp, false);
	}
})();


/* Google Analytics */

var	_gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-38626661-1']);
	_gaq.push(['_trackPageview']);

(function() {
	var	ga = document.createElement('script');
		ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	
	var	s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();