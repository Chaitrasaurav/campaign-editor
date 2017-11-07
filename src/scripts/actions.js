import ActionTypes from './actionTypes';

const activeMarket = market => ({
  type: ActionTypes.CHANGE_MARKET,
  payload: market,
});

const toggleSidenav = () => ({
  type: ActionTypes.TOGGLE_SIDENAV,
});

export {
  activeMarket,
  toggleSidenav,
};
