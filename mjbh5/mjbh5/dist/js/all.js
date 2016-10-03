/**
 * Created by Administrator on 2016/9/8.
 */

/*
 * js模拟单选功能（性别图片单选功能）
 * 类库：zepto.js
 * 功能名称：radioBtn
 * 作者:chenyilong
 * 日期：2016-9-8
 *
 * */
(function () {
    $(function () {
        var baseUrl = '/mjbh5/';
        var isSelectedSrc = baseUrl + 'images/selected.png';
        var diselectSrc = baseUrl + "images/diselect.png";
       /* var menSrc = $('#men_select img')[0].src;
        var womenSrc = $('#women_select img')[0].src;
        var sex = '';*/

        var radio_btn = function (id, selected, diselect) {

            $(id).click(function () {

                $(selected).attr('src', isSelectedSrc);
                $(diselect).attr('src', diselectSrc);
            });


        };

        radio_btn('#men','#men_select img','#women_select img');
        radio_btn('#women','#women_select img','#men_select img');
        radio_btn('#men_select img','#men_select img','#women_select img');
        radio_btn('#women_select img','#women_select img','#men_select img');


    });

})();