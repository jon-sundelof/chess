import React, { useEffect, useState, useRef } from 'react'
import '../../styles/Chessboard.css'

import Square from './Square'
import { letters, squarecolor, InitialBoardState } from './ChessboardData'

const numbers = [8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1];

const Chessboard = () => {
    const [squares, setSquares] = useState([])
    const squareRef = useRef([])
    const [pawn, setPawn] = useState(true)


    useEffect(() => {
        let newArr = [];
        let colorNum = 0;
        let loopstate = 0;


        for (let i = 1; i < 65; i++) {

            if (colorNum % 8 === 0) {
                squarecolor.reverse();
            }
            colorNum++;

            if (loopstate > 6) {
                console.log('reached max')
            } else {
                loopstate++
            }



            newArr.push(<Square InitialBoardState={InitialBoardState[loopstate][0]} pawn={pawn} i={i} squareRef={squareRef} numbers={numbers[0]} squarecolor={squarecolor[0]} letters={letters[0]} />)

            /*      console.log(InitialBoardState) */

            /* newArr.push(<div ref={el => squareRef.current[i] = el} style={{ backgroundColor: squarecolor[0] }} id={letters[0] + numbers[0]} >{letters[0] + numbers[0]}</div>) */

            letters.push(letters[0])
            letters.splice(0, 1)

            squarecolor.push(squarecolor[0])
            squarecolor.splice(0, 1)

            numbers.splice(0, 1)
            setPawn(!pawn)

            /*  squareRef.current = squareRef.current.slice(0, numbers.length); ??? */

        }
        setSquares(newArr)
    }, [])


    const DoStuff = () => {
        console.log(squareRef.current[35])

        /* squareRef.current[64] */


    }

    return (
        <div className="chessboard-wrapper">
            <div className="chessboard">
                {squares}
            </div>
            <button onClick={DoStuff}>CLICKME</button>
        </div>
    )
}

export default Chessboard
