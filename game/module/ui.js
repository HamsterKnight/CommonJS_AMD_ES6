// 用于将地图显示在界面上
import * as Map from './map.js'


var divContainer = document.getElementById("game")
var pieceWidth = 45
var pieceHeight = 45


function setContainer() {
  divContainer.style.width = pieceWidth * Map.width + 'px'
  divContainer.style.height = pieceHeight * Map.height + 'px'
}
function isCorrect(row, col) {
  const index = Map.correct.findIndex( _ => {
   return _.row == row && _.col == col
  })
  return index != -1 
}
/**
 *用来创建元素
 *
 * @param {*} row 行号
 * @param {*} col 列数
 */
function setDiv(row, col) {
  var value = Map.map[row][col]
  var item = document.createElement('div')
  item.className = 'item'
  if(value == Map.PLAYER) {
    item.classList.add('player')
  } else if (value == Map.WALL) {
    item.classList.add('wall')
  } else if (value == Map.BOX) {
    // 当前位置是否正确
    if(isCorrect(row, col)) {
      item.classList.add('correct-box')
    } else {
      item.classList.add('box')
    }
  } else {
    // 当前位置是正确的空白位置
    if(isCorrect(row, col)) {
      item.classList.add('correct')
    } else {
      return
    }
  }
  item.style.left = col * pieceWidth + 'px'
  item.style.top = row * pieceHeight + 'px'
  divContainer.appendChild(item)
}


function setContent() {
  //1.清空元素
  divContainer.innerHTML = ""
  //2.遍历地图内容，设置元素
  for(var row = 0; row < Map.width; row++) {
    for(var col = 0; col < Map.height; col++) {
      setDiv(col, row)
    }
  }
}
/**
 *该函数用于显示地图
 *
 * @export
 */
export default function showUI() {
  // 1.设置div的宽高
  setContainer()
  // 2.显示地图中的内容
  setContent()
}