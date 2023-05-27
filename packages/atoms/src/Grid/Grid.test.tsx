import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Grid from "./Grid";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { asFragment } = render(<Grid />);
  expect(asFragment()).toMatchSnapshot();
});
