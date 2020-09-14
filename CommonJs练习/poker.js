function  Poker(color, num) {
  this.color = color
  this.num = num
}
Poker.prototype.toString = function() {
  let str = ''
  switch (this.color) {
    case 1:
      str += '♠'
      break;
    case 2:
      str += '♥'
      break;
    case 3:
      str += '♣'
      break;
    case 4:
      str += '◇'
      break;
  }
  switch (this.num) {
    case 1:
      return str += "A"
    case 11:
      return str += "J"
    case 12:
      return str += "Q"
    case 13:
      return str += "K"
    case 14:
      return str += 'joker'
    case 15: 
      return str += 'JOKER'
    default:
      return str += this.num
  }
}

function createPokerList() {
  const pokeList= []
  for(let i = 1; i <= 13; i++) {
    for(let j = 1; j <= 4; j++) {
      pokeList.push(new Poker(j, i).toString())
    }
  }
  pokeList.push(new Poker(null, 14).toString())
  pokeList.push(new Poker(null, 15).toString())
  return pokeList
}
function dispatchPoker(pokerList) {
  var player1 = pokerList.slice(0, 17)
  var player2 = pokerList.slice(17, 34)
  var player3 = pokerList.slice(34, 52)
  var desk = pokerList.slice(52)
  console.log('player1', player1.join('   '))
  console.log('player2', player2.join('   '))
  console.log('player3', player3.join('   '))
  console.log('desk', desk.join('   '))
  
}
module.exports = {
  Poker,
  createPokerList,
  dispatchPoker
}