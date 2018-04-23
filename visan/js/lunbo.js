window.onload = function () {
    //js动画封装
    alert(1)
    function ani() {
    function animate(obj, target) {
        if (obj.timer) {
            clearInterval(obj.timer);
        }
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 40;
            if (leader > target) {
                step = -step;
            }

            var distance = Math.abs(leader - target);
            if (distance > Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }
        }, 10);
    }

    //0 :找对象
    var box = document.querySelector(".companyLogo");   //companyLogo
    var screen = box.children[0];  //screen
    var ul = screen.children[0];   //companyLisWrap
    var ulList = ul.children;      //ul

    var leftArr = document.querySelector(".companyArrL");
    var rightArr = document.querySelector(".companyArrR");

    var imgWidth = screen.offsetWidth;
    //1. 动态生成页面
    //1.2 生成假图片
    var clonePic = ulList[0].cloneNode(true);
    ul.appendChild(clonePic);

    //2 点击右箭头
    var pic = 0;
    rightArr.onclick = function () {
        //如果是最后一张的话，要立即跳到第一张
        if (pic == ulList.length - 1) {
            pic = 0;
            ul.style.left = "0px";
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, target);

    };
    //3 点击左箭头
    leftArr.onclick = function () {

        //如果是第一张的时候，让真图片变成假图片
        if (pic == 0) {
            pic = ulList.length - 1;
            ul.style.left = -pic * imgWidth + "px";
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ul, target);
    };
    }
};