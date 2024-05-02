import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { SidebarContext, sidebarReducer } from "./context/sidebar.context";
import { ReactNode } from "react";
import { CartContext, cartReducer } from "./context/cart.context";
import { ProductModel } from "@/models/product";

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <CartContext.Provider
        value={{
          products: (store.getState() as { cart: { products: any } }).cart
            ?.products,
          addItemCart: (product: ProductModel, quantity: number) =>
            store.dispatch({
              type: "ADD_ITEM_CART",
              product: { ...product, quantity },
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
            isOpen: (store.getState() as { sidebar: { isOpen: boolean } })
              .sidebar?.isOpen,
            toggleSidebar: (isOpen?:boolean) => store.dispatch({ type: "TOGGLE_SIDEBAR", isOpen }),
          }}
        >
          {children}
        </SidebarContext.Provider>
      </CartContext.Provider>
    </Provider>
  );
};

export type RootState = ReturnType<typeof rootReducer>;
