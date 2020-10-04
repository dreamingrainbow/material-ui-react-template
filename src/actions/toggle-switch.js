export function toggleSwitch(prevState, action) {
  const newState = prevState;
  newState.toggle = action.payload;
  return {...newState};
};
