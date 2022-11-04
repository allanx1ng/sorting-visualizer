import "../css/SortingVisualizer.css"
import { useState, useEffect } from "react"
import BubbleSort from "./SortingAlgorithms/BubbleSort"
import InsertionSort from "./SortingAlgorithms/InsertionSort"
import QuickSort from "./SortingAlgorithms/QuickSort"

const SortingVisualizer = () => {
  

  const [animationSpeed, setSpeed] = useState(10)
  const [arraySize, setSize] = useState(50)
  const [array, setArray] = useState([])
  const [performingAction, setAction] = useState(false)
  const [arrayType, setType] = useState('Random')


  // GENERATE NEW ARRAY BASED ON PROGRAM STATE
  const initiateArray = () => {
    switch (arrayType) {
      case('Random'):
        generateRandomArray()
        break
      case('Sorted'):
        generateSortedArray()
        break
      case("Reverse"):
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
      temp.push(4*(i+1))
    }
    setArray(temp)
    console.log(array)
  }

  // GENERATE REVERSE SORTED ARRAY 
  const generateReverseSortedArray = () => {
    let temp = []
    for (let i = 0; i < arraySize; i++) {
      temp.push(4*(arraySize-i))
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
        arrayBars[j].style.backgroundColor = "#ff0000"              //changes color of the values currently being compared
        arrayBars[j + 1].style.backgroundColor = "#ff0000"
      }, (22 - animationSpeed) * i)
      setTimeout(() => {
        let j = animations[i]
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        arrayBars[j].style.backgroundColor = "#d6ffb7"              //changes the color of the bars back to default color
        arrayBars[j + 1].style.backgroundColor = "#d6ffb7"
        setArray([...array])
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
        arrayBars[j].style.backgroundColor = "#ff0000"              //changes color of the values currently being compared
        arrayBars[j + 1].style.backgroundColor = "#ff0000"
      }, (22 - animationSpeed) * i)
      setTimeout(() => {
        let j = animations[i]
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        arrayBars[j].style.backgroundColor = "#d6ffb7"               //changes the color of the bars back to default color
        arrayBars[j + 1].style.backgroundColor = "#d6ffb7"
        setArray([...array])
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

    for (let i = 0; i < n; i+=2) {
      const arrayBars = document.getElementsByClassName("histbar")
      setTimeout(() => {
        let j = animations[i]
        let k = animations[i+1]
        arrayBars[j].style.backgroundColor = "#ff0000"               //changes color of the values currently being compared
        arrayBars[k].style.backgroundColor = "#ff0000"
      }, (22 - animationSpeed) * i)
      setTimeout(() => {
        let j = animations[i]
        let k = animations[i+1]
        var temp = array[j]
        array[j] = array[k]
        array[k] = temp
        arrayBars[j].style.backgroundColor = "#d6ffb7"               //changes the color of the bars back to default color
        arrayBars[k].style.backgroundColor = "#d6ffb7"
        setArray([...array])
      }, (22 - animationSpeed) * i + (22 - animationSpeed))
    }
    setTimeout(() => {
      setAction(false)
    }, (22 - animationSpeed) * n)
  }

  // RETURN HTML

  return (
    <div className="functionbar">
      hello world
      {/* GENERATE RANDOM ARRAY */}
      <button onClick={() => {
        (arrayType === "Random") ? generateRandomArray() : setType("Random")             //Random array button
       
      }} disabled={performingAction}>
        Generate Random Array
      </button>
      {/* GENERATE SORTED ARRAY */}
      <button onClick={() => {
        (arrayType === "Sorted") ? generateSortedArray() : setType("Sorted")             //Sorted array button
      }} disabled={performingAction}>
        Generate Sorted Array
      </button>
      {/* GENERATE REVERSE SORTED ARRAY */}
      <button onClick={() => {
       (arrayType === "Reverse") ? generateReverseSortedArray() : setType("Reverse")     //Reverse sorted array button
        
      }} disabled={performingAction}>
        Generate Reverse Sorted Array
      </button>
      {/* BUBBLE SORT */}
      <button                                       // Bubble sort button
        onClick={() => {
          setAction(true)
          bubbleSort()
        }}
        disabled={performingAction}
      >
        Bubble Sort
      </button>
      {/* INSERTION SORT */}
      <button                                       // Insertion sort button
        onClick={() => {
          setAction(true)
          insertionSort()
        }}
        disabled={performingAction}
      >
        Insertion Sort
      </button>
      {/* QUICK SORT */}
      <button                                       // Quicksort button
        onClick={() => {
          setAction(true)
          quickSort()
        }}
        disabled={performingAction}
      >
        Quick Sort
      </button>
      <div class="slidecontainer">                    
        <input                                      // Set animation speed
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
        Set Animation Speed
        {animationSpeed}
      </div>
      <div class="slidecontainer">
        <input                                      // Set array size
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
        Set Array Size
        {arraySize}
      </div>
      <div className="histogram">
        {array.map((i) => (                           // Displays the array elements as bars on the screen
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


// Random number generator from [min, max]
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default SortingVisualizer
