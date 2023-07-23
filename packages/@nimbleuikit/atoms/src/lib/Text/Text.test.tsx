import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Text } from ".";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { getByText } = render(<Text p={3}>Hello, world!</Text>);
  const text = getByText("Hello, world!");
  expect(text).toBeTruthy();
});

it("renders correct text", () => {
  const { getByText } = render(<Text p={3}>Hello, world!</Text>);
  expect(getByText("Hello, world!")).toBeInTheDocument();
});
