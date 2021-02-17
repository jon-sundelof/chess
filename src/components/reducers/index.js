import RenderPiece from '../board/reducers/RenderPiece'
import SquareId from '../board/reducers/SquareId'

import { combineReducers } from 'redux'


const allReducers = combineReducers({
    RenderPiece,
    SquareId
})

export default allReducers;