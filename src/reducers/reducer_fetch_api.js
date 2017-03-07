import { FETCH_DATA } from '../actions';

const intialState = []

export default function(state = intialState, action) {
  switch(action.type) {
    case FETCH_DATA:
    // spread concats array
    return [...state, ...action.payload]
  }
  return state;
}
