import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Label } from ".";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { getByText } = render(<Label>Hello, world!</Label>);
  const label = getByText("Hello, world!");
  expect(label).toBeTruthy();
});
