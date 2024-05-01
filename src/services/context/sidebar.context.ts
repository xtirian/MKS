import { createContext } from "react";

export const sidebarReducer = (
  state = { isOpen: false },
  action: { type: any, isOpen?: boolean}
) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      if(action.isOpen !== undefined) return { ...state, isOpen: action.isOpen };
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: (isOpen?:boolean) => {},
});

export interface SidebarContextProps {
  isOpen: boolean;
  toggleSidebar: (isOpen?:boolean) => void;
}
