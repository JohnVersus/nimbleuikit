import { jsx as _jsx } from "react/jsx-runtime";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TextArea } from ".";
import "@testing-library/jest-dom";
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
it("renders correctly", () => {
    const { getByText } = render(_jsx(TextArea, { defaultValue: "Hello, world!" }));
    const textArea = getByText("Hello, world!");
    expect(textArea).toBeTruthy();
});
