const SelectedSquare = (state = null, action) => {
    switch (action.type) {
        case 'SELECTEDSQUARE':
            return action.payload;
        default:
            return state;
    }
}

export default SelectedSquare