/**
 * Created by Administrator on 2016/9/26.
 */
$(function () {

    var number = parseInt($('#number').val());
    var price = parseFloat($('#price').text());
    price = price.toFixed(2);
    var surplus = parseInt($('#surplus').text());
    var total = price * number;
    total = total.toFixed(2);
    $('#total').text(total);
    console.log(total);

    $("#add").click(function () {

        if (number < 1) {
            number = 1;
            $("#number").val(number);
            total = price * number;
            total = total.toFixed(2);
            $('#total').text(total);
            console.log(total);
        } else {


            if (number <= surplus - 1) {
                number = number + 1;
                $("#number").val(number);
                total = price * number;
                total = total.toFixed(2);
                $('#total').text(total);
                console.log(total);
                $('#tips').text("");
            } else {
                total = price * number;
                total = total.toFixed(2);
                $('#total').text(total);
                $('#tips').text("没有更多库存");

            }
        }
    });
    $("#sub").click(function () {
        if (number <= 1) {
            number = 1;
            $("#number").val(number);
            total = price * number;
            total = total.toFixed(2);
            $('#total').text(total);
            $('#tips').text("至少选择一件");
        } else {
            number = number - 1;
            $("#number").val(number);
            total = price * number;
            total = total.toFixed(2);
            $('#total').text(total);
            $('#tips').text("");

        }
    });


});