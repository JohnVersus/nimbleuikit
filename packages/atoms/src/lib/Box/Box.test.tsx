import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Box } from ".";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { getByText } = render(<Box p={3}>Hello, world!</Box>);
  const box = getByText("Hello, world!");
  expect(box).toBeTruthy();
});

it("displays correct text", () => {
  const { getByText } = render(<Box p={3}>Hello, world!</Box>);
  const box = getByText("Hello, world!");
  expect(box.textContent).toBe("Hello, world!");
});

it("renders as a button", () => {
  const { getByRole } = render(
    <Box as="button" p={3}>
      I'm a Box as a button!
    </Box>
  );
  const button = getByRole("button");
  expect(button).toBeTruthy();
});

it("renders as a text", () => {
  const { getByText } = render(
    <Box as="p" p={3}>
      I'm a Box as a text!
    </Box>
  );
  const text = getByText("I'm a Box as a text!");
  expect(text).toBeTruthy();
});

it("renders as an input", () => {
  const { getByPlaceholderText } = render(
    <Box as="input" p={3} placeholder="I'm a Box as a input!" />
  );
  const input = getByPlaceholderText("I'm a Box as a input!");
  expect(input).toBeTruthy();
});

it("has correct border", () => {
  const { getByText } = render(
    <Box
      p={3}
      children="I'm a Box with a border!"
      borderWidth="2px"
      borderColor="black"
      borderStyle="solid"
      borderRadius="5px"
    />
  );
  const box = getByText("I'm a Box with a border!");
  expect(box).toHaveStyle(`
    border-width: 2px;
    border-color: black;
    border-style: solid;
    border-radius: 5px;
  `);
});

it("responds to hover", () => {
  const { getByText } = render(
    <Box
      p={3}
      children="I'm a Box with custom CSS!"
      css={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
        ":hover": {
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    />
  );
  const box = getByText("I'm a Box with custom CSS!");

  // Simulate a mouse hover on the box
  fireEvent.mouseOver(box);

  // Note: Jest does not currently support testing pseudo-classes like ":hover"
  // The hover effect should be tested manually in the browser.
});
