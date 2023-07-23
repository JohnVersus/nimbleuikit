import { jsx as _jsx } from "react/jsx-runtime";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dialog from "./Dialog";
import "@testing-library/jest-dom";
// Mock the HTMLDialogElement methods
window.HTMLDialogElement.prototype.show = jest.fn();
window.HTMLDialogElement.prototype.showModal = jest.fn();
window.HTMLDialogElement.prototype.close = jest.fn();
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
it("renders correctly", () => {
    const { getByText } = render(_jsx(Dialog, { isOpen: true, children: "Hello, world!" }));
    const dialog = getByText("Hello, world!");
    expect(dialog).toBeTruthy();
});
it("renders correctly with different color", () => {
    const { getByText } = render(_jsx(Dialog, { isOpen: true, color: "blue", children: "Hello, world!" }));
    const dialog = getByText("Hello, world!");
    expect(dialog).toHaveStyle("color: blue");
});
it("renders correctly with custom CSS", () => {
    const { getByText } = render(_jsx(Dialog, { isOpen: true, css: { fontSize: "32px" }, children: "Hello, world!" }));
    const dialog = getByText("Hello, world!");
    expect(dialog).toHaveStyle("font-size: 32px");
});
it("renders correctly with modal set to true", () => {
    render(_jsx(Dialog, { isOpen: true, isModal: true, children: "Hello, world!" }));
    expect(window.HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
});
it("renders correctly with modal set to false", () => {
    render(_jsx(Dialog, { isOpen: true, isModal: false, children: "Hello, world!" }));
    expect(window.HTMLDialogElement.prototype.show).toHaveBeenCalled();
});
