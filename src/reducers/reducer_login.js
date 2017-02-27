import { AUTHORIZE_USER } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case AUTHORIZE_USER:
    return [...state, action.text ];
  }
  return state;
}
