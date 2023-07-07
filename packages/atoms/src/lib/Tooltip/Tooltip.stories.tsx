import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProps } from ".";
import { Button } from "../Button";
import { Text } from "../Text";

/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta: Meta<TooltipProps> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    tipPosition: {
      control: {
        type: "select",
        options: ["top", "bottom", "dynamic"],
      },
    },
    visible: { control: "boolean" },
    tooltipBgColor: { control: "color" },
  },
};

export default meta;

/**
 * Dynamic tooltip example. Changes the tooltip position based on the available screen space.
 */
export const DynamicTooltip: StoryObj<TooltipProps> = {
  args: {
    tipPosition: "dynamic",
    children: "Hover me!",
    content: "Tooltip Content",
  },
};

DynamicTooltip.storyName = "Dynamic Tooltip";

/**
 * Tooltip custom position example. Shows the tooltip on bottom.
 */
export const DefaultTooltip: StoryObj<TooltipProps> = {
  args: {
    tipPosition: "bottom",
    children: "Hover me!",
    content: "Tooltip Content",
  },
};

DefaultTooltip.storyName = "Default Tooltip";

/**
 * Tooltip with styled content and button trigger example.
 */
export const StyledTooltip: StoryObj<TooltipProps> = {
  args: {
    tipPosition: "dynamic",
    children: (
      <Button background={"white"} p={2}>
        Hover me!
      </Button>
    ),
    content: (
      <Text color="green" fontWeight="bold">
        Styled Tooltip Content
      </Text>
    ),
    tooltipBgColor: "lightpink",
  },
};

StyledTooltip.storyName = "Styled Tooltip";
