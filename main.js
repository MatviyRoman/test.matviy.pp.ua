$(window).on('load', function(){
	$('#one-btn, #two-btn, #three-btn, #four-btn').click(function(){
		$('.other-one-links').hide();
		$('.other-two-links').hide();
		$('.other-three-links').hide();
		$('.other-four-links').hide();
	})
	$('#one-btn').click(function(){
		$('.one-links').slideToggle();
		$('.two-links').hide();
		$('.three-links').hide();
		$('.four-links').hide();
	})
	$('#two-btn').click(function(){
		$('.one-links').hide();
		$('.two-links').slideToggle();
		$('.three-links').hide();
		$('.four-links').hide();
	});
	$('#three-btn').click(function(){
		$('.one-links').hide();
		$('.two-links').hide();
		$('.three-links').slideToggle();
		$('.four-links').hide();
	});
	$('#four-btn').click(function(){
		$('.one-links').hide();
		$('.two-links').hide();
		$('.three-links').hide();
		$('.four-links').slideToggle();
	});
	$('#one-one-btn').click(function(){
		$('.one-one-links').slideToggle();
		$('.one-two-links').hide();
		$('.one-three-links').hide();
	})
	$('#one-two-btn').click(function(){
		$('.one-one-links').hide();
		$('.one-two-links').slideToggle();
		$('.one-three-links').hide();
	})
	$('#one-three-btn').click(function(){
		$('.one-one-links').hide();
		$('.one-two-links').hide();
		$('.one-three-links').slidetoggle();
	})
	$('#two-one-btn').click(function(){
		$('.two-one-links').slideToggle();
		$('.two-two-links').hide();
		$('.two-three-links').hide();
	})
	$('#two-two-btn').click(function(){
		$('.two-one-links').hide();
		$('.two-two-links').slideToggle();
		$('.two-three-links').hide();
	})
	$('#two-three-btn').click(function(){
		$('.two-one-links').hide();
		$('.two-two-links').hide();
		$('.two-three-links').slideToggle();
	})
	$('#three-one-btn').click(function(){
		$('.three-one-links').slideToggle();
		$('.three-two-links').hide();
		$('.three-three-links').hide();
	})
	$('#three-two-btn').click(function(){
		$('.three-one-links').hide();
		$('.three-two-links').slideToggle();
		$('.three-three-links').hide();
	})
	$('#three-three-btn').click(function(){
		$('.three-one-links').hide();
		$('.three-two-links').hide();
		$('.three-three-links').slideToggle();
	})
	$('#four-one-btn').hover(function(){
		$('.four-one-links').slideToggle();
		$('.four-two-links').hide();
		$('.four-three-links').hide();
	})
	$('#four-two-btn').hover(function(){
		$('.four-one-links').hide();
		$('.four-two-links').slideToggle();
		$('.four-three-links').hide();
	})
	$('#four-three-btn').hover(function(){
		$('.four-one-links').hide();
		$('.four-two-links').hide();
		$('.four-three-links').slideToggle();
	})
});