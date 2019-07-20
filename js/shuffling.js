let shuffling = document.getElementsByClassName('shuffling')
let left = document.getElementById('left')
let right = document.getElementById('right')
let circle = document.getElementsByClassName('circle')
let circleChild = circle[0].children

var num = 1
var Status = true // 轮播是否自动的状态码

shuffling[0].style.backgroundImage = "url('./img/phone1.jpg')"
circleChild[0].style.backgroundColor = '#f2f2f2'


left.onclick = changeLeft; // 轮播图左移事件
right.onclick = changeRight;// 轮播图右移事件
shuffling[0].onmouseover = stopPicture; // 轮播图鼠标移入自动停止
shuffling[0].onmouseout = movePicture; // 轮播图鼠标移出重现自动




var t1 = window.setInterval(changeNum, 3000);
autoChangeCircle(); // 用定时器实现轮播图自动切换

function changeCircle() {
  for (let i = 0; i < circleChild.length; i++) {
    circleChild[i].style.backgroundColor = ''
  }
  circleChild[num - 1].style.backgroundColor = '#f2f2f2';
}

function changeNum() {
  if (Status == true) {
    num++;
    if (num > 3) {
      num = 1
    }
    shuffling[0].style.backgroundImage = "url('./img/phone" + num + ".jpg')";
    changeCircle();
  }
}


function changeLeft() {
  num--;
  if (num < 1) {
    num = 3
  }
  shuffling[0].style.backgroundImage = "url('./img/phone" + num + ".jpg')"
  changeCircle();
}

function changeRight() {
  num++;
  if (num > 3) {
    num = 1
  }
  shuffling[0].style.backgroundImage = "url('./img/phone" + num + ".jpg')"
  changeCircle();
}

function stopPicture() {
  Status = false;
}

function movePicture() {
  Status = true;
}

function autoChangeCircle() {
  for (let i = 0; i < circleChild.length; i++) {
    circleChild[i].onclick = function () {
      for (let i = 0; i < circleChild.length; i++) {
        circleChild[i].style.backgroundColor = ''
      }
      circleChild[i].style.backgroundColor = '#f2f2f2'
      num = i + 1;
      shuffling[0].style.backgroundImage = "url('./img/phone" + num + ".jpg')"
    }
  }
}