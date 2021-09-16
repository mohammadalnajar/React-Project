export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        status: action.payload.status,
      };
    default:
      return state;
  }
};
