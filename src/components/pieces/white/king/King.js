import React from 'react'

import KingSvg from '../../../svg-components/KingSvg'


const King = ({ id }) => {
    return (
        <div className="piece-wrapper">
            <div className="king-w" id={id}>
                <KingSvg className="king-w-svg" />
            </div>
        </div>
    )
}

export default King
