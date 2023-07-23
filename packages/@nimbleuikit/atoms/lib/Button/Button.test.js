import { jsx as _jsx } from "react/jsx-runtime";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "../Button";
import "@testing-library/jest-dom";
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
it("renders correctly", () => {
    const { getByText } = render(_jsx(Button, { p: 3, children: "Click me!" }));
    const button = getByText("Click me!");
    expect(button).toBeTruthy();
});
it("displays correct text", () => {
    const { getByText } = render(_jsx(Button, { p: 3, children: "Click me!" }));
    const button = getByText("Click me!");
    expect(button.textContent).toBe("Click me!");
});
it("handles onClick events", () => {
    const handleClick = jest.fn();
    const { getByText } = render(_jsx(Button, { p: 3, onClick: handleClick, children: "Click me!" }));
    fireEvent.click(getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
