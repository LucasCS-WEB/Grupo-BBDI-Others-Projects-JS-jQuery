$(".e-search .e-form-search .e-term").vtexCustomAutoComplete({
    shelfId: "0380b057-d49f-4f9c-844a-3cca2672cd1f",
    appendTo: $(".x-search-product .x-product-list"),
    notFound: function() {
        $(".x-search-product .x-product-list").html("")
    },
    limit: 2
}), 
$(".e-search .e-form-search .e-term").keyup(function(event) {
    var _text = $(this).val();
    "" != _text ? (
        $(".x-search-product").show(),
        $(".e-send-search").click(function() {
            var _search = _text.replace(/%20/g, " ");
            return window.location.href = "/" + _search, !1
        })
    ) : ( $(".x-search-product").hide() )
});