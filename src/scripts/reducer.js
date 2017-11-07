import ActionTypes from './actionTypes';
import data from './data';

function reducer(state = data, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_MARKET:
      return Object.assign({}, state, {
        currentMarket: action.payload,
      });
    case ActionTypes.TOGGLE_SIDENAV:
      console.log('Trying to toggle the sidenav');
      return Object.assign({}, state, {
        sidenavOpened: !state.sidenavOpened,
      });
    default:
      console.log(`Action type not recognized: ${action.type}`);
  } // switch
  return state;
} // reducer

export default reducer;
