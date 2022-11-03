import "../css/SortingVisualizer.css"
import { useState, useEffect } from "react"
import BubbleSort from "./SortingAlgorithms/BubbleSort"
import InsertionSort from "./SortingAlgorithms/InsertionSort"
import QuickSort from "./SortingAlgorithms/QuickSort"

const SortingVisualizer = () => {
  // SETUP
  useEffect(() => {
    initiateArray()
  }, [])

  const [animationSpeed, setSpeed] = useState(10)
  const [arraySize, setSize] = useState(50)
  const [array, setArray] = useState([])
  const [performingAction, setAction] = useState(false)

  const initiateArray = () => {
    let temp = []
    for (let i = 0; i < arraySize; i++) {
      temp.push(generateRandomNumber(1, 200))
    }
    setArray(temp)
    console.log(array)
  }

  // BUBBLE SORT

  const bubbleSort = () => {
    let animations = BubbleSort(array)

    let n = animations.length

    for (let i = 0; i < n; i++) {
      const arrayBars = document.getElementsByClassName("histbar")
      setTimeout(() => {
        let j = animations[i]
        arrayBars[j].style.backgroundColor = "#00ff00"
        arrayBars[j + 1].style.backgroundColor = "#00ff00"
      }, (22 - animationSpeed) * i)
      setTimeout(() => {
        let j = animations[i]
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        arrayBars[j].style.backgroundColor = "#ff0000"
        arrayBars[j + 1].style.backgroundColor = "#ff0000"
        setArray([...array])
      }, (22 - animationSpeed) * i + (22 - animationSpeed) / 2)
    }
    setTimeout(() => {
      setAction(false)
    }, (22 - animationSpeed) * n)
  }

  // INSERTION SORT

  const insertionSort = () => {
    let animations = InsertionSort(array)

    let n = animations.length

    for (let i = 0; i < n; i++) {
      const arrayBars = document.getElementsByClassName("histbar")
      setTimeout(() => {
        let j = animations[i]
        arrayBars[j].style.backgroundColor = "#00ff00"
        arrayBars[j + 1].style.backgroundColor = "#00ff00"
      }, (22 - animationSpeed) * i)
      setTimeout(() => {
        let j = animations[i]
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        arrayBars[j].style.backgroundColor = "#ff0000"
        arrayBars[j + 1].style.backgroundColor = "#ff0000"
        setArray([...array])
      }, (22 - animationSpeed) * i + (22 - animationSpeed) / 2)
    }
    setTimeout(() => {
      setAction(false)
    }, (22 - animationSpeed) * n)
  }

  // QUICKSORT
  const quickSort = () => {
    let animations = QuickSort(array)
    console.log(animations)
    let n = animations.length

    for (let i = 0; i < n; i+=2) {
      const arrayBars = document.getElementsByClassName("histbar")
      setTimeout(() => {
        let j = animations[i]
        let k = animations[i+1]
        arrayBars[j].style.backgroundColor = "#00ff00"
        arrayBars[k].style.backgroundColor = "#00ff00"
      }, (22 - animationSpeed) * i)
      setTimeout(() => {
        let j = animations[i]
        let k = animations[i+1]
        var temp = array[j]
        array[j] = array[k]
        array[k] = temp
        arrayBars[j].style.backgroundColor = "#ff0000"
        arrayBars[k].style.backgroundColor = "#ff0000"
        setArray([...array])
      }, (22 - animationSpeed) * i + (22 - animationSpeed) / 2)
    }
    setTimeout(() => {
      setAction(false)
    }, (22 - animationSpeed) * n)
  }

  // RETURN HTML

  return (
    <div className="functionbar">
      hello world
      {/* GENERATE NEW ARRAY */}
      <button onClick={initiateArray} disabled={performingAction}>
        button
      </button>
      {/* BUBBLE SORT */}
      <button
        onClick={() => {
          setAction(true)
          bubbleSort()
        }}
        disabled={performingAction}
      >
        Bubble Sort
      </button>
      {/* INSERTION SORT */}
      <button
        onClick={() => {
          setAction(true)
          insertionSort()
        }}
        disabled={performingAction}
      >
        Insertion Sort
      </button>
      {/* QUICK SORT */}
      <button
        onClick={() => {
          setAction(true)
          quickSort()
        }}
        disabled={performingAction}
      >
        Quick Sort
      </button>
      <div class="slidecontainer">
        <input
          type="range"
          min="2"
          max="20"
          value={animationSpeed}
          class="slider"
          id="myRange"
          onChange={(e) => {
            setSpeed(e.target.value)
          }}
          disabled={performingAction}
        />
        {animationSpeed}
      </div>
      <div class="slidecontainer">
        <input
          type="range"
          min="20"
          max="100"
          value={arraySize}
          class="slider"
          id="myRange"
          onChange={(e) => {
            setSize(e.target.value)
            initiateArray()
          }}
          disabled={performingAction}
        />

        {arraySize}
      </div>
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
