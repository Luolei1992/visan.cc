/**
 * Created by gs on 2017/3/2 0002.
 */
window.onload = function () {
    var box = document.getElementById("box");
    var tanchuang = document.getElementById("tanchuang");
    box.onclick = function () {
        tanchuang.style.display = "block";
    };


    //    当前元素的标签高亮显示
    function nav(name, csskey,cssvalue) {
        var url = window.location.pathname + window.location.search;
        console.log(url);
        console.log(window.location.pathname);
        console.log(window.location.search);
        var arr = url.split("/");
        var v1 = "";
        $(name).each(function (i) {
            v1 = $(this).attr("href");
            if (v1 == arr[i]) {
                console.log($(this));
                $(this).css(csskey, cssvalue);
            };

        })
    };
    $(function () {
        nav(".top ul li a", "background-color", "red");
    })

};
