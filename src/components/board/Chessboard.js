import React, { useEffect, useState } from 'react'
import '../../styles/Chessboard.css'

const Chessboard = () => {
    const [squares, setSquares] = useState([])

    let numbers = [];
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    /*     let letters = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']; */

    useEffect(() => {
        let newArr = [];
        for (let i = 1; i < 65; i++) {
            if (i <= 8) {
                numbers.push(8)
            } else if (i <= 16) {
                numbers.push(7)
            } else if (i <= 24) {
                numbers.push(6)
            } else if (i <= 32) {
                numbers.push(5)
            } else if (i <= 40) {
                numbers.push(4)
            } else if (i <= 48) {
                numbers.push(3)
            } else if (i <= 56) {
                numbers.push(2)
            } else if (i <= 64) {
                numbers.push(1)
            }

            newArr.push(<div id={letters[0] + numbers[0]} >{letters[0] + numbers[0]}</div>)
            letters.push(letters[0])
            letters.splice(0, 1)
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
