/**
 * Created by Administrator on 2016/9/20.
 */
$(function () {

    $("#navbarToggle").click(function () {

        $(".mjb-navbar").toggle();
    });
    var sideMenu = function (selectId, targetId) {

        $(selectId).hover(function () {


            $(targetId).addClass('show').removeClass('hide');

        }, function () {

            $(targetId).addClass('hide').removeClass('show');
        });

    };
    sideMenu($("#enterMjb"), $("#MjbEnterBox"));
    sideMenu($("#newsMjb"), $("#MjbNewsBox"));
    sideMenu($("#joinMjb"), $("#MjbJoinBox"));
    sideMenu($("#cooperateMjb"), $("#MjbCooperateBox"));
    sideMenu($("#aboutMjb"), $("#MjbAboutBox"));

});