$(function () {
    //��Ʒ���ġ����������tab����??
    (function () {
        var index;
        $("#tabWrap .tab li").mouseenter(function () {
            $(this).addClass("active").siblings("li").removeClass("active");
            index = $(this).index();
            $(".products>div").eq(index).addClass("selected").siblings().removeClass("selected");
        });
    }());
    //������ϵtab����??
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
    // ��������
    (function () {

        $(".companyLis li").click(function () {
            $(this).addClass("companyLisBg").siblings().removeClass("companyLisBg");
        });
            // ��������̱�logo�������ʾ��??
        $(".companyLogo .companyPub").click(function (e) {
            //��ֹ�¼�ð��
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

        // ����iphone�¼�ð��
        $("body").children().click(function () {
            //���ﲻҪд�κδ�??
        });
    }());
    //��������
    (function () {
        //��������,ͼƬ�͸���������??
        $("body").on("click",".personLis a",function () {
            //���ͼƬ��ʾ�л�??
            $(".changePerson").css("display","block");
            if($(this).attr("data-href")){
                //�ı��ͼ??
                var href = $(this).attr("data-href");
                console.log(href);
                $("#image").attr("src", href);
            }
            //������Ϣ����??
            var title = $(this).attr("title");
            var txt = $(this).parent().find(".aboutPer").html();
            $("#aboutPersonal").html(txt);
            //��ֹ��ת
            // return false;
        });
        //��������������������??
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
        //��Ӷ�ʱ??�Զ��л�����
        setInterval(function () {
            moveR();
        },2000);

        //���x�ر��л�??
        $(".aboutClose").hover(function () {
            $(this).addClass("aboutCloseRotate");
        },
        function () {
            $(this).removeClass("aboutCloseRotate");
        }).click(function () {
            $(".changePerson").css("display","none");
        });
        
    }());
    // �ƶ�����������
    (function () {
        // ���������˵�
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
    //�ɹ������ķ���ѡ��
    (function () {
      $("body").on("click",".jx li",function () {
          $(this).css("background-color","#FF0000").siblings().css("background-color","rgb(21,21,21)").find("a").css("color","#fff");
          $(this).find("a").css("color","#fff");
      });
    }());
    //��д��������
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
    //��ҳ�����б�
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
        /**�ֲ���ʼ**/
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
            // ��һ����ɫҪ�������23����ɫ��ͬ��ʣ�µĿ������ⶨ����ɫ����ɫ���ֲ�����ͳһ
            // ��һ��logo�ı���ͼ��36�е�ַ��ͬ�������Ŀ������ⶨ�壬·�����ֲ�ͼ����ͳһ
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
        /**�ֲ�����**/
    };
    bannerSlide();
});

































