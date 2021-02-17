import { useSelector } from 'react-redux';

const InitialBoardState = [
    ['A2', 'pawn'],
    ['B2', 'pawn'],
    ['C2', 'pawn'],
    ['D2', 'pawn'],
    ['E2', 'pawn'],
    ['F2', 'pawn'],
    ['G2', 'pawn'],
    ['H2', 'pawn']
]

const RenderBoard = () => {
    const squareId = useSelector(state => state.squareId)
    for (let i = 0; i < InitialBoardState.length; i++) {
        if (squareId) {
            return true;
        } else {
            return false
        }
    }
}

const RenderPiece = (state = InitialBoardState, action) => {
    switch (action.type) {
        case 'RENDERBOARD':
            return console.log('TRUE')
        default:
            return state;

    }
}

export default RenderPiece