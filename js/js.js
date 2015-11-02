/**
 * Created by Administrator on 15-8-19.
 */
$('.nav li,.nav dd').each(function(){
    if($(this).children(".navDl").hasClass("navDl"))
    {
        $(this).mouseenter(function(){
            if(this.nodeName=="DD")
            {
                $(this).children("a").addClass("navDdCur");
            }
            $(this).children(".navDl").show();
        });
        $(this).mouseleave(function(){
            if(this.nodeName=="DD")
            {
                $(this).children("a").removeClass("navDdCur");
            }
            $(this).children(".navDl").hide();
        });
    }
});


/*flash*/
$("#flash").mouseenter(function(){
    $('.flash_left,.flash_right').fadeIn();
    clearInterval(autoDo);
});
$("#flash").mouseleave(function(){
    $('.flash_left,.flash_right').fadeOut();
    autoDo=setInterval(function(){
        $("#flash_right").click();
    },3000);
});

$(".flash_btn span").mouseenter(function(){
    if($(this).hasClass("flash_btnCur"))
        return;
    var newPos=$(this).index(".flash_btn span");//当前位置
    var oldPos=$(".flash_btnCur").index(".flash_btn span");//之前位置

    fade(oldPos,newPos);
});

function fade(oldPos,newPos){
    $(".flash_img li").stop(false,true);//第一个参数false表示不清楚队列，第二个参数true表示立即完成动画（到结果状态）


    $(".flash_btn span").eq(newPos).addClass("flash_btnCur");
    $(".flash_btn span").eq(oldPos).removeClass("flash_btnCur");

    $(".flash_img li").eq(newPos).fadeIn();
    $(".flash_img li").eq(oldPos).fadeOut();
}

$(".flash_right").click(function(){
    var oldPos=$(".flash_btnCur").index(".flash_btn span");//之前位置
    var lastPos=$(".flash_btn span").length-1;//最后位置
    var newPos=oldPos==lastPos?0:oldPos+1;
    fade(oldPos,newPos);
});

$(".flash_left").click(function(){
    var oldPos=$(".flash_btnCur").index(".flash_btn span");//之前位置
    var lastPos=$(".flash_btn span").length-1;//最后位置
    var newPos=oldPos==0?lastPos:oldPos-1;
    fade(oldPos,newPos);
});

var autoDo=setInterval(function(){
    $(".flash_right").click();
},3000);


/*四个球*/
$(".circle_main li").mouseenter(function(){
    if($(this).hasClass("circle_cur"))
        return;//跳出函数

    var oldPos=$(".circle_cur").index();//之前位置
    $(this).addClass("circle_cur").stop().animate({width:"502px"},300);
    $(".circle_main li").eq(oldPos).removeClass("circle_cur").stop().animate({width:"167px"},300);
});

/*图放大*/
$(".about_left").mouseenter(function(){
    $(this).find("img").stop().animate({width:"580px",margin:"-20px 0 0 -20px"},300);
    $(this).find("p").stop().animate({top:0},300);
});
$(".about_left").mouseleave(function(){
    $(this).find("img").stop().animate({width:"491px",margin:"0px 0 0 0px"},300);
    $(this).find("p").stop().animate({top:'241px'},300);
});
/*左右切换*/
$('#about .ul_right').click(function(){
    var oldPos=$('.ul_box li').index($('.ul_current'));
    var newPos=oldPos<$('.ul_box li').length-1?oldPos+1:0;
    $('.ul_box li').eq(oldPos).removeClass('ul_current').hide();
    $('.ul_box li').eq(newPos).addClass('ul_current').show();
});
$('#about .ul_left').click(function(){
    var oldPos=$('.ul_box li').index($('.ul_current'));
    // alert(oldPos);
    var newPos=oldPos==0?$('.ul_box li').length-1:oldPos-1;
    $('.ul_box li').eq(oldPos).removeClass('ul_current').hide();
    $('.ul_box li').eq(newPos).addClass('ul_current').show();
});
/*左右move*/
$('#friend .ul_right').click(function(){
    var oldPos=$('.ul_box li').index($('.ul_current'));
    var newPos=oldPos<$('.ul_box li').length-1?oldPos+1:0;
    $('.ul_box li').eq(oldPos).removeClass('ul_current').hide();
    $('.ul_box li').eq(newPos).addClass('ul_current').show();
});
$('#friend .ul_left').click(function(){
    var oldPos=$('.ul_box li').index($('.ul_current'));
    // alert(oldPos);
    var newPos=oldPos==0?$('.ul_box li').length-1:oldPos-1;
    $('.ul_box li').eq(oldPos).removeClass('ul_current').hide();
    $('.ul_box li').eq(newPos).addClass('ul_current').show();
});
/*回到顶部*/
$(window).scroll(function(){
    var winH=$(window).height();//可视窗口高度//等价document.documentElement.clientHeight
    var scrollTop=$(window).scrollTop();//当前滚去了多少高度//document.documentElement.scrollTop
    if(scrollTop<=winH)
    {
        $('#toTop').hide();
    }
    else
    {
        $('#toTop').show();
    }
});
$('#toTop').click(function(){
   // $("body").animate({scrollTop:0},100);//支持非IE非FF
   // $("html").animate({scrollTop:0},100);//支持IE和FF
    $("body,html").animate({scrollTop:0},100);
});