/*누를때마다 넘어가게 하는법 변수-선언할때 */ 
 /*var a 변수선언 반복적인*/
 /*let num=0;변환된값을줄때 =  같은게 아니다 같은건 == <>이건 */ 
/*const a고정된 값을쓸때*/
let num=0;
let deg=45;
let active=0;


$(".prev").click(function(){
num++ //num=num+1
$(".contents").css({"transform":"rotate("+ deg * num + "deg)"})
/*active 클래스 추가 */ 
//active 7,6,5,4,3,2,1,0 active=active-1 == active--
active=active==0?7:active-1;
$(".box").eq(active).addClass("active")
$(".box").eq(active).siblings().removeClass("active")
i=active==7?0:active+1

 $(".box").find("audio").get(i).load();
 $(".imgbox").removeClass("on")
 $(".imgbox").removeClass("off")

})


$(".next").click(function(){
num--
$(".contents").css({"transform":"rotate("+ deg * num + "deg)"})
   //active 0,1,2,3,4,5,6,7 active=active-1 == active--
   active=active==7?0:active+1;
 $(".box").eq(active).addClass("active")
 $(".box").eq(active).siblings().removeClass("active")

i=active==0?7:active-1

 $(".box").find("audio").get(i).load();
 $(".imgbox").removeClass("on")
 $(".imgbox").removeClass("off")

})
/* 오디오 제어*/
$(".play").click(function(){
    $(".box").eq(active).find("audio").get(0).play()
    $(".active").find(".imgbox").addClass("on")
    $(".active").find(".imgbox").removeClass("off")


})
$(".pause").click(function(){
    $(".box").eq(active).find("audio").get(0).pause()
    $(".active").find(".imgbox").addClass("off")

})
$(".load").click(function(){
    $(".box").eq(active).find("audio").get(0).load()
    $(".active").find(".imgbox").removeClass("on")
    $(".active").find(".imgbox").removeClass("off")

})

