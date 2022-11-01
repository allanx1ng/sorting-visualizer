import "../css/SortingVisualizer.css"
import ArrayBar from "./ArrayBar"
import { useState, useEffect } from "react"

const SortingVisualizer = () => {
  useEffect(() => {
    initiateArray()
  }, [])

  const [array, setArray] = useState([])

  const initiateArray = () => {
    let temp = []
    for (let i = 0; i < 100; i++) {
      temp.push(generateRandomNumber(1, 200))
    }
    setArray(temp)
    console.log(array)
  }

  const bubbleSort = () => {
    var arr = [...array]
    let n = array.length
    console.log("bubble sort")

    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        // setTimeout(
        //   (function (j) {
        //     return function () {
        //       if (arr[j] > arr[j + 1]) {
        //         var temp = arr[j]
        //         arr[j] = arr[j + 1]
        //         arr[j + 1] = temp
        //       }
        //       setArray(arr)
        //     }
        //   })(j),
        //   i * n + j
        // )

        if (arr[j] > arr[j + 1]) {
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
        setArray(arr)
      }
    }

    console.log(array)
  }

  return (
    <div className="functionbar">
      hello world
      <button onClick={initiateArray}>button</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      {array[0]}
      <div className="histogram">
        {array.map((i) => (
          <div
            className="histbar"
            style={{
              height: `${2 * i}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default SortingVisualizer
