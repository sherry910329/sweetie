// 首頁文字特效
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  $('#gotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }); 
    return false;
});

//gotop
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#gotop').fadeIn();
    } else {
        $('#gotop').fadeOut();
    }
});

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




    
 

