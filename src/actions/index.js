export const actionTypes = {
    CORRECT_PATH: 'CORRECT_PATH'
}

export const correctGuess = () => {
    return { type: actionTypes.CORRECT_PATH }
}