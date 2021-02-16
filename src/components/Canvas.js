import React from 'react'
import '../styles/Canvas.css'

import Chessboard from './board/Chessboard'

const Canvas = () => {
    return (
        <div className="canvas-wrapper">
            <Chessboard />
        </div>
    )
}

export default Canvas
