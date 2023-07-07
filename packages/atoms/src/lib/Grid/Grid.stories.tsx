import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";
import { Grid, GridProps } from ".";

/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta: Meta<GridProps> = {
  title: "Atoms/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    gridTemplateColumns: { control: "text" },
    gap: { control: "text" },
    gridAutoRows: { control: "text" },
    gridAutoColumns: { control: "text" },
  },
};

export default meta;

/**
 * 3 Column Grid
 */

export const TemplateLayoutGrid: StoryObj<GridProps> = {
  args: {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    children: Array.from({ length: 9 }).map((_, i) => (
      <Box
        key={i}
        bg="lightgray"
        height={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {`Box ${i + 1}`}
      </Box>
    )),
  },
};

TemplateLayoutGrid.storyName = "Template Layout Grid";

/**
 * Auto Layout Grid
 */
export const AutoLayoutGrid: StoryObj<GridProps> = {
  args: {
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "10px",
    children: Array.from({ length: 12 }).map((_, i) => (
      <Box
        key={i}
        bg="lightgray"
        height={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {`Box ${i + 1}`}
      </Box>
    )),
  },
};

AutoLayoutGrid.storyName = "Auto Layout Grid";

/**
 * Responsive Grid
 */
export const ResponsiveGrid: StoryObj<GridProps> = {
  args: {
    gridTemplateColumns: [
      "repeat(1, 1fr)", // mobile (default)
      "repeat(1, 1fr)", // portrait tablet
      "repeat(2, 1fr)", // landscape tablet
      "repeat(3, 1fr)", // small desktop
      "repeat(4, 1fr)", // large desktop
    ],
    gridAutoRows: "1fr",
    gap: "10px",
    children: Array.from({ length: 12 }).map((_, i) => (
      <Box
        key={i}
        bg="lightgray"
        height={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {`Box ${i + 1}`}
      </Box>
    )),
  },
};

ResponsiveGrid.storyName = "Responsive Grid";
