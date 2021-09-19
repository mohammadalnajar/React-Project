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
      } else {
        const { status } = info;
        console.log(status, 3);
        dispatch({
          type: 'ERROR',
          payload: status,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // reset Error
  const resetError = () => {
    dispatch({
      type: 'ERROR',
      payload: { loggedIn: '' },
    });
  };

  // log out user
  const logoutHandler = () => {
    dispatch({
      type: 'LOGOUT',
      payload: initialState,
    });
    localStorage.clear();
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

  // get all devices
  const getDevices = async () => {
    try {
      const response = await fetch('/api/devices', {
        method: 'GET',
      });
      const devices = await response.json();
      console.log(devices);
      if (devices.length > 0) {
        dispatch({ type: 'SET_DEVICES', payload: devices });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        loginHandler,
        user: state.user,
        status: state.status,
        devices: state.devices,
        resetError,
        setUser,
        getDevices,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
