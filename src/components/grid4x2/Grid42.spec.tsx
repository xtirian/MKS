import { render } from "@testing-library/react";
import Grid42 from "./Grid42.component";

test("renders Grid42 component with children", () => {
  const { getByText } = render(
    <Grid42>
      <div>Child 1</div>
      <div>Child 2</div>
    </Grid42>
  );

  const child1 = getByText("Child 1");
  const child2 = getByText("Child 2");

  expect(child1).toBeInTheDocument();
  expect(child2).toBeInTheDocument();
});
