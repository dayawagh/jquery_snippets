var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
});


$('#select-page').change(function() {
    var val = $('#select-page').val();
    if (val == 'all') {
        $('.all-div').fadeIn(450);
    } 
    else {
        $('.all-div').hide();
        $('#' + val).fadeIn(450);
    } 
});
