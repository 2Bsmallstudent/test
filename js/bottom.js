let clickContent = document.getElementsByClassName('clickContent')
let pContent = document.getElementById('bottom').getElementsByTagName('p')
var Status1 = false

mouseClick() // 鼠标点击导航行事件
mouseOn() // 鼠标移入导航事件
clearValue() // 清楚导航行的所有边框

function mouseClick() {
  for (let j = 0; j < clickContent.length; j++) {
    for (let i = 0; i < clickContent[j].children.length; i++) {
      clickContent[j].children[i].onclick = function () {
        for (let i = 0; i < clickContent[j].children.length; i++) {
          clickContent[j].children[i].style.textDecoration = 'none'
        }

        for (let z = 0; z < pContent.length; z++) {
          pContent[z].style.textDecoration = 'none'
        }
        clickContent[j].children[i].style.textDecoration = 'underline'
        Status1 = !Status1
      }
    }
  }
}

function mouseOn() {
  for (let j = 0; j < clickContent.length; j++) {
    for (let i = 0; i < clickContent[j].children.length; i++) {
      clickContent[j].children[i].onmouseover = function () {
        for (let i = 0; i < clickContent[j].children.length; i++) {
          clickContent[j].children[i].style.textDecoration = 'none'
        }

        for (let z = 0; z < pContent.length; z++) {
          pContent[z].style.textDecoration = 'none'
        }

        clickContent[j].children[i].style.textDecoration = 'underline'
      }
    }
  }
}


function clearValue() {
  for (let j = 0; j < clickContent.length; j++) {
    clickContent[j].onmouseout = function () {
      if (Status1 == false) {
        for (let i = 0; i < pContent.length; i++) {
          pContent[i].style.textDecoration = 'none'
        }
      }
    }
  }
}


