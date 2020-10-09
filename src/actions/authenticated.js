export function authenticated(prevState, action) {
  const newState = prevState;
  newState.user.authenticated = action.payload;
  return { ...newState };
};
