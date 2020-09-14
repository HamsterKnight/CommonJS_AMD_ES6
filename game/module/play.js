import { map, width, height, PLAYER } from './map.js'

/**
 *方向：left,right,up,down
 *
 * @param {*} direction
 */
function playerMove(direction) {
  // 得到玩家位置
  var point = getPlayerCurrentPosition()
  // 得到玩家下一个位置
  var nextInfo = getPlayerNextInfo(point.row, point.col, direction)
  console.log(nextInfo)
}
/**
 *得到玩家在指定方向上的下一个位置（第几行，第几列，内容是是啥）
 * @param {*} row 指定的行
 * @param {*} col 指定的列
 * @param {*} direction 位置
 */
function getPlayerNextInfo(row, col, direction) {
  if(direction == 'left') {
    return {
      row: row,
      col: col - 1,
      value: map[row][col - 1]
    }
  }
  if(direction == 'right') {
    return {
      row: row,
      col: col + 1,
      value: map[row][col + 1]
    }
  }
  if(direction == 'up') {
    return {
      row: row - 1,
      col: col,
      value: map[row - 1][col]
    }
  }
  if(direction == 'down') {
    return {
      row: row + 1,
      col: col,
      value: map[row + 1][col]
    }
  }
}
/**
 * 获取玩家的位置
 * 
 */
function getPlayerCurrentPosition() {
  for(let row = 0; row < height; row++) {
    for(let col = 0; col < width; col++) {
      if(map[row][col] == PLAYER) {
        return {
          row,
          col
        }
      }
    }
  }
  throw new Error('地图上居然没有玩家')
}
export { playerMove }