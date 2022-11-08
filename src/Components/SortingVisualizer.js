import "../css/SortingVisualizer.css"
import { useState, useEffect } from "react"
import BubbleSort from "./SortingAlgorithms/BubbleSort"
import InsertionSort from "./SortingAlgorithms/InsertionSort"
import QuickSort from "./SortingAlgorithms/QuickSort"
import MergeSort from "./SortingAlgorithms/MergeSort"

const SortingVisualizer = () => {
  const COLOR1 = "#ff0000"
  const COLOR2 = "#2a93d5"

  const [animationSpeed, setSpeed] = useState(10)
  const [arraySize, setSize] = useState(50)
  const [array, setArray] = useState([])
  const [performingAction, setAction] = useState(false)
  const [arrayType, setType] = useState("Random")

  // GENERATE NEW ARRAY BASED ON PROGRAM STATE
  const initiateArray = () => {
    switch (arrayType) {
      case "Random":
        generateRandomArray()
        break
      case "Sorted":
        generateSortedArray()
        break
      case "Reverse":
        generateReverseSortedArray()
        break
      default:
        generateRandomArray()
    }
  }

  // Runs on page reload
  useEffect(() => {
    initiateArray()
  }, [])

  // generates a new array whenever the array type changes
  useEffect(() => {
    initiateArray()
  }, [arrayType])

  // GENERATE RANDOM ARRAY
  const generateRandomArray = () => {
    let temp = []
    for (let i = 0; i < arraySize; i++) {
      temp.push(generateRandomNumber(1, 400))
    }
    setArray(temp)
    console.log(array)
  }

  // GENERATE SORTED ARRAY
  const generateSortedArray = () => {
    let temp = []
    for (let i = 0; i < arraySize; i++) {
      temp.push((300*3)/(arraySize*2) * (i + 1))
    }
    setArray(temp)
    console.log(array)
  }

  // GENERATE REVERSE SORTED ARRAY
  const generateReverseSortedArray = () => {
    let temp = []
    for (let i = 0; i < arraySize; i++) {
      temp.push((300*3)/(arraySize*2) * (arraySize - i))
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
        arrayBars[j].style.backgroundColor = COLOR1 //changes color of the values currently being compared
        arrayBars[j + 1].style.backgroundColor = COLOR1
      }, (22 - animationSpeed) * i)
      setTimeout(() => {
        let j = animations[i]
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        setArray([...array])
        arrayBars[j].style.backgroundColor = COLOR2 //changes the color of the bars back to default color
        arrayBars[j + 1].style.backgroundColor = COLOR2
      }, (22 - animationSpeed) * i + (22 - animationSpeed))
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
        arrayBars[j].style.backgroundColor = COLOR1 //changes color of the values currently being compared
        arrayBars[j + 1].style.backgroundColor = COLOR1
      }, (22 - animationSpeed) * i)
      setTimeout(() => {
        let j = animations[i]
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        setArray([...array])
        arrayBars[j].style.backgroundColor = COLOR2 //changes the color of the bars back to default color
        arrayBars[j + 1].style.backgroundColor = COLOR2
      }, (22 - animationSpeed) * i + (22 - animationSpeed))
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

    for (let i = 0; i < n; i ++) {
      const arrayBars = document.getElementsByClassName("histbar")
      setTimeout(() => {
        let [a,b] = animations[i]
        arrayBars[a].style.backgroundColor = COLOR1 //changes color of the values currently being compared
        arrayBars[b].style.backgroundColor = COLOR1
      }, (22 - animationSpeed) * i)
      setTimeout(() => {
        let [a,b] = animations[i]
        var temp = array[a]
        array[a] = array[b]
        array[b] = temp
        setArray([...array])
        arrayBars[a].style.backgroundColor = COLOR2 //changes the color of the bars back to default color
        arrayBars[b].style.backgroundColor = COLOR2
      }, (22 - animationSpeed) * i + (22 - animationSpeed))
    }
    setTimeout(() => {
      setAction(false)
    }, (22 - animationSpeed) * n)
  }

  // MERGE SORT
  const mergeSort = () => {
    let animations = MergeSort(array)
    console.log(animations)
    let n = animations.length

    for (let i = 0; i < n; i+=2) {
      const arrayBars = document.getElementsByClassName("histbar")
      setTimeout(() => {
        let [a,b] = animations[i]
        arrayBars[a].style.backgroundColor = COLOR1 //changes color of the values currently being compared
        arrayBars[b].style.backgroundColor = COLOR1
      }, (22 - animationSpeed) * i)
      setTimeout(() => {
        let [c,d] = animations[i+1]
        array[c] = d
        setArray([...array])
        let [a,b] = animations[i]
        arrayBars[a].style.backgroundColor = COLOR2 //changes the color of the bars back to default color
        arrayBars[b].style.backgroundColor = COLOR2
      }, (22 - animationSpeed) * i + (22 - animationSpeed))
    }
    setTimeout(() => {
      setAction(false)
    }, (22 - animationSpeed) * n)
  }

  // RETURN HTML

  return (
    <div className="functionbar">
      {/* GENERATE RANDOM ARRAY */}
      <button
        onClick={() => {
          arrayType === "Random" ? generateRandomArray() : setType("Random") //Random array button
        }}
        disabled={performingAction}
      >
        Generate Random Array
      </button>


      {/* GENERATE SORTED ARRAY */}
      <button
        onClick={() => {
          arrayType === "Sorted" ? generateSortedArray() : setType("Sorted") //Sorted array button
        }}
        disabled={performingAction}
      >
        Generate Sorted Array
      </button>


      {/* GENERATE REVERSE SORTED ARRAY */}
      <button
        onClick={() => {
          arrayType === "Reverse"
            ? generateReverseSortedArray()
            : setType("Reverse") //Reverse sorted array button
        }}
        disabled={performingAction}
      >
        Generate Reverse Sorted Array
      </button>


      {/* BUBBLE SORT */}
      <button // Bubble sort button
        onClick={() => {
          setAction(true)
          bubbleSort()
        }}
        disabled={performingAction}
      >
        Bubble Sort
      </button>


      {/* INSERTION SORT */}
      <button // Insertion sort button
        onClick={() => {
          setAction(true)
          insertionSort()
        }}
        disabled={performingAction}
      >
        Insertion Sort
      </button>


      {/* QUICK SORT */}
      <button // Quicksort button
        onClick={() => {
          setAction(true)
          quickSort()
        }}
        disabled={performingAction}
      >
        Quick Sort
      </button>


      {/* MERGE SORT */}
      <button // Quicksort button
        onClick={() => {
          setAction(true)
          mergeSort()
        }}
        disabled={performingAction}
      >
        Merge Sort
      </button>


      <div class="slidecontainer">
        <input // Set animation speed
          type="range"
          min="1"
          max="20"
          value={animationSpeed}
          class="slider"
          id="myRange"
          onChange={(e) => {
            setSpeed(e.target.value)
          }}
          disabled={performingAction}
        />
        {"Set Animation Speed: "}
        {animationSpeed}
      </div>


      <div class="slidecontainer">
        <input // Set array size
          type="range"
          min="20"
          max="150"
          value={arraySize}
          class="slider"
          id="myRange"
          onChange={(e) => {
            setSize(e.target.value)
            initiateArray()
          }}
          disabled={performingAction}
        />
        {"Set Array Size: "}
        {arraySize}
      </div>


      <div className="histogram">
        {array.map(
          (
            i // Displays the array elements as bars on the screen
          ) => (
            <div
              className="histbar"
              style={{
                height: `${i / 6}vh`,
              }}
            ></div>
          )
        )}
      </div>
    </div>
  )
}

// Random number generator from [min, max]
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default SortingVisualizer
