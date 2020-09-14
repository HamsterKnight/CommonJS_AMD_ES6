module.exports = {
  sortArr(arr) {
    arr.sort(() => {
      return Math.random() - 0.5
    })
  }
}