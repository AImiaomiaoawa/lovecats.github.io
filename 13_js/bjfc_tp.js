$(function() {
    $(".gallery-section img").hover(  
      function(){ $(this).css("border-color", "red");},
      function(){ $(this).css("border-color", "white");}
    )
});