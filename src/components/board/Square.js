import React from 'react'
import { CheckIfActiveSquare, CheckForAvavilableMove, MovePiece } from './functions/BoardFunctions'
import { selectsquare, availablemoves } from './actions'
import { useDispatch, useSelector } from 'react-redux'

const Square = ({ letters, numbers, squarecolor, i, squareRef, SquarePieceState, SelectTargetedPiece }) => {

    const dispatch = useDispatch();
    const SelectedSquare = useSelector(state => state.SelectedSquare)
    const BoardState = useSelector(state => state.BoardState)
    const SquareId = useSelector(state => state.SquareId)

    let id = letters + numbers;

    const SelectedTargetSquare = (e, id) => {
        if(!avviableMoves) return
        let TargetedSquare = e.target.closest('div').id;
        
        if (e.target.className == "square-wrapper active") {
            MovePiece(SquareId, SelectedSquare, BoardState)
            return dispatch(selectsquare(null))
        }
       
       
        if (e.target.className !== 'square-wrapper ') return
   

        if(!avviableMoves.length){
            if(TargetedSquare !== avviableMoves.square)return
                dispatch(selectsquare(TargetedSquare))
                return true
        } else {
            for(let i = 0; i < avviableMoves.length; i++){
                console.log('Reaced')
                if(TargetedSquare === avviableMoves[i].square){
                console.log(avviableMoves[i].square)
                console.log(TargetedSquare)
                dispatch(selectsquare(TargetedSquare))
                return true
                }
            }
        }
    }

    let active_square = CheckIfActiveSquare(SelectedSquare, id)

    let avviableMoves;

    const RunCheckForAvailableMove = (square) => {
        if(SquareId === null)return

        avviableMoves = CheckForAvavilableMove(BoardState, SquareId)
        if(avviableMoves == undefined) return

        if(!avviableMoves.length){
            if(square == avviableMoves.square){
                dispatch(availablemoves(avviableMoves))
                return true
            }
        } else {
            for(let i = 0; i < avviableMoves.length; i++){
                if(square == avviableMoves[i].square){
                    dispatch(availablemoves(avviableMoves))
                    return true
                }
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
