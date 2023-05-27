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
