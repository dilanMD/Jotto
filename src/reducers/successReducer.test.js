import { actionTypes } from '../actions/'
import successReducer from './successReducer'

test('returns default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {})
    expect(newState).toBe(false)
})

test('returns default initial state of `true` when action type is `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_PATH })
    expect(newState).toBe(true)
})