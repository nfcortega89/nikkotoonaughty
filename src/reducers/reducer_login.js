import { AUTHORIZE_USER } from '../actions';

const intialState = {
    isLoggedIn: false
}

export default function(state = intialState, action) {
  switch(action.type) {
    case AUTHORIZE_USER:
    return Object.assign({}, state, {
      isLoggedIn: true
    })
  }
  return state;
}
