const BubbleSort = (arr) => {
  let n = arr.length
  if (n <= 1) return arr

  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

export default BubbleSort
