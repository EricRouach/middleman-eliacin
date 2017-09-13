//= require jquery
//= require bootstrap
//= require_tree .

$(document).ready(function(event){
  $(function () {
    $('[data-toggle="popover"]').popover()
    html : true,
    content: function() {
      return $('#popover_content_wrapper').html();
    }
  });
});






