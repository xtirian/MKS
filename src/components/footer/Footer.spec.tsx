import { render } from "@testing-library/react";
import Footer from "./Footer.component";

test("renders Footer component", () => {
  const { getByText } = render(<Footer />);
  const footerElement = getByText("MKS sistemas © Todos os direitos reservados");
  expect(footerElement).toBeInTheDocument();
});