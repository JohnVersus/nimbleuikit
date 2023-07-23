import { jsx as _jsx } from "react/jsx-runtime";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Text } from ".";
import "@testing-library/jest-dom";
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
it("renders correctly", () => {
    const { getByText } = render(_jsx(Text, { p: 3, children: "Hello, world!" }));
    const text = getByText("Hello, world!");
    expect(text).toBeTruthy();
});
it("renders correct text", () => {
    const { getByText } = render(_jsx(Text, { p: 3, children: "Hello, world!" }));
    expect(getByText("Hello, world!")).toBeInTheDocument();
});
