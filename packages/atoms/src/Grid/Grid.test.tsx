import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Grid from "./Grid";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { container } = render(<Grid />);
  expect(container.firstChild).toBeInTheDocument();
});
