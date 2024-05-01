import { CartProductModel } from "@/models/inCartProduct";
import { ProductModel } from "@/models/product";
import { createContext } from "react";

const initialState = {
  products: [],
};
type cartActions = "ADD_ITEM_CART" | "REMOVE_ITEM_CART" | "EDIT_QUANTITY";

export const cartReducer = (
  state = initialState,
  action: { type: cartActions; product: CartProductModel; payload: any }
) => {
  switch (action.type) {
    case "ADD_ITEM_CART":
      const productIndex = state.products.findIndex(
        (product: CartProductModel) => product.id === action.product.id
      );
      if (productIndex === -1) {
        return { ...state, products: [...state.products, action.product] };
      } else {
        return {
          ...state,
          products: state.products.map((product: CartProductModel) => {
            if (product.id === action.product.id) {
              return {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              };
            } else {
              return product;
            }
          }),
        };
      }
    case "REMOVE_ITEM_CART":
      return {
        ...state,
        products: state.products.filter(
          (product: CartProductModel) => product.id !== action.product.id
        ),
      };
    case "EDIT_QUANTITY":
      return {
        ...state,
        products: state.products.map((product: CartProductModel) => {
          if (product.id === action.product.id) {
            return { ...product, quantity: action.payload.quantity };
          } else {
            return product;
          }
        }),
      };
    default:
      return state;
  }
};

export const CartContext = createContext<CartContextProps>({
  products: [],
  addItemCart: (product: ProductModel, quantity: number) => {},
  removeItemCart: (product: ProductModel) => {},
  editQuantity: (product: ProductModel, quantity: number) => {},
});

export interface CartContextProps {
  products: CartProductModel[];
  addItemCart: (product: ProductModel, quantity: number) => void;
  removeItemCart: (product: ProductModel) => void;
  editQuantity: (product: ProductModel, quantity: number) => void;
}