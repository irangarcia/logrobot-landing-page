$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i')

    nav.slideToggle(200);

    if (icon.hasClass('fa-bars')){
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
    } else {
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }
});