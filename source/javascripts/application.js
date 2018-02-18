//= require jquery
//= require bootstrap
//= require_tree .

$(document).ready(function(event){
  $(function () {
    $('[data-toggle="popover"]').popover()
  });
  $(".show-partner").on("click", function(){
    var myDiv = document.getElementById('partners');
    myDiv.scrollIntoView();
  });
});



