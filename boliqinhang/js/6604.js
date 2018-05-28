$(function () {
    $('.npagePage#mproject #projectlist .projectitem').eq(0).css({
        'height': $('.npagePage#mproject #projectlist .projectitem').eq(1).height()
    });
    $('.npagePage#mproject #projectlist .projectitem').eq(0).find('img').load(function () {
        $('.npagePage#mproject #projectlist .projectitem').eq(0).css({
            'height': $('.npagePage#mproject #projectlist .projectitem').eq(1).height()
        });
    });
    $(window).resize(function () {
        $('#indexPage #projectlist #projectitem_0').css({
            'height': function () {
                return $('#indexPage #projectlist #projectitem_1').outerHeight() * 2 + parseInt($('#indexPage #projectlist #projectitem_0').css('margin-bottom'));
            }
        });
        $('.npagePage#mproject #projectlist .projectitem').eq(0).css({
            'height': $('.npagePage#mproject #projectlist .projectitem').eq(1).height()
        });
    });
})