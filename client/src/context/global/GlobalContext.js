import React, { createContext, useReducer } from 'react';
import { GlobalReducer } from './GlobalReducer';

// starting state
const initialState = {
  user: { name: '', email: '', userRole: '' },
  status: { loggedIn: '' },
};

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

  const resetError = () => {
    dispatch({
      type: 'ERROR',
      payload: { loggedIn: '' },
    });
  };
  const logoutHandler = () => {
    dispatch({
      type: 'LOGOUT',
      payload: initialState,
    });
    localStorage.clear();
  };
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
  return (
    <GlobalContext.Provider
      value={{
        loginHandler,
        user: state.user,
        status: state.status,
        resetError,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
