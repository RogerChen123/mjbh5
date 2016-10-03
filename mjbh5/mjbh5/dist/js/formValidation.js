/**
 * Created by Administrator on 2016/9/26.
 */
$(function () {
    //验证手机号码格式正则
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    //验证只允许输入英文与中文正则
    var myreg1 = /^[a-zA-Z\u4e00-\u9fa5]+$/;
    var message = "";
    $("#submit").submit(function () {

        var tel = $("#phoneCode").val();
        var userName = $("#userName").val();
        var address = $("#address").val();
        var dateTime=$("#dateTime").val();

        if (userName == "") {
            message = "姓名不能为空";
            $("#errorTips").text(message);
            return false;

        } else if (tel == '') {
            message = "手机号码不能为空";
            $("#errorTips").text(message);
            return false;
        } else if (tel.length != 11) {
            message = "请输入11位有效手机号码";
            $("#tel").val("");
            $("#errorTips").text(message);
            return false;
        } else if (!myreg.test(tel)) {
            message = "请输入有效的手机号码";
            $("#tel").val("");
            $("#errorTips").text(message);
            return false;
        } else if (address == "") {

            message = "地址不能为空";
            $("#errorTips").text(message);
            return false;
        }

        if (!userName == "") {
            if (!myreg1.test(userName)) {
                message = "姓名只能输入中英文";
                $("#errorTips").text(message);
                $("#userName").val("");
                return false;
            }
        }
        if (dateTime == "") {
            message = "生日不能为空";
            $("#errorTips").text(message);
            return false;

        }

    });

});