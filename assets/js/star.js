//星等
$(function () {
    var aLi = $('.list1 li');
    var leng = aLi.length;
    var arr = ['很差', '較差', '一般', '較好', '很好'];
    var arr2 = ['../img/star.png','../img/star.png','../img/star.png',
                  '../img/star.png','../img/star.png'];
    var s1 = '';
   
    aLi.click(function () {
      for (var j = 0; j < leng; j++) {
        aLi.eq(j).find('img').attr("src", "../img/star.png");
      };
      var index = $(this).index();
      if (index < 2) {
        for (var j = 0; j <= index; j++) {
          aLi.eq(j).find('img').attr("src", "../img/star-1.png");
          s1 = arr[index];
          arr2[j] = aLi.eq(j).find('img').attr('src');
        }
      } else {
        for (var j = 0; j <= index; j++) {
          aLi.eq(j).find('img').attr('src', '../img/star-1.png');
          s1 = arr[index];
          arr2[j] = aLi.eq(j).find('img').attr('src');
        }
      };
   
      for (var k = index + 1; k < leng; k++) {
        arr2[k] = '../img/star.png';
      };
      $('.s1').text(s1);
    });
   
    aLi.hover(function () {
      for (var j = 0; j < leng; j++) {
        aLi.eq(j).find('img').attr('src', '../img/star-1.png');
      };
      var index = $(this).index();
      if (index < 2) {
        for (var j = 0; j <= index; j++) {
          aLi.eq(j).find('img').attr('src', '../img/star-1.png');
          $('.s1').text(arr[index]);
        }
      } else {
        for (var j = 0; j <= index; j++) {
          aLi.eq(j).find('img').attr('src', '../img/star-1.png');
          $('.s1').text(arr[index]);
        }
      }
    }, function () {
      for (var index = 0; index < leng; index++) {
        aLi.eq(index).find('img').attr('src', arr2[index]);
      }
      $('.s1').text(s1);
    });
 })
