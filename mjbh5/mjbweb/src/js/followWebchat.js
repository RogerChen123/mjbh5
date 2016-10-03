/**
 * Created by Administrator on 2016/9/27.
 */

$(function () {
    $('#weibo').hover(function () {

        $('#weibo_box').removeClass('hide').addClass('show');

    }, function () {
        $('#weibo_box').removeClass('show').addClass('hide');
    });

    $('#weixin').hover(function () {

        $('#weixin_box').removeClass('hide').addClass('show');

    }, function () {
        $('#weixin_box').removeClass('show').addClass('hide');
    });
});