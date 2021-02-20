export const squareid = (letter, number) => {
    return {
        type: 'SQUAREID',
        payload: [letter, number]

    }
}
export const renderpieces = (square) => {
    return {
        type: 'RERENDERPIECE',
        payload: square
    }
}