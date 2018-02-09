'use strict'

$('.neat').click(() => {
  document.location.href = 'animation.html';
})

$('.back').click(() => {
  document.location.href = 'main.html';
})

$('.snaps').find('img').bind('click', function() {
  var extensionMatch = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gmi;
  var src = $(this).attr('src');
  var temp = src.match(extensionMatch);

  src.includes('.thumb') ? src = src.replace(/.thumb./, '.') : src = src.replace(/[0-9a-z]+$/, 'thumb' + temp);

  $(this).attr('src', src);
})
