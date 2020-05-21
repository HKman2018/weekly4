$(function() {
    $('#glassList>li[id!="opticalStyle"]').hide();
    $('.product-nav a').click(function() {
        $('#glassList>li').hide();
        $($(this).attr("href")).show();
        $('.product-nav a').removeClass('current')
        $(this).addClass('current');
        return false;
    })
})