$.ajax({
    async: true,
    crossDomain: true,
    url: "https://bbdi.vtexcommercestable.com.br/api/dataentities/CL/search?email=webdesenv@bbdi.com.br&_fields=approved",
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/vnd.vtex.ds.v10+json",
        "REST-Range": "resources=0-10"
    },
    success: function(check) {
        if(check[0].approved == true) {
            
        	$(".grid-model .quick-view-box .button").click( function() {

	        	$("header .BBDI-mensagem-alert h3").html("Comprador Aprovado!");
	            
	            $("header .BBDI-mensagem-alert").show();
                $("header .BBDI-messagem-box").removeClass("top-hidden");

	            event.preventDefault();

            });

        } else {

        	$(".grid-model .quick-view-box .button").click( function() {

	        	$("header .BBDI-mensagem-alert h3").html("Comprador aguardando aprovação do cadastro!");
	            
	            $("header .BBDI-mensagem-alert").show();
                $("header .BBDI-messagem-box").removeClass("top-hidden");

	            event.preventDefault();

            });

        }
    }
});