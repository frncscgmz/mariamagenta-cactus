$(document).ready(function() {

   /** Masonry */
   var container = document.querySelector('#container');
   var msnry = new Masonry( container, {
      // options
      columnWidth: 100,
      itemSelector: '.item'
   });

   /** Fancybox */
   $(".fancybox").fancybox();
});
