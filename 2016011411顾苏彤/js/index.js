 //第一部分 鼠标焦点在搜索框中 弹出提示
  function tanchu(){
      alert("此按钮无效");
    };
  window.onload=function(){
    var shuru=document.getElementsByTagName('input')[0];
    shuru.focus()
  };
  
  //banner图片更换
  var banners = document.getElementsByClassName('banner')[0];
  var imgs = banners.getElementsByTagName('a');
  var i = 0;
  var set = setInterval(function(){
    imgs[i%4].style.display = 'none';
    i++;
    imgs[i%4].style.display = 'block';
    },3000);
  banners.onmouseover = function(){
    clearInterval(set);
  }
  banners.onmouseout = function(){
    setInterval(function(){
    imgs[i%4].style.display = 'none';
    i++;
    imgs[i%4].style.display = 'block';
  },3000)
  }