$(function () {
    $("div[href]").click(function (event) {
        //此处检查协议是否被注册
        window.protocolCheck($(this).attr("href"),
            function () {
                alert("protocol not recognized");
            });
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    });
});
