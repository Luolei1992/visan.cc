/**
 * Created by Administrator on 2016/9/22.
 */
/**背景视频  当屏幕尺寸改变时 调整video 位置为屏幕中央**/
$(function(){
    var vWidth=-(1906-window.screen.width)/2;
    $("video").css("left",vWidth+"px");
});

window.onresize=function videoWH(){
    //console.log(document.body.clientWidth);
//console.log($(".video>video").width());
    if(window.screen.width<1200){
        //$(".video").width();
        var vWidth=-(1906-window.screen.width)/2;
        //console.log(vWidth);
        $("video").css("left",vWidth+"px");
    }
};