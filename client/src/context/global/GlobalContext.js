import React, { createContext, useReducer } from 'react';
import { GlobalReducer } from './GlobalReducer';

// starting state
const initialState = {
  user: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // Register user

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
