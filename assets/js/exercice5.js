// Au passage de la souris sur un bouton de couleur, colorer le texte. Le texte doit redevenir noir quand la souris quitte le bouton.
$(function(){
$('#Green').mouseover(function()
{
    $('#text').css('color' , 'green');
});
$("#Green").mouseleave(function()
{
    $("#text").css("color", "black"); 
 });

 $('#Red').mouseover(function()
{
    $('#text').css('color' , 'red');
});
$("#Red").mouseleave(function()
{
    $("#text").css("color", "black"); 
 });

 $('#Blue').mouseover(function()
{
    $('#text').css('color' , 'blue');
});
$("#Blue").mouseleave(function()
{
    $("#text").css("color", "black"); 
 });
});





 