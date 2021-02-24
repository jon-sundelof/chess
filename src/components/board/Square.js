import React from 'react'
import { CheckIfActiveSquare, CheckForAvavilableMove } from './functions/BoardFunctions'
import { selectsquare } from './actions'
import { useDispatch, useSelector } from 'react-redux'

const Square = ({ letters, numbers, squarecolor, i, squareRef, SquarePieceState, SelectTargetedPiece }) => {

    const dispatch = useDispatch();
    const SelectedSquare = useSelector(state => state.SelectedSquare)
    const BoardState = useSelector(state => state.BoardState)
    const SquareId = useSelector(state => state.SquareId)

    let id = letters + numbers;


    const SelectedTargetSquare = (e) => {
        let TargetedSquare = e.target.closest('div').id;
        if (e.target.className == "square-wrapper active") return dispatch(selectsquare(null))
        if (e.target.className !== 'square-wrapper ') return


        dispatch(selectsquare(TargetedSquare))
    }

    let active_square = CheckIfActiveSquare(SelectedSquare, id)


    const RunCheckForAvailableMove = (square) => {
        console.log('now i run')
        if(SquareId === null)return

        let avviableMoves = CheckForAvavilableMove(BoardState, SquareId)
        console.log(avviableMoves)
        for(let i = 0; i < avviableMoves.length; i++){
            if(square == avviableMoves[i].square){
                return true
            }
        }
    }

    let IsAviableMove = RunCheckForAvailableMove(id)

    return (
        <>
            <div key={i} className={`square-wrapper ${active_square ? 'active' : ''}`} id={id} onClick={(e) => { SelectTargetedPiece(e); SelectedTargetSquare(e); }} ref={el => squareRef.current[i] = el} style={{ backgroundColor: squarecolor }}>
                {letters + numbers}
                {SquarePieceState}
                {IsAviableMove ? 'You can move here' : ''}
            </div>
        </>
    )
}

export default Square
