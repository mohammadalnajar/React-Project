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
      if (info.user) {
        const { firstName, lastName, email, joinedAt, userRole, status } = info;
        const user = { firstName, lastName, email, joinedAt, userRole };
        dispatch({
          type: 'LOGIN',
          payload: { user, status },
        });
      } else {
        const { status } = info;
        console.log(status);
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
  return (
    <GlobalContext.Provider
      value={{
        loginHandler,
        user: state.user,
        status: state.status,
        resetError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
