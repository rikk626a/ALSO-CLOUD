$(document).ready(function () {
     $(document).on('click', '.loadContent:not(.active)', function () {
          var getfile = $(this).data('url');
          $('.loadContent').removeClass('active');
          $(this).addClass('active');
          /*$("#containerZero").hide().load(getfile , function(){
            $("#containerZero").slideDown();
          });*/


          // for test
          $("#containerZero").hide().html(getfile);
          $("#containerZero").slideDown();
     });
     $('.loadContent').eq(0).click();
});
