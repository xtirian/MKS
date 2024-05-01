import { Provider, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { SidebarContext, sidebarReducer } from "./context/sidebar.context";
import { ReactNode } from "react";
import { CartContext, cartReducer } from "./context/cart.context";
import { ProductModel } from "@/models/product";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <Provider store={store}>
      <CartContext.Provider
        value={{
          products,
          addItemCart: (product: ProductModel, quantity: number) =>
            store.dispatch({
              type: "ADD_ITEM_CART",
              product,
              payload: { quantity },
            }),
          removeItemCart: (product: ProductModel) =>
            store.dispatch({ type: "REMOVE_ITEM_CART", product }),
          editQuantity: (product: ProductModel, quantity: number) =>
            store.dispatch({
              type: "EDIT_QUANTITY",
              product,
              payload: { quantity },
            }),
        }}
      >
        <SidebarContext.Provider
          value={{
            isOpen: useSelector((state: RootState) => state.sidebar.isOpen),
            toggleSidebar: () => store.dispatch({ type: "TOGGLE_SIDEBAR" }),
          }}
        >
          {children}
        </SidebarContext.Provider>
      </CartContext.Provider>
    </Provider>
  );
};

export type RootState = ReturnType<typeof rootReducer>;
