$(function() {
    // id属性がredの要素がクリックされたら
    $('#change-color').on('click', function(){
      // id属性がtargetの要素のcolorプロパティをredにする
      $('#target').css('color', 'red');
    });

    $('#change-text').on('click', function() {
        $('#target').text('Hello！');
    });

    $('#fade-out').on('click', function () {
        $('#target').fadeOut();
      });
    $('#fade-in').on('click', function () {
        $('#target').fadeIn();
    });
});