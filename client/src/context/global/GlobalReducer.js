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
    case 'ERROR':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
