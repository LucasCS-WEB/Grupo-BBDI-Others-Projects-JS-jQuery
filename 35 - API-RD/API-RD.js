/* API Integração RD Station */

$(document).ready(function() {

	$('#newsletterButtonOK').hover(function() {
				
		var Email = $('#newsletterClientEmail').val();
		
		if(Email!="") {
			
			if(Email!="Digite seu e-mail") {
					
				var data_array = [
					{ name: 'email', value: Email },
					{ name: 'identificador', value: 'Newsletter footer BBBaterias' },
					{ name: 'token_rdstation', value: 'f612c5bf4267c582a7b714ab32bed896' },
				];
				
				RdIntegration.post(data_array);
				
			}
			
		}
	
	});
		
});