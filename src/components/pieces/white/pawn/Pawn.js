import React from 'react'
import '../../../../styles/White.css'
import { useSelector } from 'react-redux'


const Pawn = ({ id }) => {

    const squareid = useSelector(state => state.SquareId)

    const CheckIfActivePiece = () => {
        if (squareid == id) return true
        return false
    }

    let active = CheckIfActivePiece()

    return (
        <>
            <div className="piece-wrapper">
                <div className={`pawn-w ${active ? 'active' : ''}`} id={id} >

                </div>
            </div>
        </>
    )
}

export default Pawn
