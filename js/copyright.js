(function ($) {
  "use strict"; // Start of use strict
  $( document ).ready(function() {
    $('#copyright-year').html(getCurrentYear())
  });

  function getCurrentYear() {
    var d = new Date();
    return d.getFullYear();
  }
})(jQuery); // End of use strict
