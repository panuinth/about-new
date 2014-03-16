$(function(){
  setTimeout(function() {

    var s = skrollr.init({
		edgeStrategy: 'set',
    forceHeight: false,
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		}
	});

    skrollr.menu.init(s);
  }, 500);



  //var touch = Modernizr.touch;

  //$('.images-holder').imageScroll({
    //imageAttribute: (touch === true) ? 'image-mobile' : 'image',
    //touch: touch
  //});
});
