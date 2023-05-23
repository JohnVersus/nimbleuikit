// @ts-ignore
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "../Button";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { getByText } = render(<Button p={3}>Click me!</Button>);
  const button = getByText("Click me!");
  expect(button).toBeTruthy();
});

it("displays correct text", () => {
  const { getByText } = render(<Button p={3}>Click me!</Button>);
  const button = getByText("Click me!");
  expect(button.textContent).toBe("Click me!");
});

it("handles onClick events", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button p={3} onClick={handleClick}>
      Click me!
    </Button>
  );

  fireEvent.click(getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
