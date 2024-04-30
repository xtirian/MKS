import { ProductModel } from "./product";

export type CartProductModel = Omit< ProductModel, "description"> & {
  quantity: number;
};