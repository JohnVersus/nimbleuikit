import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Input } from ".";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { getByPlaceholderText } = render(
    <Input placeholder="Placeholder text" />
  );
  const input = getByPlaceholderText("Placeholder text");
  expect(input).toBeTruthy();
});

it("renders correctly with defaultValue", () => {
  const { getByPlaceholderText } = render(
    <Input placeholder="Placeholder text" defaultValue="Hello" />
  );
  const input = getByPlaceholderText("Placeholder text") as HTMLInputElement;
  expect(input.value).toBe("Hello");
});

it("renders correctly with value and onChange", () => {
  const onChangeMock = jest.fn();
  const { getByPlaceholderText } = render(
    <Input
      placeholder="Placeholder text"
      value="Hello"
      onChange={onChangeMock}
    />
  );
  const input = getByPlaceholderText("Placeholder text") as HTMLInputElement;
  expect(input.value).toBe("Hello");
  fireEvent.change(input, { target: { value: "New Value" } });
  expect(onChangeMock).toHaveBeenCalled();
});

it("renders correctly when disabled", () => {
  const { getByPlaceholderText } = render(
    <Input placeholder="Placeholder text" disabled />
  );
  const input = getByPlaceholderText("Placeholder text") as HTMLInputElement;
  expect(input).toBeDisabled();
});
