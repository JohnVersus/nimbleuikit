import { Text } from "./";
/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta = {
    title: "Atoms/Text",
    component: Text,
    tags: ["autodocs"],
    argTypes: {
        color: { control: "color" },
        fontSize: { control: "number" },
        fontWeight: {
            control: "select",
            options: [
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900",
                "normal",
                "bold",
                "bolder",
                "lighter",
                "initial",
                "inherit",
            ],
        },
    },
};
export default meta;
/**
 * A simple text component.
 */
export const SimpleText = {
    args: {
        p: 2,
        color: "black",
        children: "Simple Text",
    },
};
SimpleText.storyName = "Simple Text";
/**
 * A large text component with a larger font size.
 */
export const LargeText = {
    args: {
        p: 2,
        color: "black",
        fontSize: 32,
        children: "Large Text",
    },
};
LargeText.storyName = "Large Text";
/**
 * A text component with bold font text.
 */
export const BoldText = {
    args: {
        p: 2,
        color: "black",
        fontWeight: "bold",
        children: "Bold Text",
    },
};
BoldText.storyName = "Bold Text";
/**
 * A text component with shadow on text.
 */
export const ShadowText = {
    args: {
        p: 2,
        color: "black",
        children: "Shadow Text",
        textShadow: "#FC0 1px 0 10px",
    },
};
ShadowText.storyName = "Shadow Text";
