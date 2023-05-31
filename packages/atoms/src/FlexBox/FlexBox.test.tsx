import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FlexBox } from ".";
import "@testing-library/jest-dom";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { container } = render(<FlexBox />);
  expect(container.firstChild).toBeInTheDocument();
  expect(container.firstChild).toHaveStyle("display: flex");
});

it("renders with correct color and background", () => {
  const { container } = render(<FlexBox color="red" bg="blue" />);
  expect(container.firstChild).toHaveStyle("color: red");
  expect(container.firstChild).toHaveStyle("background-color: blue");
});

it("renders with correct padding and margin", () => {
  const { container } = render(<FlexBox p={2} m={3} />);
  // default spacing [0, 4, 8, 16, 32, 64, 128, 256, 512],
  expect(container.firstChild).toHaveStyle("padding: 8px");
  expect(container.firstChild).toHaveStyle("margin: 16px");
});

it("renders with correct width and height", () => {
  const { container } = render(<FlexBox width={200} height={100} />);
  expect(container.firstChild).toHaveStyle("width: 200px");
  expect(container.firstChild).toHaveStyle("height: 100px");
});

it("renders with correct flex-direction", () => {
  const { container } = render(<FlexBox flexDirection="column" />);
  expect(container.firstChild).toHaveStyle("flex-direction: column");
});
