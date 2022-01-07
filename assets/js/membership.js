function plus(add) {
	var nex = add.previousElementSibling;
	nex.value = Number(nex.value) + 1; 
	var s = parseInt(add.parentNode.parentNode.parentNode.previousElementSibling.innerHTML);
	var num = s*Number(nex.value);
	nex.parentNode.parentNode.parentNode.nextElementSibling.innerHTML = num;
  }
  
  function minus(reduce) {
	var pre = reduce.nextElementSibling;
	if (pre.value >=2){
	  pre.value = Number(pre.value) - 1; 
	  var s = parseInt(reduce.parentNode.parentNode.parentNode.previousElementSibling.innerHTML);
	  var num = s*Number(pre.value);
	  pre.parentNode.parentNode.parentNode.nextElementSibling.innerHTML = num;
	}
  }
  
  function deltr(td) {
	var table = td.parentNode.parentNode;
	var tr = td.parentNode;
	table.removeChild(tr);
  }


  //gotop
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#gotop').fadeIn();
    } else {
        $('#gotop').fadeOut();
    }
});

$('#gotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }); 
    return false;
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
