import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { IntlText } from ".";
import "@testing-library/jest-dom";

// Unmount and cleanup DOM after each test is finished.
afterEach(cleanup);

it("renders correctly", () => {
  const { getByText } = render(<IntlText value={100} formatType="number" />);
  const text = getByText("100");
  expect(text).toBeInTheDocument();
});

it("renders correct text for number format", () => {
  const { getByText } = render(
    <IntlText value={12345.67} formatType="number" />
  );
  expect(getByText("12,345.67")).toBeInTheDocument();
});

it("renders correct text for date format", () => {
  const { getByText } = render(
    <IntlText
      value="2023-06-15T12:30:00Z"
      formatType="date"
      formatOptions={{ dateStyle: "long" }}
    />
  );
  expect(getByText("June 15, 2023")).toBeInTheDocument();
});

it("applies common style props", () => {
  const { getByTestId } = render(
    <IntlText
      value={42}
      formatType="number"
      color="red"
      fontSize={16}
      data-testid="intl-text"
    />
  );
  const text = getByTestId("intl-text");
  expect(text).toHaveStyle("color: red;");
  expect(text).toHaveStyle("font-size: 16px;");
});
