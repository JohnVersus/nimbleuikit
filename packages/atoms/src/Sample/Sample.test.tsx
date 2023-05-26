import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Sample } from ".";
import "@testing-library/jest-dom";

describe("Sample component", () => {
  it("renders the children", () => {
    render(<Sample>Test</Sample>);
    const element = screen.getByText("Test");
    expect(element).toBeInTheDocument();
  });
});
