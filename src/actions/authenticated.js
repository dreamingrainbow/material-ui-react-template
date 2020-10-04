export function authenticated(prevState, action) {
  const newState = prevState;
  newState.user = action.payload;
  return { ...newState };
};
