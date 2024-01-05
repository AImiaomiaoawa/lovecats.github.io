$(function() {
    $("#inverse").change(
       function(){
          $("[name='interest']").each(
           function() {
             if($(this).prop("checked"))  $(this).prop("checked", false);
             else $(this).prop("checked", true);
           }
        );
      }
   );
});