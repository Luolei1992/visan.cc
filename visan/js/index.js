$(function () {
    //产品中心、解决方案的tab栏切??
    (function () {
        var index;
        $("#tabWrap .tab li").mouseenter(function () {
            $(this).addClass("active").siblings("li").removeClass("active");
            index = $(this).index();
            $(".products>div").eq(index).addClass("selected").siblings().removeClass("selected");
        });
    }());
    //服务体系tab栏切??
    (function () {
        $("#serverTab li.service1").css("background-image","url(./images/service1.png)");
        $("#serverTab li").mouseenter(function () {
            $("#serverTab li").each(function (index) {
                $(this).children("span").removeClass("showSan");
                $(this).css("background-image","url(./images/service0"+(index+1)+".png)");
            });
            $(this).children("span").addClass("showSan");
            $(this).addClass("serverCurrent").siblings("li").removeClass("serverCurrent");
            var index = $(this).index()+1;
            $(this).css("background-image","url(./images/service"+index+".png)");
            $("#optionWrap").children().eq(index-1).addClass("selected").siblings().removeClass("selected");
        });
        $("#serverTab li").mouseleave(function () {
            var index = $(this).index()+1;
            $(this).css("background-image","url(./images/service"+index+".png)");
        });
    }());
    // 合作厂商
    (function () {

        $(".companyLis li").click(function () {
            $(this).addClass("companyLisBg").siblings().removeClass("companyLisBg");
        });
            // 合作伙伴商标logo点击后显示动??
        $(".companyLogo .companyPub").click(function (e) {
            //阻止事件冒泡
            e.stopPropagation();
            $(".companyShow").each(function () {
                $(this).css("display","none").removeClass("companyClear companyLast");
            });
            $(this).children().eq(2).css("display","block").addClass("companyClear companyLast");
        });
        $(document).click(function (e) {
            e.stopPropagation();
            $(".companyShow").css("display","none");
        });

        // 兼容iphone事件冒泡
        $("body").children().click(function () {
            //这里不要写任何代??
        });
    }());
    //关于我们
    (function () {
        //关于我们,图片和个人内容切??
        $("body").on("click",".personLis a",function () {
            //点击图片显示切换??
            $(".changePerson").css("display","block");
            if($(this).attr("data-href")){
                //改变大图??
                var href = $(this).attr("data-href");
                console.log(href);
                $("#image").attr("src", href);
            }
            //个人信息的内??
            var title = $(this).attr("title");
            var txt = $(this).parent().find(".aboutPer").html();
            $("#aboutPersonal").html(txt);
            //阻止跳转
            // return false;
        });
        //关于我们座右铭内容切??
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
        //添加定时??自动切换文字
        setInterval(function () {
            moveR();
        },2000);

        //点击x关闭切换??
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
    //成功案例的分类选项
    (function () {
      $("body").on("click",".jx li",function () {
          $(this).css("background-color","#FF0000").siblings().css("background-color","rgb(21,21,21)").find("a").css("color","#fff");
          $(this).find("a").css("color","#fff");
      });
    }());
    //填写合作意向
    (function () {
        $(".orderLink a").click(function () {
            $(".begin .yun-thank").slideToggle();
        });
        $("#yun-industry input").focus(function () {
            $("#yun-industry .yun-industry").slideDown()
        });
        $("#yun-industry input").blur(function () {
            $("#yun-industry .yun-industry").slideUp()
        });
        $("#yun-industry input").keyup(function () {
            $("#yun-industry .yun-industry").slideUp()
        });
        $("#yun-industry .yun-industry ul li").click(function () {
            var txt = $(this).text();
            $("#yun-industry label input").val(txt);
        });
    }());
    //首页下拉列表
    (function () {
        var slideNum = 1;
        $(".indexSlideToggleButton").click(function () {
            $(".indexSlideToggle").slideToggle();
            slideNum ++;
            if(slideNum % 2 == 0){
                $(this).css("background",'url("./images/slideUp.png")');
            }else{
                $(this).css("background",'url("./images/slideDown.png")');
            }
        })
    }());
    function bannerSlide() {
        /**轮播开始**/
        var isRun = true;
        var liImgLength = $('#flexslider ul.slides li').length;
        var num = '<ul id="num">';
        for (var i = 1; i <= liImgLength; i++) {
            num += '<li></li>';
        }
        num += '</ul>';
        $('#flexslider ul.slides').after(num);
        showSlide(0);

        function showSlide(n) {
            if (n == $('#num li').index($('#num li.current'))) {
                return null;
            }
            $('#flexslider ul.slides li')
                .finish()
                .fadeOut(500)
                .filter(':visible')
                .css({
                    'display': 'none'
                })
                .end()
                .eq(n)
                .fadeIn(500)
                .css({
                    'display': 'block'
                });
            $('#num li')
                .filter('.current')
                .removeClass('current')
                .end()
                .eq(n)
                .addClass('current');
            var colorArr = ["#fff","#000","#fff","#000"];
            var srcLogoArr = ["./images/logo.png","./images/logo-h.png","./images/logo.png","./images/logo-h.png"];
            var srvNavArr = ["./images/subnav.png","./images/subnav-black.png","./images/subnav.png","./images/subnav-black.png"];
            // 第一个颜色要和上面的23行颜色相同，剩下的可以随意定义颜色，颜色和轮播个数统一
            // 第一个logo的背景图在36行地址相同，其他的可以随意定义，路径和轮播图个数统一
            if($(window).width() < 960) {
                console.log(112)
                $(".headerWrap .header .headerBox .logo .logoA").html('<img src="./images/mobile-w.png">')
                srcLogoArr = ["./images/mobile-w.png","./images/mobile-b.png","./images/mobile-w.png","./images/mobile-b.png"];
                changeBgs(n);
            }else{
                changeBgs(n);
            }
            function changeBgs(idx) {
                $("#header a.slideChangeColor").css("color",colorArr[idx]);
                $(".headerWrap .header .headerBox .logo .logoA img").attr({
                    "src":srcLogoArr[idx]
                });
                $(".headerWrap .header .headerBox .subNav").css({
                    "background-image":"url("+srvNavArr[idx]+")"
                })
            }
        }

        $('#num li').on('mouseenter.trigger', function () {
            showSlide($('#num li').index(this));
        });
        $('#flexslider span.flexslider-right').on('click', function () {
            if ($('#num li.current').next().length == 0) {
                $('#num li').eq(0).triggerHandler('mouseenter.trigger');
            } else {
                $('#num li.current').next().triggerHandler('mouseenter.trigger');
            }
        });
        $('#flexslider span.flexslider-left').on('click', function () {
            if ($('#num li.current').prev().length == 0) {
                $('#num li').eq($('#num li').index($('#num li').length)).triggerHandler('mouseenter.trigger');
            } else {
                $('#num li.current').prev().triggerHandler('mouseenter.trigger');
            }
        });
        $('span.flexslider-left,span.flexslider-right,#flexslider ul.slides,#num li').hover(function () {
            isRun = false;
        }, function () {
            isRun = true;
        });
        setInterval(function () {
            if (isRun) {
                if ($('#num li.current').next().length == 0) {
                    $('#num li').eq(0).triggerHandler('mouseenter.trigger');
                } else {
                    $('#num li.current').next().triggerHandler('mouseenter.trigger');
                }
            }
        }, 2000);
        /**轮播结束**/
    };
    bannerSlide();
});

































