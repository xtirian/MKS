import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { SidebarContext, sidebarReducer } from "./context/sidebar.context";
import { ReactNode } from "react";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

const store = createStore(rootReducer);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <SidebarContext.Provider value={{
        isOpen: (store.getState() as { sidebar: { isOpen: boolean } }).sidebar?.isOpen,
        toggleSidebar: () => store.dispatch({ type: "TOGGLE_SIDEBAR" }),
      }}>
        {children}
        </SidebarContext.Provider>
    </Provider>
  );
};


export type RootState = ReturnType<typeof rootReducer>;