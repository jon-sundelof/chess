import BoardState from '../board/reducers/BoardState'
import SquareId from '../board/reducers/SquareId'

import { combineReducers } from 'redux'


const allReducers = combineReducers({
    BoardState,
    SquareId
})

export default allReducers;