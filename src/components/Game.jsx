import React, { useState, useEffect } from 'react'
import '../input.css'
import { ScoreBoard } from './ScoreBoard'

import blueCandy from '../images/blue-candy.png'
import greenCandy from '../images/green-candy.png'
import orangeCandy from '../images/orange-candy.png'
import purpleCandy from '../images/purple-candy.png'
import redCandy from '../images/red-candy.png' 
import yellowCandy from '../images/yellow-candy.png'
import blank from '../images/blank.png'

const width = 8
const candyColors = [
    blueCandy,
    orangeCandy,
    purpleCandy,
    redCandy,
    yellowCandy,
    greenCandy
]

const Game = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])
  const [squareBeingDragged, setSquareBeingDragged] = useState(null)
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
  const [scoreDisplay, setScoreDisplay] = useState(0)



// Scoring

  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [ i, i + width, i + width * 2, i + width * 3]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank
      
      if (columnOfFour.every((square) => currentColorArrangement[square] === decidedColor && !isBlank)) {
          setScoreDisplay((score) => score + 750)
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
      const isBlank = currentColorArrangement[i] === blank
      if (notValid.includes(i)) continue
      if (rowOfFour.every((square) => currentColorArrangement[square] === decidedColor && !isBlank)) { 
        setScoreDisplay((score) => score + 750)
        rowOfFour.forEach((square) => (currentColorArrangement[square] = blank))
        return true
      }
    }
  }

  const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2]
      const decidedColor = currentColorArrangement[i]
      const isBlank = currentColorArrangement[i] === blank
      if (columnOfThree.every((square) => currentColorArrangement[square] === decidedColor && !isBlank)) {
          setScoreDisplay((score) => score + 250) 
          columnOfThree.forEach((square) => (currentColorArrangement[square] = blank))
          return true
      }
    }
  }
  
  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2]
      const decidedColor = currentColorArrangement[i]
      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
      const isBlank = currentColorArrangement[i] === blank
      if (notValid.includes(i)) continue
      if (rowOfThree.every((square) => currentColorArrangement[square] === decidedColor && !isBlank)) { 
        setScoreDisplay((score) => score + 250)
        rowOfThree.forEach((square) => (currentColorArrangement[square] = blank))
        return true
      }
    }
  }

  // Respawn
  
  const moveIntoSquareBelow = () => {
    for (let i= 0 ; i <= 71 - width; i++) {
      const gameBoardGrid = [
         0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63]
      const isgameBoardGrid = gameBoardGrid.includes(i)

      if (isgameBoardGrid && currentColorArrangement[i] === blank) {
        let randomNumber = Math.floor(Math.random() * candyColors.length)
        currentColorArrangement[i] = candyColors[randomNumber]
      }
      if(currentColorArrangement[i] + width === blank) {
        currentColorArrangement[i+ width] = currentColorArrangement[i]
        currentColorArrangement[i] = blank
      }
    }
  } 

// Dragging

  const dragStart = (e) => {
    setSquareBeingDragged(e.target)
  }

  const dragDrop = (e) => {
    setSquareBeingReplaced(e.target)
  }

  const dragEnd = () => {
    const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
    const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))
    

    currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
    currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

  

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
    }, 60)
    return () => clearInterval(timer)
  }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement])
  

  

  return (
    
    <div className="grid grid-rows-1 bg-sky-950 justify-center space-y-8">
    <div className="font-puffinChrome ring ring-sky-400 ring-offset-2 ring-offset-dmbg drop-shadow-lg shadow-inner shadow-sky-950 text-sky-400 text-7xl text-center ">
        Box O' Matches!!
    </div>
    <div className="game bg-gradient-radial items-center from-sky-400 via-sky-800 to-sky-950 rounded-xl ring ring-sky-950 ">
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
            className="p-2 rounded-xl bg-gradient-radial decoration-white from-sky-800 via-sky-400 to-sky-200 hover:animate-pulse active:animate-bounce ring ring-sky-800 shadow-2xl shadow-sky-950"
          />
        ))} 
     </div>
     <div className="scoreboard rounded-xl -space-y-8 ">
    <ScoreBoard score={scoreDisplay} />
    
      
   </div>
   </div>
   
  );
}

export default Game;

