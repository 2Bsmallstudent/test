let optionData = document.getElementsByClassName('selectOptions')
let optionChild = optionData[0].children

titleClick() // 标题点击事件
titleOver() // 标题鼠标移入事件

function titleClick() {
  for (let i = 0; i < optionChild.length; i++) {
    optionChild[i].onclick = function () {
      for (let i = 0; i < optionChild.length; i++) {
        optionChild[i].style.border = 'none'
      }
      optionChild[i].style.borderBottom = '1px solid #C3C6C8'
    }
  }
}


function titleOver() {
  for (let i = 0; i < optionChild.length; i++) {
    optionChild[i].onmouseover = function () {
      for (let i = 0; i < optionChild.length; i++) {
        optionChild[i].style.border = 'none'
      }
      optionChild[i].style.borderBottom = '1px solid #C3C6C8'
    }
  }
}


