$(function() {
    $(".events-section div.velocity .fast").click( function(){
          var speed = parseInt($("marquee").attr("scrollamount"));
          $("marquee").attr("scrollamount", speed+10);});
    $(".events-section div.velocity .slow").click( function(){ 
          var speed = parseInt($("marquee").attr("scrollamount"));
          $("marquee").attr("scrollamount", speed-10);});
});