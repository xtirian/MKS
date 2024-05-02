import { render, fireEvent } from "@testing-library/react";
import ProductCartCard from "./ProductCartCard.component";
import { CartProductModel } from "../../models/inCartProduct";
import { useCartContext } from "../../services/useCases/useCartContext";

jest.mock("../../services/useCases/useCartContext", () => ({
  useCartContext: jest.fn(),
}));

const mockUseCartContext = useCartContext as jest.Mock;

const product: CartProductModel = {
  id: 1,
  photo: "/logo.jpeg",
  name: "Product Name",
  brand: "Brand Name",
  price: 10.99,
  quantity: 2,
};

describe("ProductCartCard component", () => {
  beforeEach(() => {
    mockUseCartContext.mockReturnValue({
      addItemCart: jest.fn(),
      editQuantity: jest.fn(),
      removeItemCart: jest.fn(),
    });
  });

  test("renders product cart card correctly", () => {
    const { getByText, getByAltText } = render(<ProductCartCard {...product} />);
    expect(getByAltText(product.name)).toBeInTheDocument();
    expect(getByText(`${product.brand} ${product.name}`)).toBeInTheDocument();
    expect(getByText("R$" + (product.price * product.quantity).toFixed(0))).toBeInTheDocument();
  });

  test("calls addItemCart when add button is clicked", () => {
    const { getByText } = render(<ProductCartCard {...product} />);
    const addButton = getByText("+");
    fireEvent.click(addButton);
    expect(mockUseCartContext().addItemCart).toHaveBeenCalledWith(product, 1);
  });

  test("calls editQuantity or removeItemCart when remove button is clicked", () => {
    const { getByText } = render(<ProductCartCard {...product} />);
    const removeButton = getByText("-");
    fireEvent.click(removeButton);
    expect(mockUseCartContext().editQuantity).toHaveBeenCalledWith(product, 1);
  });

  test("calls removeItemCart when remove from cart button is clicked", () => {
    const { getByTestId } = render(<ProductCartCard {...product} />);
    const removeButton = getByTestId("remove-button");
    fireEvent.click(removeButton);
    expect(mockUseCartContext().removeItemCart).toHaveBeenCalledWith(product);
  });
});