import { squareid } from "../actions"
import { BoardStateArray } from "../ChessboardData"


export const CheckSquare = (BoardStateArray, num, pawn, king, queen, rook, knight, bishop) => {
    if (BoardStateArray[num].piece === 'pawn') {
        return pawn
    } else if (BoardStateArray[num].piece === 'king') {
        return king
    } else if (BoardStateArray[num].piece === 'queen') {
        return queen
    } else if (BoardStateArray[num].piece === 'rook') {
        return rook
    } else if (BoardStateArray[num].piece === 'knight') {
        return knight
    } else if (BoardStateArray[num].piece === 'bishop') {
        return bishop
    }
}

/* 
const CheckIfActivePiece = (squareid, id) => {
    if (squareid == id) return true
    return false
} */

export const CheckIfActiveSquare = (squareid, id) => {
    if (squareid == id) return true
    return false
}


export const CheckForAvavilableMove = (BoardState, SquareId) => {

    let index = BoardState.findIndex((x) => x.square === SquareId);
    if(BoardState[index].piece == 'pawn'){   
        return [BoardState[index - 8], BoardState[index - 16]]
    }

}