const MergeSort = (array) => {
  let animations = []
  let arr = [...array]
  let auxiliaryArray = [...arr]

  mergeSort(arr, 0, array.length - 1, auxiliaryArray, animations)

  return animations
}

export default MergeSort

const mergeSort = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
  if (startIdx === endIdx) return
  const middleIdx = Math.floor((startIdx + endIdx) / 2)
  mergeSort(auxiliaryArray, startIdx, middleIdx, mainArray, animations)
  mergeSort(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations)
  merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations)
}

const merge = (
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) => {
  let k = startIdx
  let i = startIdx
  let j = middleIdx + 1
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j])
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]])
      mainArray[k++] = auxiliaryArray[i++]
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]])
      mainArray[k++] = auxiliaryArray[j++]
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i])
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]])
    mainArray[k++] = auxiliaryArray[i++]
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j])
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]])
    mainArray[k++] = auxiliaryArray[j++]
  }
}
