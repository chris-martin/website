(function($) {
  var next = 1;
  $.fn.idgen = function() {
    this.each(function() {
      var id = $(this).attr('id');
      if (!id) {
        id = 'idgen-' + (next++);
        $(this).attr('id', id);
      }
    });
    return this.attr('id');
  };
})(jQuery);