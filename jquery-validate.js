(function ( $ ) {

  $.fn.validateText = function( options ) {
    var settings = $.extend({
      pattern: ".*",
    }, options );
    $(this).blur(function() {
      if(!settings.pattern.test($(this).val())){
        $("#error").text($(this).val() + " nie pasuje do: " + settings.pattern);
        $(this).css({'background-color': 'red'});
      }else{
        $("#error").text("");
        $(this).css({'background-color': ''});

      }
    });
    return this;
  };

}( jQuery ));
