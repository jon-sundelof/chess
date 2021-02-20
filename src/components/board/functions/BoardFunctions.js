
export const CheckSquare = (BoardStateArray, num, pawn, king, queen, rook, knight, bishop) => {
    if (BoardStateArray[num][1] === 'pawn') {
        return pawn
    } else if (BoardStateArray[num][1] === 'king') {
        return king
    } else if (BoardStateArray[num][1] === 'queen') {
        return queen
    } else if (BoardStateArray[num][1] === 'rook') {
        return rook
    } else if (BoardStateArray[num][1] === 'knight') {
        return knight
    } else if (BoardStateArray[num][1] === 'bishop') {
        return bishop
    }
}