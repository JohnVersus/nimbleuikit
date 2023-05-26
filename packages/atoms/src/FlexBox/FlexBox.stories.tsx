import type { Meta, StoryObj } from "@storybook/react";
import { FlexBox, FlexBoxProps } from ".";
import { Box } from "../Box";

/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta: Meta<FlexBoxProps> = {
  title: "Atoms/FlexBox",
  component: FlexBox,
  tags: ["autodocs"],
  argTypes: {
    flexDirection: {
      control: { type: "select", options: ["row", "column"] },
    },
  },
};

export default meta;

const Template: StoryObj<FlexBoxProps> = {
  args: {
    children: [
      <Box key="box1" bg="lightgray" p={3} m={2}>
        Box 1
      </Box>,
      <Box key="box2" bg="lightgray" p={3} m={2}>
        Box 2
      </Box>,
      <Box key="box3" bg="lightgray" p={3} m={2}>
        Box 3
      </Box>,
    ],
  },
};

/**
 * Horizontal Stack
 */
export const HorizontalStack: StoryObj<FlexBoxProps> = {
  ...Template,
  args: {
    ...Template.args,
    flexDirection: "row",
  },
};

HorizontalStack.storyName = "Horizontal Stack";

/**
 * Vertical Stack
 */
export const VerticalStack: StoryObj<FlexBoxProps> = {
  ...Template,
  args: {
    ...Template.args,
    flexDirection: "column",
  },
};

VerticalStack.storyName = "Vertical Stack";
