$(function(){
  $("#green").mouseenter(function(){
    $("#text").css("color", "green");
  });
  $("#green").mouseleave(function(){
    $("#text").css("color", "black");
  });
  $("#red").mouseenter(function(){
    $("#text").css("color", "red");
  });
  $("#red").mouseleave(function(){
    $("#text").css("color", "black");
  });
  $("#blue").mouseenter(function(){
    $("#text").css("color", "blue");
  });
  $("#blue").mouseleave(function(){
    $("#text").css("color", "black");
  });
});
/* 2ème méthode correction JP
$(function(){
  $('.color').mouseenter(function(){
    divColor = $(this).attr('id');
    $('#text').css('color',divColor);
  });
  $('.color').mouseleave(function(){
    $('#text').css('color','black');
  });
  });
*/
