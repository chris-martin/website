(function($) {

  $(function() {

    var updateLabel = $('body>.middle .content .status .update label');
    var statusButtons = $('body>.middle .content .status .buttons>*');
    var textarea = $('body>.middle .status textarea');
    var form = $('body>.middle .status form');
    var feed = $('body>.middle .feed');

    textarea.autoGrow().focus().keypress(function(e) {
      if (e.which == 13 && !e.shiftKey) {
        setTimeout(function() {
          form.submit();
        }, 0);
      }
    });

    form.submit(function(e) {
      var entry = $('<div/>').addClass('message')
        .text(textarea.val()).prependTo(feed);
      setTimeout(function() {
        entry.fadeOut(3000, function() {
          entry.remove();
        });
      }, 3000);
      textarea.val('');
      return false;
    });

    updateLabel.attr('for', textarea.idgen());

    statusButtons.each(function() {
      $(this).click(function() {
        statusButtons.removeClass('selected');
        $(this).addClass('selected');
        console.log(this);
      });
    });

  });

}(jQuery));