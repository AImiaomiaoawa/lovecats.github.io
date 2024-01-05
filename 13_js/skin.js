$(function() {
      $("#skin").click(
        function(){ $("input:text").toggleClass("input"); 
                    $("input:password").toggleClass("input");
                    $("input:radio").toggleClass("input");
                    $("input:checkbox").toggleClass("input");
                    $("fieldset").toggleClass("skin");}
      );
});