import React, { createContext, useReducer } from 'react';
import { GlobalReducer } from './GlobalReducer';
import { initialState } from './initialState';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // login handler
  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    logoutHandler();
    const loginUser = { email, password };
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(loginUser),
      });
      const info = await response.json();
      if (info.email) {
        const { firstName, lastName, email, joinedAt, userRole, status } = info;
        const user = { firstName, lastName, email, joinedAt, userRole };
        dispatch({
          type: 'LOGIN',
          payload: { user, status },
        });
        // storing user in local storage
        localStorage.setItem('user', JSON.stringify(info));
        return status;
      } else {
        const { status } = info;
        dispatch({
          type: 'ERROR',
          payload: status,
        });
        return status;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // reset Error
  const resetError = () => {
    dispatch({
      type: 'ERROR',
      payload: initialState.status,
    });
  };

  // log out user
  const logoutHandler = () => {
    dispatch({
      type: 'LOGOUT',
      payload: initialState,
    });
    localStorage.removeItem('user');
  };

  // set User
  const setUser = (info) => {
    if (info.email) {
      const { firstName, lastName, email, joinedAt, userRole, status } = info;
      const user = { firstName, lastName, email, joinedAt, userRole };
      dispatch({
        type: 'LOGIN',
        payload: { user, status },
      });
    }
  };
  // reload shoppingCartItems from localStorage
  const reloadCartItems = (itemsArray) => {
    dispatch({
      type: 'RELOAD_CART_ITEMS',
      payload: itemsArray,
    });
  };
  // get all devices
  const getDevices = async () => {
    try {
      const response = await fetch('/api/devices', {
        method: 'GET',
      });
      const devices = await response.json();
      if (devices.length > 0) {
        dispatch({ type: 'SET_DEVICES', payload: devices });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // add to shopping cart
  const addItemToCart = (item) => {
    for (let i = 0; i < state.shoppingCartItems.length; i++) {
      if (state.shoppingCartItems[i]._id === item._id) {
        state.shoppingCartItems[i].quantity++;
        break;
      } else if (i === state.shoppingCartItems.length - 1) {
        state.shoppingCartItems.push(item);
        break;
      } else {
        continue;
      }
    }
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: item,
    });

    const shoppingCartItems = state.shoppingCartItems.filter(
      (item) => item._id.length !== 0
    );
    localStorage.setItem(
      'shoppingCartItems',
      JSON.stringify(shoppingCartItems)
    );
  };
  // del item from shopping cart
  const delItemCart = (item) => {
    // this is to avoid array.methods errors (keeping the array not empty)
    if (state.shoppingCartItems.length === 1) {
      state.shoppingCartItems.push(initialState.shoppingCartItems[0]);
    }
    dispatch({
      type: 'DEL_ITEM_CART',
      payload: item,
    });
    const shoppingCartItems = state.shoppingCartItems.filter(
      (stateItem) => stateItem._id !== item._id
    );
    localStorage.setItem(
      'shoppingCartItems',
      JSON.stringify(shoppingCartItems)
    );
  };

  // reset cart items
  const resetCartItems = () => {
    dispatch({
      type: 'RESET_CART_ITEMS',
      payload: initialState.shoppingCartItems,
    });
    localStorage.removeItem('shoppingCartItems');
  };
  return (
    <GlobalContext.Provider
      value={{
        loginHandler,
        logoutHandler,
        user: state.user,
        status: state.status,
        devices: state.devices,
        shoppingCartItems: state.shoppingCartItems,
        resetError,
        setUser,
        getDevices,
        addItemToCart,
        delItemCart,
        reloadCartItems,
        resetCartItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
