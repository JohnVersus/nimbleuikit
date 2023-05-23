import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./";

const meta: Meta<ButtonProps> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    bg: { control: "color" },
  },
};

export default meta;

/**
 * A default button with no additional styling. Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
export const DefaultButton: StoryObj<ButtonProps> = {
  args: {
    p: 2,
    children: "Default Button",
  },
};
DefaultButton.storyName = "Default Button";
/**
 * A simple styled button.
 */
export const SimpleButton: StoryObj<ButtonProps> = {
  args: {
    p: 2,
    color: "white",
    bg: "gray",
    children: "Click me!",
  },
};
SimpleButton.storyName = "Simple Button";

/**
 * A styled button.
 */
export const StyledButton: StoryObj<ButtonProps> = {
  args: {
    p: 2,
    color: "blue",
    bg: "pink",
    border: "2px solid purple",
    borderRadius: "5px",
    children: "Styled Button",
  },
};
StyledButton.storyName = "Styled Button";

/**
 * A button with shadow.
 */
export const ButtonWithShadow: StoryObj<ButtonProps> = {
  args: {
    p: 2,
    color: "white",
    bg: "green",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    children: "Button With Shadow",
  },
};
ButtonWithShadow.storyName = "Button With Shadow";

/**
 * A button with custom cursor on hover.
 */
export const CursoredButton: StoryObj<ButtonProps> = {
  args: {
    p: 2,
    color: "black",
    bg: "yellow",
    css: {
      cursor: "progress",
    },
    children: "Cursor Button",
  },
};
CursoredButton.storyName = "Cursored Button";

/**
 * A button with click event.
 */
export const ClickableButton: StoryObj<ButtonProps> = {
  args: {
    p: 2,
    children: "Click Me!!",
    onClick: () => {
      alert("Button Clicked");
    },
  },
};
ClickableButton.storyName = "Clickable Button";

/**
 * A diabled button.
 */
export const DisabledButton: StoryObj<ButtonProps> = {
  args: {
    p: 2,
    children: "Disabled",
    disabled: true,
  },
};
DisabledButton.storyName = "Disabled Button";
