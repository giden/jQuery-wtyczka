$(document).ready(function (){

$('#imie').validateText( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/} );
$('#telefon').validateText( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/} );
$('#email').validateText( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/}, 'email' );
});

