import React, { useEffect, useState, useRef } from 'react'
import '../../styles/Chessboard.css'
import Pawn from '../pieces/white/pawn/Pawn'
import King from '../pieces/white/king/King'
import Queen from '../pieces/white/queen/Queen'
import Rook from '../pieces/white/rook/Rook'
import Knight from '../pieces/white/knight/Knight'
import Bishop from '../pieces/white/bishop/Bishop'

import { squareid, selectsquare, availablemoves } from './actions'
import { useDispatch, useSelector } from 'react-redux'
import { CheckSquare, CheckForAvavilableMove } from './functions/BoardFunctions'

import Square from './Square'
import { letters, squarecolor, BoardStateArray } from './ChessboardData'

const numbers = [8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1];

const Chessboard = () => {
    const BoardState = useSelector(state => state.BoardState)
    const SquareId = useSelector(state => state.SquareId)

    const [squares, setSquares] = useState([])
    const squareRef = useRef([])
    const dispatch = useDispatch()

    useEffect(() => {
        let newArr = [];
        let colorNum = 0;

        for (let i = 1; i < 65; i++) {

            if (colorNum % 8 === 0) {
                squarecolor.reverse();
            }
            colorNum++;


            let id = letters[0] + numbers[0]
            let pawn = <Pawn id={id} />
            let king = <King id={id} />
            let queen = <Queen id={id} />
            let rook = <Rook id={id} />
            let knight = <Knight id={id} />
            let bishop = <Bishop id={id} />

            let num = i - 1;
            let SquarePieceState = CheckSquare(BoardStateArray, num, pawn, king, queen, rook, knight, bishop)

          /*   let avviablemove = onClick(id) */

            newArr.push(<Square SelectTargetedPiece={SelectTargetedPiece} SquarePieceState={SquarePieceState} i={i} squareRef={squareRef} numbers={numbers[0]} squarecolor={squarecolor[0]} letters={letters[0]} />)

            letters.push(letters[0])
            letters.splice(0, 1)

            squarecolor.push(squarecolor[0])
            squarecolor.splice(0, 1)

            numbers.splice(0, 1)

            /*  squareRef.current = squareRef.current.slice(0, numbers.length); ??? */

        }
        setSquares(newArr)
    }, [])


    const SelectTargetedPiece = (e) => {
        if (e.target.className == 'square-wrapper ') return

        let SelectedPiece = e.target.closest('div').id;
        console.log(e.target)

        dispatch(squareid(SelectedPiece))
        dispatch(selectsquare(null))
    }


    return (
        <div className="chessboard-wrapper">
            <div className="chessboard">
                {squares}
            </div>
            <button>MOVE PIECE</button>
        </div>
    )
}

export default Chessboard
