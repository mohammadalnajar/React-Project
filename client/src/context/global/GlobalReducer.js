export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        status: action.payload.status,
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
