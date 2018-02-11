//= require jquery
//= require bootstrap
//= require_tree .

$(document).ready(function(event){
  $(function () {
    $('[data-toggle="popover"]').popover()
  });
  $(".show-partner").on("click", function(){
    document.getElementById('#partners').scrollIntoView();
  });
});



