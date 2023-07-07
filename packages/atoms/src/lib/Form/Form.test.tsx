import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Form } from ".";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { container } = render(<Form />);
  expect(container.firstChild).toBeInTheDocument();
  expect(container.firstChild).toBeTruthy();
});

it("calls onSubmit prop when form is submitted", () => {
  const handleSubmit = jest.fn();
  const { getByTestId } = render(
    <Form data-testid="form" onSubmit={handleSubmit} />
  );
  const form = getByTestId("form");

  fireEvent.submit(form);

  expect(handleSubmit).toHaveBeenCalled();
});
