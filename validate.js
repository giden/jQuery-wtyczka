$(document).ready(function (){

$('#imie').validateText( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/} );
$('#telefon').validateText( {pattern: /^\+?[0-9]{8,11}$/} );
$('#email').validateText( {pattern: ''}, 'email' );
});

