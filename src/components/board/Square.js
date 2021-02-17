import React from 'react'
import { useDispatch } from 'react-redux'
import { squareid } from './actions'

import Pawn from '../pieces/pawn/Pawn'



const Square = ({ letters, numbers, squarecolor, i, squareRef, pawn, InitialBoardState }) => {

    const dispatch = useDispatch()




    dispatch(squareid(letters, numbers))

    return (
        <>
            <div key={i} id={letters + numbers} ref={el => squareRef.current[i] = el} style={{ backgroundColor: squarecolor }}>
                <div>
                    {letters + numbers}
                    {/*     {InitialBoardState === squareId && <Pawn />} */}
                </div>
            </div>
        </>
    )
}

export default Square
