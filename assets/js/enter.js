//登入
$(function ()
{
  $('.change a').click(function ()
  {
  $('.signform').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
  });
})

function start() {
document.getElementById('signform').style.display=""
}

function signclose() {
    document.getElementById('signform').style.display="none"
}


    $(document).ready(function () {
     var li_width=$(".big li").first().innerWidth();
     var index;
     //改變預覽圖片的類名
     function changeClass(){
     var index=$(".big li").attr("title");
     $(".small li").eq(index).addClass("active").siblings().removeClass("active");
     }
     //點擊向右按鈕，ul.big向左移動一張圖片的寬度，顯示下一張圖片（此時第一張圖片已經看不到）。動畫結束後將第一張圖片放到ul的最後，同時將ul.big的marginLeft設為0
     $(".right").click(function () {
      $(".big").stop(true).animate({"marginLeft":-li_width},1000,function () {
       $(".big li").first().appendTo($(".big"));
       $(".big").css("marginLeft",0);
       changeClass();
        });
       });
     //點擊向右按鈕,瞬間將最後一張圖片移至最前端同時使ul.big向左移一張圖片的寬度（顯示的圖片不變）。然後執行動畫ul.big向右移動將剛移至前面的圖片顯示出來
     $(".left").click(function () {
      $(".big").css("marginLeft",-li_width);
      $(".big li").last().prependTo($(".big"));
      $(".big").stop(true).animate({"marginLeft":0},function(){
       changeClass();
      }) ;
     });
    });
 