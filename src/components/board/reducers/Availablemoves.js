const Availablemoves = (state = null, action) => {
    switch (action.type) {
        case 'AVAILABLEMOVES':
            return action.payload;
        default:
            return state;
    }
}

export default Availablemoves