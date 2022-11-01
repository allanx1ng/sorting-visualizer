import "../css/SortingVisualizer.css"
import ArrayBar from "./ArrayBar"
import { useState, useEffect } from "react"
import BubbleSort from "./SortingAlgorithms/BubbleSort"

const SortingVisualizer = () => {
  useEffect(() => {
    initiateArray()
  }, [])

  const [animationSpeed, setSpeed] = useState(10)
  const [array, setArray] = useState([])

  const initiateArray = () => {
    let temp = []
    for (let i = 0; i < 50; i++) {
      temp.push(generateRandomNumber(1, 200))
    }
    setArray(temp)
    console.log(array)
  }

  const bubbleSort = () => {
    let animations = BubbleSort(array)

    let n = animations.length

    for (let i = 0; i < n; i++) {
      const arrayBars = document.getElementsByClassName("histbar")
      setTimeout(() => {
        let j = animations[i]
        arrayBars[j].style.backgroundColor = "#00ff00"
        arrayBars[j + 1].style.backgroundColor = "#00ff00"
      }, animationSpeed * i)
      setTimeout(() => {
        let j = animations[i]
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        arrayBars[j].style.backgroundColor = "#ff0000"
        arrayBars[j + 1].style.backgroundColor = "#ff0000"
        setArray([...array])
      }, animationSpeed * i + animationSpeed / 2)
      //   setTimeout(() => {
      //     let j = animations[i]
      //     var temp = array[j]
      //     array[j] = array[j + 1]
      //     array[j + 1] = temp
      //     setArray([...array])
      //   }, 5 * i)
    }
  }

  return (
    <div className="functionbar">
      hello world
      <button onClick={initiateArray}>button</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <div class="slidecontainer">
        <input
          type="range"
          min="2"
          max="20"
          value={animationSpeed}
          class="slider"
          id="myRange"
          onChange={(e) => { setSpeed(e.target.value)}}
        />
        {animationSpeed}
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
