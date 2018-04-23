$(function () {
    //产品中心、解决方案的tab栏切换
    (function () {
        $("#tabWrap .tab li").mouseenter(function () {
            $(this).addClass("active").siblings("li").removeClass("active");
            var index = $(this).index();
            $(".products>div").eq(index).addClass("selected").siblings().removeClass("selected");
        });
    }());
    // 合作厂商
    (function () {
        //合作伙伴商标logo
        $(".companyLogo .companyPub").each(function () {
            $(this).each(function () {
                $(this).append('<div class="companyShow">' +
                    '<h3 class="companyTitle">Motorala 杭州</h3>' +
                    '<p>总部设在美国伊利诺伊州绍姆堡.位于芝加哥市郊.世界财富百强企业之一...</p>' +
                    '<h3 class="companyTitle">合作规模:20万元</h3>' +
                    '<a href="www.motorola.com.cn">www.motorola.com.cn</a>' +
                    '</div>' +
                    '<i id="showClose"></i>');
            })
        });
        // 合作伙伴商标logo点击后显示动画
        $(".companyLogo .companyPub").click(function (e) {
            //阻止事件冒泡
            e.stopPropagation();
            $(".companyShow").each(function () {
                $(this).css("display","none").removeClass("companyClear companyLast");
            });
            $(this).children().eq(1).css("display","block").addClass("companyClear companyLast");
        });
        $(document).click(function (e) {
            e.stopPropagation();
            $(".companyShow").css("display","none");
        });

        // 兼容iphone事件冒泡
        $("body").children().click(function () {
            //这里不要写任何代码
        });

        // if($(".companyShow").css("display") == "block"){
        //     setTimeout(function () {
        //         $(".companyShow").css("display","none");
        //     },2500);
        // }
        // 合作伙伴行业分类和合作时间
        $(".companyLis li").click(function () {
            $(this).addClass("companyLisBg").siblings().removeClass("companyLisBg");
        });
    }());
    //关于我们
    (function () {
        //关于我们,图片和个人内容切换
        $(".personLis a").click(function () {
            //点击图片显示切换区
            $(".changePerson").css("display","block");
            //改变大图片
            var href = $(this).attr("href");
            $("#image").attr("src", href);
            //个人信息的内容
            var title = $(this).attr("title");
            var txt = $(this).parent().find(".aboutPer").html();
            $("#aboutPersonal").html(txt);
            //阻止跳转
            return false;
        });
        //关于我们座右铭内容切换
        var idx = 1;
        var num = $(".motto").children().length + 1;
        $("#aboutR").click(function () {
            ++idx;
            if(idx == num){
                idx = 1;
            }
            $(".perDes"+idx).css("display","block").siblings().css("display","none");
        }).mouseenter(function () {
            $(this).addClass("tranScale");
        }).mouseleave(function () {
            $(this).removeClass("tranScale");
        });
        $("#aboutL").click(function () {
            --idx;
            if(idx == 0){
                idx = 3;
            };
            $(".perDes"+idx).css("display","block").siblings().css("display","none");
        }).mouseenter(function () {
            $(this).addClass("tranScale");
        }).mouseleave(function () {
            $(this).removeClass("tranScale");
        });
        function moveR() {
            ++idx;
            if(idx == 4){
                idx = 1;
            };
            $(".perDes"+idx).css("display","block").siblings().css("display","none");
        };
        //添加定时器,自动切换文字
        setInterval(function () {
            moveR();
        },2000);

        //点击x关闭切换区
        $(".aboutClose").hover(function () {
            $(this).addClass("aboutCloseRotate");
        },
        function () {
            $(this).removeClass("aboutCloseRotate");
        }).click(function () {
            $(".changePerson").css("display","none");
        });
        
    }());
    // 移动端下拉适配
    (function () {
        // 更多下拉菜单
        // setTimeout(function () {
        //     $("#solveMoreSlide").css("display","none");
        //     $("#productsMoreSlide").css("display","none");
        // },3000);

        $("#solveMoreSlide").click(function () {
            $("#solveWrap1").addClass("solveWrap10").stop().removeClass("solveWrap11");
            $(this).css("display","none");
        });
        $("#productsMoreSlide").click(function () {
            $("#solveWrap2").addClass("solveWrap10").stop().removeClass("solveWrap11");
            $(this).css("display","none");
        });
    }());


});

































