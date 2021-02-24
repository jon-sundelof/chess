import BoardState from '../board/reducers/BoardState'
import SquareId from '../board/reducers/SquareId'
import SelectedSquare from '../board/reducers/Selectsquare'
import Availablemoves from '../board/reducers/Availablemoves'

import { combineReducers } from 'redux'


const allReducers = combineReducers({
    BoardState,
    SquareId,
    SelectedSquare,
    Availablemoves
})

export default allReducers;