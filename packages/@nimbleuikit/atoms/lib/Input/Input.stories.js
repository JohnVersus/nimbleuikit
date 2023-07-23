import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "./";
import { Label } from "../Label";
/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta = {
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
export const TextInput = {
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
export const PasswordInput = {
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
export const NumberInput = {
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
export const ButtonInput = {
    args: {
        type: "button",
        value: "Click Me",
    },
};
ButtonInput.storyName = "Button Input";
/**
 * An input of type 'color'.
 */
export const ColorInput = {
    args: {
        type: "color",
    },
};
ColorInput.storyName = "Color Input";
/**
 * An input of type 'file'.
 */
export const FileInput = {
    args: {
        type: "file",
    },
};
FileInput.storyName = "File Input";
/**
 * An input of type 'range'.
 */
export const RangeInput = {
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
export const CheckboxWithLabel = (args) => (_jsxs(_Fragment, { children: [_jsx(Input, { ...args, id: "checkbox" }), _jsx(Label, { htmlFor: "checkbox", children: "Check this box" })] }));
CheckboxWithLabel.args = {
    type: "checkbox",
};
CheckboxWithLabel.storyName = "Checkbox with Label";
