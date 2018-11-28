import defaultState from './defaultState';
import { v4 } from 'uuid';
import Moment from 'moment';

export default (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
  case 'ADD_POST':
    const now = new Moment();
    let newPost = {
      [v4()]:{
        message: action.message,
        upvotes: 0,
        downvotes: 0,
        time: now,
      }
    };
    const newState = Object.assign({}, state, newPost);
    console.log(newState);
    return newState;
  case 'ADD_UP':
    const stateUpClone = Object.assign({}, state);
    stateUpClone[action.id].upvotes = state[action.id].upvotes + 1;
    return stateUpClone;
  case 'ADD_DOWN':
    const stateDownClone = Object.assign({}, state);
    stateDownClone[action.id].downvotes = state[action.id].downvotes + 1;
    return stateDownClone;
  default:
    return state;
  }
};
