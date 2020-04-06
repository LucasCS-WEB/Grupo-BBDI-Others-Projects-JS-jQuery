jQuery(document).ready(function(){	

	jQuery('.popup-energilux-home-fechar').click(function(){
			jQuery('.popup-energilux-home').fadeOut();
			jQuery('.popup-energilux-home-fundo').fadeOut();
	});
	
	var visits = jQuery.cookie('visits') || 0;
	visits++;
	
	jQuery.cookie('visits', visits, { expires: 1, path: '/' });
		
	console.debug(jQuery.cookie('visits'));
		
	if ( jQuery.cookie('visits') > 1 ) {
		jQuery('.popup-energilux-home-fundo').hide();
		jQuery('.popup-energilux-home').hide();
	} else {
			var pageHeight = jQuery(document).height();
			jQuery('<div class="popup-energilux-home-fundo"></div>').insertBefore('body');
			jQuery('.popup-energilux-home-fundo').css("height", pageHeight);
			jQuery('.popup-energilux-home').show();
	}

	if (jQuery.cookie('noShowWelcome')) { jQuery('.popup-energilux-home').hide(); jQuery('.popup-energilux-home-fundo').hide(); }
});	

jQuery(document).mouseup(function(e){
	
	var container = jQuery('.popup-energilux-home');
	
	if( !container.is(e.target)&& container.has(e.target).length === 0)
	{
		container.fadeOut();
		jQuery('.popup-energilux-home-fundo').fadeOut();
	}

});