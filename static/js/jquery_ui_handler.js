$(function() {

$('[data-autocomplete]').each(function(i, el) {
el = $(el);
el.autocomplete({
source: baseURL+"?r=arp.related_data_autocomplete&column="+el.data('autocomplete'),
minLength: el.data('autocomplete-minlength') ? el.data('autocomplete-minlength') : 2,
delay:500
});
});

$('[data-sortable]').sortable({ start : function(e, ui) { ui.item.addClass("warning"); },
                          stop : function(e, ui) { ui.item.removeClass("warning"); },
                          update : function () { var request = $(this).data('sortable');
                                                 var order = $(this).sortable('serialize');
                                                 $.ajax({ url:request, data:order }); },
                          containment : "parent",
                          tolerance : "pointer",
                          helper : function(e, ui) { ui.children().each(function() { $(this).width($(this).width()); }); return ui; },
                          axis:"y",
                          handle:".sortable_handle" }).disableSelection();


$(".gallery").css("min-height", $(".gallery").height()+"px");
$(".gallery").sortable({ update : function () { var order = $(".gallery").sortable("serialize");
                                                 $.ajax({ url: baseURL,
                                                          data:"r=page.reorder_photos&"+order }); },
                         forceHelperSize: true,
                         forcePlaceholderSize: true,                                
                         containment : "parent",
                         tolerance : "pointer",
                         handle:".drag_button" }).disableSelection();


$("[data-date-picker]").datepicker({ dateFormat: "yy-mm-dd" });


});
