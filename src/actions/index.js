import { toggleSwitch } from "./toggle-switch";
import { authenticated } from "./authenticated";


function toggleAppBarMore(prevState, action) {
  const newState = prevState;
  newState.appMenu.isOpen = action.payload;
  return { ...newState };
};

function toggleSidebar(prevState, action) {
  const newState = prevState;
  newState.sidebar.isOpen = action.payload;
  return { ...newState };
};

export const actions = {
  toggleSwitch,
  authenticated,
  toggleAppBarMore,
  toggleSidebar
};
