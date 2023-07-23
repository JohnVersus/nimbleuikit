import { jsx as _jsx } from "react/jsx-runtime";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Grid } from ".";
import "@testing-library/jest-dom";
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
it("renders correctly", () => {
    const { container } = render(_jsx(Grid, {}));
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle("display: grid");
});
it("renders with correct grid template columns", () => {
    const { container } = render(_jsx(Grid, { gridTemplateColumns: "repeat(3, 1fr)" }));
    expect(container.firstChild).toHaveStyle("grid-template-columns: repeat(3,1fr)");
});
it("renders with correct grid gap", () => {
    const { container } = render(_jsx(Grid, { gap: "2px" }));
    expect(container.firstChild).toHaveStyle("gap: 2px");
});
it("renders with correct padding and margin", () => {
    const { container } = render(_jsx(Grid, { p: 2, m: 3 }));
    expect(container.firstChild).toHaveStyle("padding: 8px");
    expect(container.firstChild).toHaveStyle("margin: 16px");
});
it("renders with correct color", () => {
    const { container } = render(_jsx(Grid, { color: "primary.main" }));
    expect(container.firstChild).toHaveStyle(`color: var(--color-primary-main)`);
});
it("renders with correct background color", () => {
    const { container } = render(_jsx(Grid, { bg: "secondary.main" }));
    expect(container.firstChild).toHaveStyle(`background-color: var(--color-secondary-main)`);
});
it("renders with correct width and height", () => {
    const { container } = render(_jsx(Grid, { width: 1 / 2, height: "100px" }));
    expect(container.firstChild).toHaveStyle("width: 50%");
    expect(container.firstChild).toHaveStyle("height: 100px");
});
it("renders with correct CSS", () => {
    const { container } = render(_jsx(Grid, { css: { overflow: "hidden" } }));
    expect(container.firstChild).toHaveStyle("overflow: hidden");
});
