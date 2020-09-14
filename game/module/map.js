const SPACE = 0
const PLAYER = 1
const WALL = 2
const BOX = 3
// 仅用于记录地图中的内容（墙，玩家，空白，地图）
/**
 * 0：空白，
 * 1：玩家，
 * 2: 强
 * 3：箱子
 * 4: 正确位置
  */
 // 地图
const map = [
  [0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 2, 0, 1, 0, 2, 0, 0],
  [0, 0, 2, 0, 3, 0, 2, 0, 0],
  [2, 2, 2, 0, 0, 0, 2, 2, 2],
  [2, 0, 0, 0, 3, 0, 0, 0, 2],
  [2, 0, 3, 3, 3, 3, 3, 0, 2],
  [2, 0, 0, 0, 3, 0, 0, 0, 2],
  [2, 2, 0, 3, 3, 3, 0, 2, 2],
  [0, 2, 0, 0, 0, 0, 0, 2, 0],
  [0, 2, 0, 0, 3, 0, 0, 2, 0],
  [0, 2, 0, 0, 0, 0, 0, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 0]
]

// 正确位置
const correct = [
  {row: 3, col: 4},
  {row: 4, col: 4},
  {row: 5, col: 2},
  {row: 5, col: 3},
  {row: 5, col: 4},
  {row: 5, col: 5},
  {row: 5, col: 6},
  {row: 6, col: 4},
  {row: 7, col: 4},
  {row: 8, col: 4},
  {row: 9, col: 4},
  {row: 10, col: 4},
]
const width = map[0].length
const height = map.length
export { map, correct, width, height, SPACE, PLAYER, WALL, BOX}