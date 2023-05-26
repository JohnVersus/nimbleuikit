import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Form } from ".";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { asFragment } = render(<Form />);
  expect(asFragment()).toMatchSnapshot();
});
