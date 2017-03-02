import { FETCH_DATA } from '../actions';

const intialState = ['hey']

export default function(state = intialState, action) {
  switch(action.type) {
    case FETCH_DATA:
    return [action.payload.data, ...state]
  }
  return state;
}
