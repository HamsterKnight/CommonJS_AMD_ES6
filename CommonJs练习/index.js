const util = require('./util')
const aboutPoker = require('./poker')
const pokerList = aboutPoker.createPokerList()
util.sortArr(pokerList)
console.log(aboutPoker.dispatchPoker(pokerList))



/* util.sortArr(arr) */
