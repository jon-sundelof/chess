import React from 'react'
import { useDispatch } from 'react-redux'
import { squareid } from './actions'
/* import { InitialBoardState } from './ChessboardData' */

/* import Pawn from '../pieces/pawn/Pawn' */
/* import RenderPiece from './reducers/BoardState' */



const Square = ({ letters, numbers, squarecolor, i, squareRef, SquareState, DoStuff }) => {

    const dispatch = useDispatch()
    let SquareId = dispatch(squareid(letters, numbers))

    return (
        <>
            <div key={i} className="square-wrapper" id={letters + numbers} onClick={DoStuff} ref={el => squareRef.current[i] = el} style={{ backgroundColor: squarecolor }}>
                {letters + numbers}
                {SquareState}
            </div>
        </>
    )
}

export default Square
