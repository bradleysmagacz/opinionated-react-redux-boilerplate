import { createAction, createReducer } from 'redux-act'

// ------------------------------------
// Actions
// ------------------------------------
export const increment = createAction('increment state')
export const decrement = createAction('decrement state')

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default createReducer({
  [increment]    : (state, action) => state + action.payload,
  [decrement] : (state, action) => state - action.payload
}, initialState)
