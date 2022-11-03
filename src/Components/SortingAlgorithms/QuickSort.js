const QuickSort = (array) => {
  let animations = []
  let arr = [...array]

  const quickSort = (arr, start, end) => {
    if (start >= end) {
      return
    }
    let index = partition(arr, start, end)
    quickSort(arr, start, index - 1)
    quickSort(arr, index + 1, end)
  }

  const partition = (arr, start, end) => {
    let pValue = arr[end]
    let pIndex = start
    for (let i = start; i < end; i++) {
      if (arr[i] < pValue) {
        swap(arr, pIndex, i)
        pIndex++
      }
    }
    swap(arr, pIndex, end)

    return pIndex
  }

  const swap = (arr, a, b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
    animations.push(a)
    animations.push(b)
  }

  quickSort(arr, 0, arr.length-1)

  return animations
}

export default QuickSort
