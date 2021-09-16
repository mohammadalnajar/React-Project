import React, { createContext, useReducer } from 'react';
import { GlobalReducer } from './GlobalReducer';

// starting state
const initialState = {
  user: { name: '', email: '', userRole: '' },
  status: { loggedIn: false },
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
      const { firstName, lastName, email, joinedAt, userRole, status } = info;
      const user = { firstName, lastName, email, joinedAt, userRole };
      dispatch({
        type: 'LOGIN',
        payload: { user, status },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider value={{ loginHandler, user: state.user }}>
      {children}
    </GlobalContext.Provider>
  );
};
