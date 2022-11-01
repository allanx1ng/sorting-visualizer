const BubbleSort = (array) => {
  var animations = []
  let arr = [...array]

  let n = arr.length

  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        animations.push(j)
      }
    }
  }

  return animations
}

export default BubbleSort
