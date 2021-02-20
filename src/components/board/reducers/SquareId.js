const SquareId = (state = null, action) => {
    switch (action.type) {
        case 'SQUAREID':
            return action.payload[0] + action.payload[1]
        default:
            return state
    }
}

export default SquareId