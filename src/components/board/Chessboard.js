import React, { useEffect, useState } from 'react'
import '../../styles/Chessboard.css'

import { letters, numbers, squarecolor } from './ChessboardData'

const Chessboard = () => {
    const [squares, setSquares] = useState([])

    useEffect(() => {
        numbers.reverse()
        let newArr = [];
        let colorNum = 0;
        for (let i = 1; i < 65; i++) {

            if (colorNum % 8 === 0) {
                squarecolor.reverse();
            }
            colorNum++;
            newArr.push(<div style={{ backgroundColor: squarecolor[0] }} id={letters[0] + numbers[0]} >{letters[0] + numbers[0]}</div>)

            letters.push(letters[0])
            letters.splice(0, 1)

            squarecolor.push(squarecolor[0])
            squarecolor.splice(0, 1)

            numbers.splice(0, 1)
            console.log(numbers)
        }
        setSquares(newArr)
    }, [])


    return (
        <div className="chessboard-wrapper">
            <div className="chessboard">
                {squares}
            </div>
        </div>
    )
}

export default Chessboard
