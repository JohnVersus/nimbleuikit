import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./";
import { Label } from "../Label";

/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta: Meta<InputProps> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "password",
        "number",
        "email",
        "url",
        "tel",
        "search",
        "range",
        "color",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
        "file",
        "radio",
        "checkbox",
        "button",
        "image",
        "submit",
        "reset",
      ],
    },
  },
};

export default meta;

/**
 * A simple Input component with text input type.
 */
export const TextInput: StoryObj<InputProps> = {
  args: {
    p: 2,
    color: "black",
    type: "text",
    placeholder: "Enter..",
  },
};

TextInput.storyName = "Text Input";

/**
 * An Input component with password input type.
 */
export const PasswordInput: StoryObj<InputProps> = {
  args: {
    p: 2,
    color: "black",
    type: "password",
    placeholder: "Password Input",
  },
};

PasswordInput.storyName = "Password Input";

/**
 * An Input component with number input type.
 */
export const NumberInput: StoryObj<InputProps> = {
  args: {
    p: 2,
    color: "black",
    type: "number",
    placeholder: "Number Input",
  },
};

NumberInput.storyName = "Number Input";

/**
 * An input of type 'button'.
 */
export const ButtonInput: StoryObj<InputProps> = {
  args: {
    type: "button",
    value: "Click Me",
  },
};

ButtonInput.storyName = "Button Input";

/**
 * An input of type 'color'.
 */
export const ColorInput: StoryObj<InputProps> = {
  args: {
    type: "color",
  },
};

ColorInput.storyName = "Color Input";

/**
 * An input of type 'file'.
 */
export const FileInput: StoryObj<InputProps> = {
  args: {
    type: "file",
  },
};

FileInput.storyName = "File Input";

/**
 * An input of type 'range'.
 */
export const RangeInput: StoryObj<InputProps> = {
  args: {
    type: "range",
    min: "1",
    max: "100",
    defaultValue: "50",
  },
};

RangeInput.storyName = "Range Input";

/**
 * An example of a checkbox input with a label.
 */
export const CheckboxWithLabel: StoryObj<InputProps> = (args: InputProps) => (
  <>
    <Input {...args} id="checkbox" />
    <Label htmlFor="checkbox">Check this box</Label>
  </>
);

CheckboxWithLabel.args = {
  type: "checkbox",
};

CheckboxWithLabel.storyName = "Checkbox with Label";
