import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Tooltip } from ".";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { getByText } = render(
    <Tooltip tipPosition="top" content="Tooltip Content">
      Hover me!
    </Tooltip>
  );
  const trigger = getByText("Hover me!");
  expect(trigger).toBeTruthy();
});

it("renders correct tooltip content", () => {
  const { queryByText } = render(
    <Tooltip tipPosition="top" content="Tooltip Content" visible={true}>
      Hover me!
    </Tooltip>
  );
  expect(queryByText("Tooltip Content")).toBeInTheDocument();
});

it("does not render tooltip content when not visible", () => {
  const { queryByText } = render(
    <Tooltip tipPosition="top" content="Tooltip Content" visible={false}>
      Hover me!
    </Tooltip>
  );
  expect(queryByText("Tooltip Content")).not.toBeInTheDocument();
});

it("shows tooltip content on mouse enter and hides on mouse leave", () => {
  const { getByText, queryByText } = render(
    <Tooltip tipPosition="top" content="Tooltip Content">
      Hover me!
    </Tooltip>
  );
  const trigger = getByText("Hover me!");

  // Move mouse over the trigger element to show the tooltip
  fireEvent.mouseEnter(trigger);
  expect(queryByText("Tooltip Content")).toBeInTheDocument();

  // Move mouse out of the trigger element to hide the tooltip
  fireEvent.mouseLeave(trigger);
  expect(queryByText("Tooltip Content")).not.toBeInTheDocument();
});
