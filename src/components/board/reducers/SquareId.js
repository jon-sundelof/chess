const SquareId = (state = null, action) => {
    switch (action.type) {
        case 'SQUAREID':
            return action.payload
        default:
            return state
    }
}

export default SquareId