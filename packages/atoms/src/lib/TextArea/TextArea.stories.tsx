import type { Meta, StoryObj } from "@storybook/react";
import { TextArea, TextAreaProps } from ".";

/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta: Meta<TextAreaProps> = {
  title: "Atoms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    rows: { control: "number" },
    cols: { control: "number" },
  },
};

export default meta;

/**
 * Simple text area example.
 */
export const SimpleTextArea: StoryObj<TextAreaProps> = {
  args: {
    p: 2,
    children: "Simple Text Area",
  },
};

SimpleTextArea.storyName = "Simple Text Area";

/**
 * Customized text area example with rows and columns dimensions.
 */
export const CustomizedTextArea: StoryObj<TextAreaProps> = {
  args: {
    p: 2,
    rows: 5,
    cols: 80,
    children: "Customized Text Area",
  },
};

CustomizedTextArea.storyName = "Customized Text Area";

/**
 * Non resizable text area example.
 */
export const NonResizableTextArea: StoryObj<TextAreaProps> = {
  args: {
    p: 2,
    rows: 5,
    cols: 80,
    css: { resize: "none" },
    children: "Non Resizable Text Area",
  },
};

NonResizableTextArea.storyName = "Non Resizable Text Area";
