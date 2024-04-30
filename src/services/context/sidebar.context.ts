import { createContext } from "react";

export const sidebarReducer = (
  state = { isOpen: true },
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
  isOpen: true,
  toggleSidebar: () => {},
});

export interface SidebarContextProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
