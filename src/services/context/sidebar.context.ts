import { createContext } from "react";

export const sidebarReducer = (
  state = { isOpen: false },
  action: { type: any }
) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
});

export interface SidebarContextProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
