/* globals jQuery */
(function ( $ ) {

  $.fn.validateText = function( options, type ) {
    if(type !== "email"){
      return this.each(function () {
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
      });
    }else{
      return this.each(function () {
        $(this).blur(function() {
          if(!new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").test($(this).val())){
            $("#error").text($(this).val() + " nie jest emailem");
            $(this).css({'background-color': 'red'});
          }else{
            $("#error").text("");
            $(this).css({'background-color': ''});
          }
        });
      });
    }
  };


}( jQuery ));
