var __ss_noform = __ss_noform || [];

$("#form-submit").click(function(e) {

    e.preventDefault();

    var dados = $.param({
      nome: $("#nome").val(),
      email: $("#email").val()
    });

    var baseURI = "https://app-3QNETX145S.marketingautomation.services/webforms/receivePostback/MzawMDGzMDY3AQA/",
    key = "e9030b2f-b68c-4ecf-bf43-437e43b1cd96";

    $.ajax({
        url: baseURI + key + '/jsonp/?',
        method: 'POST',
        data: dados,
        jsonp: false,
        cache: false,
        crossDomain: true,
        dataType: 'script'
    });

});