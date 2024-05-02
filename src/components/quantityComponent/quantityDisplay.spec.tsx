import { render, fireEvent } from "@testing-library/react";
import QuantityDisplay from "./QuantityDisplay.component";

describe("QuantityDisplay component", () => {
  const quantity = 3;
  const addMock = jest.fn();
  const removeMock = jest.fn();

  test("renders quantity display correctly", () => {
    const { getByText } = render(<QuantityDisplay quantity={quantity} add={addMock} remove={removeMock} />);
    expect(getByText("Qtd:")).toBeInTheDocument();
    expect(getByText(quantity.toString())).toBeInTheDocument();
    expect(getByText("+")).toBeInTheDocument();
    expect(getByText("-")).toBeInTheDocument();
  });

  test("calls add function when '+' button is clicked", () => {
    const { getByText } = render(<QuantityDisplay quantity={quantity} add={addMock} remove={removeMock} />);
    const addButton = getByText("+");
    fireEvent.click(addButton);
    expect(addMock).toHaveBeenCalledTimes(1);
  });

  test("calls remove function when '-' button is clicked", () => {
    const { getByText } = render(<QuantityDisplay quantity={quantity} add={addMock} remove={removeMock} />);
    const removeButton = getByText("-");
    fireEvent.click(removeButton);
    expect(removeMock).toHaveBeenCalledTimes(1);
  });
});
