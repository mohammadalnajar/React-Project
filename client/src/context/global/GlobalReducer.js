import { initialState } from './initialState';

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        status: action.payload.status,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: action.payload.user,
        status: action.payload.status,
      };
    case 'SET_DEVICES':
      return {
        ...state,
        devices: action.payload,
      };
    case 'ADD_ITEM_TO_CART':
      for (let i = 0; i < state.shoppingCartItems.length; i++) {
        if (state.shoppingCartItems[i]._id === action.payload._id) {
          state.shoppingCartItems[i].quantity++;
          break;
        } else if (i === state.shoppingCartItems.length - 1) {
          state.shoppingCartItems.push(action.payload);
          break;
        } else {
          continue;
        }
      }

      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems.filter(
          (item) => item._id.length !== 0
        ),
      };
    case 'DEL_ITEM_CART':
      if (state.shoppingCartItems.length === 1) {
        state.shoppingCartItems.push(initialState.shoppingCartItems[0]);
      }
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case 'ERROR':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
