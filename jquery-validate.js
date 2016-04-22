/* globals jQuery */
(function ( $ ) {

  var invalid;

  var valid = function(){
    var inputs = $("#myForm").find("input:text");
    invalid = false;

    $(inputs).each(function () {
      var input = $(this);
      if (input.hasClass("invalid")) {
        invalid=true;
      }
    });

    if(!invalid){
      $("#submit").prop('disabled', false);
    }
  };

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
            $(this).addClass("invalid");
            $("#submit").prop('disabled', true);
          }else{
            $("#error").text("");
            $(this).removeClass("invalid");
            $(this).css({'background-color': ''});
          }
          valid();
        });
      });
    }else{
      return this.each(function () {
        $(this).blur(function() {
          if(!new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").test($(this).val())){
            $("#error").text($(this).val() + " nie jest emailem");
            $(this).css({'background-color': 'red'});
            $(this).addClass("invalid");
            $("#submit").prop('disabled', true);
          }else{
            $("#error").text("");
            $(this).removeClass("invalid");
            $(this).css({'background-color': ''});
          }
          valid();
        });
      });
    }
  };
}( jQuery ));
