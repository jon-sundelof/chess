export const squareid = (selectedpiece) => {
    return {
        type: 'SQUAREID',
        payload: selectedpiece

    }
}

export const selectsquare = (selectedsquare) => {
    return {
        type: 'SELECTEDSQUARE',
        payload: selectedsquare

    }
}

export const renderpieces = (square) => {
    return {
        type: 'RERENDERPIECE',
        payload: square
    }
}