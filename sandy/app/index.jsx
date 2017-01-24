import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
  	require("../public/css/normalize.min.css");
	require("../public/css/main.css");
	require("../public/css/custom.css");
	require("../public/css/magnific-popup.css");
	require("../public/js/vendor/jquery.magnific-popup.js");
	require("../public/js/plugins.js");
	require("../public/js/main.js");
    return <p> Hello World!</p>;
  };
  // We need to manager our script in here in order for it to be managed inside of reactJS.
}

render(<App/>, document.getElementById('app'));

$( document ).ready(function() {
	$('.up-link').magnificPopup({type:'image'});
	$('.autohide-action').on('click', function(){
		$('.autohide-child').slideDown('slow', function(){
			$('.autohide-close').fadeIn('fast');
		});
	});
	$('.autohide-close').on('click', function(){
		$('.autohide-close').fadeOut('fast');
		$('.autohide-child').slideUp('fast', function(){
			$('.autohide-action').fadeIn('fast');
		});
	});
	$('.up-link').magnificPopup({
	  type: 'image',
	  retina: {
	    ratio: 2, // Increase this number to enable retina image support.
	    // Image in popup will be scaled down by this number.
	    // Option can also be a function which should return a number (in case you support multiple ratios). For example:
	    // ratio: function() { return window.devicePixelRatio === 1.5 ? 1.5 : 2  }

	    replaceSrc: function(item, ratio) {
	      return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
	    } // function that changes image source
	  }
	});
})