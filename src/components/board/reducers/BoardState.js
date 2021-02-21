import { BoardStateArray } from '../ChessboardData'

const BoardState = (state = BoardStateArray, action) => {
    switch (action.type) {
        case 'RERENDERPIECE':
            return [...state, action.payload]
        default:
            return state;

    }
}

export default BoardState