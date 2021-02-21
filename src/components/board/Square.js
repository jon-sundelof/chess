import React from 'react'
import { CheckIfActiveSquare } from './functions/BoardFunctions'
import { selectsquare } from './actions'
import { useDispatch, useSelector } from 'react-redux'

const Square = ({ letters, numbers, squarecolor, i, squareRef, SquarePieceState, SelectTargetedPiece }) => {

    const dispatch = useDispatch();
    const SelectedSquare = useSelector(state => state.SelectedSquare)

    let id = letters + numbers;


    const SelectedTargetSquare = (e) => {
        if (e.target.className !== 'square-wrapper ') return

        let SelectedSquare = e.target.closest('div').id;
        console.log(SelectedSquare)
        dispatch(selectsquare(SelectedSquare))

    }

    let active_square = CheckIfActiveSquare(SelectedSquare, id)

    return (
        <>
            <div key={i} className={`square-wrapper ${active_square ? 'active' : ''}`} id={id} onClick={(e) => { SelectTargetedPiece(e); SelectedTargetSquare(e); }} ref={el => squareRef.current[i] = el} style={{ backgroundColor: squarecolor }}>
                {letters + numbers}
                {SquarePieceState}
            </div>
        </>
    )
}

export default Square
