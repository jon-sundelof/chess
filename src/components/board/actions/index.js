export const squareid = (letter, number) => {
    return {
        type: 'SQUAREID',
        payload: [letter, number]

    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}