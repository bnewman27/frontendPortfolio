import React, { useState, useEffect } from 'react'
import './index.css'
import blueCandy from './images/blue-candy.png'
import greenCandy from './images/green-candy.png'
import orangeCandy from './images/orange-candy.png'
import purpleCandy from './images/purple-candy.png'
import redCandy from './images/red-candy.png'
import yellowCandy from './images/yellow-candy.png'
import blank from './images/blank.png'

const width = 8
const candyColors = [
    blueCandy,
    orangeCandy,
    purpleCandy,
    redCandy,
    yellowCandy,
    greenCandy
   
]

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])
  const [squareBeingDragged, setSquareBeingDragged] = useState(null)
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
  const [ scoreDisplay, setScoreDisplay ] = useState(null)

  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfFour = [ i, i + width, i + width * 2, i + width * 3, i + width * 4]
      const decidedColor = currentColorArrangement[i]
      
      if (columnOfFour.every((square) => currentColorArrangement[square] === decidedColor)) {
          setScoreDisplay{(score) => score = 4}
          columnOfFour.forEach((square) => (currentColorArrangement[square] = blank))
          return true
      }
    }
  }  

  const checkForRowOfFour = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3]
      const decidedColor = currentColorArrangement[i]
      const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 27, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]

      if (notValid.includes(i)) continue

      if (rowOfFour.every((square) => currentColorArrangement[square] === decidedColor)) { 
        rowOfFour.forEach((square) => (currentColorArrangement[square] = blank))
        return true
      }
    }
  }

  const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2, i + width * 3]
      const decidedColor = currentColorArrangement[i]
      if (columnOfThree.every((square) => currentColorArrangement[square] === decidedColor)) { 
          columnOfThree.forEach((square) => (currentColorArrangement[square] = blank))
          return true
      }
    }
  }
  
  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + width, i + width * 2, i + width * 3]
      const decidedColor = currentColorArrangement[i]
      const notValid = [6, 7, 14, 15, 22, 23, 38, 39, 46, 47, 54, 55, 63, 64]

      if (notValid.includes(i)) continue

      if (rowOfThree.every((square) => currentColorArrangement[square] === decidedColor)) { 
        rowOfThree.forEach((square) => (currentColorArrangement[square] = blank))
        return true
      }
    }
  }

  const moveIntoSquareBelow = () => {
    for (let i= 0 ; i <= 55 - width; i++) {
    
      if(currentColorArrangement[i] + width === '') {
        currentColorArrangement[i+ width] = currentColorArrangement[i]
        currentColorArrangement[i] = blank
      }
    }
  } 

  console

  const dragStart = (e) => {
    console.log(e.target)
    console.log('drag start')
    setSquareBeingDragged(e.target)
  }

  const dragDrop = (e) => {
    console.log(e.target)
    console.log('drag drop')
    setSquareBeingReplaced(e.target)
  }

  const dragEnd = (e) => {
    console.log(e.target)
    console.log('drag end')

    const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
    const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))
    console.log('squareBeingDraggedId', squareBeingDraggedId)
    console.log('squareBeingReplacedId', squareBeingReplacedId)

    currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
    currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

    console.log('squareBeingDraggedId', squareBeingDraggedId)
    console.log('squareBeingReplacedId', squareBeingReplacedId)

    const validMoves = [
      squareBeingDraggedId -1,
      squareBeingDraggedId -width,
      squareBeingDraggedId +1,
      squareBeingDraggedId +width
    ]

    const validMove = validMoves.includes(squareBeingReplacedId) 

    const isColumnOfFour = checkForColumnOfFour() 
    const isRowOfFour = checkForRowOfFour()
    const isColumnOfThree = checkForColumnOfThree()
    const isRowOfThree = checkForRowOfThree()

    if (squareBeingReplacedId &&
      validMove &&
      (isRowOfThree || isRowOfFour || isColumnOfFour || isColumnOfThree )) {
      setSquareBeingDragged(null)
      setSquareBeingReplaced(null)
    } else {
      currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
      currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
      setCurrentColorArrangement([...currentColorArrangement])
    }



  }

  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement)
  }

  useEffect(() => {
    createBoard()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour()
      checkForRowOfFour()
      checkForColumnOfThree()
      checkForRowOfThree()
      moveIntoSquareBelow()
      setCurrentColorArrangement([...currentColorArrangement])
    }, 1000)
    return () => clearInterval(timer)
  }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement])
  

  console.log(currentColorArrangement)

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            key={index}
            src={candyColor}
            alt={candyColor}
            data-id={index}
            draggable={true}
            onDragStart={dragStart}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
          />
        ))}
      </div>
    </div>
  );
}
export default App;

