import { AppProvider, rootReducer } from "../../services/reduxProvider";
import ProductCard from "./ProductCard.component";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

test("renders ProductCard component with description", () => {
  const product = {
    id: 1,
    name: "Product Name",
    brand: "Brand Name",
    description: "Product Description",
    price: 10.99,
    photo: "/logo.jpeg",
  };

  const { getByText } = render(<ProductCard {...product} />);
  const description = getByText(product.description);

  expect(description).toBeInTheDocument();
});

test("renders ProductCard component with add to cart button", () => {
  const product = {
    id: 1,
    name: "Product Name",
    brand: "Brand Name",
    description: "Product Description",
    price: 10.99,
    photo: "/logo.jpeg",
  };

  const { getByText } = render(<ProductCard {...product} />);
  const addToCartButton = getByText("Comprar");

  expect(addToCartButton).toBeInTheDocument();
});
