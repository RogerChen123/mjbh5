/**
 * Created by Administrator on 2016/9/24.
 */
$(function () {

    var debug=false;

    if(debug){
        // 根据不同的终端，跳转到不同的地址
        var theUrl = 'http://www.51mjb.com/jump.html';
        var options = {
            render: "canvas",    //设置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
            text:theUrl, //扫描了二维码后的内容显示,在这里也可以直接填一个网址，扫描二维码后
            width: "120",               //二维码的宽度
            height: "120",              //二维码的高度
            background: "#ffffff",       //二维码的后景色
            foreground: "#000000",        //二维码的前景色
            src: 'img/qrcode_logo.png'             //二维码中间的图片
        };

        $("#qrcode").qrcode(options);

    }else{
        var theUrl = 'http://192.168.1.122/mjbweb/src/jump.html';
        var options = {
            render: "canvas",    //设置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
            text:theUrl, //扫描了二维码后的内容显示,在这里也可以直接填一个网址，扫描二维码后
            width: "120",               //二维码的宽度
            height: "120",              //二维码的高度
            background: "#ffffff",       //二维码的后景色
            foreground: "#000000",        //二维码的前景色
            src: 'img/qrcode_logo.png'             //二维码中间的图片
        };

        $("#qrcode").qrcode(options);
    }


});