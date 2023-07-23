import { jsx as _jsx } from "react/jsx-runtime";
import { FlexBox } from ".";
import { Box } from "../Box";
/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta = {
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
const Template = {
    args: {
        gap: "2rem",
        children: [
            _jsx(Box, { bg: "lightgray", p: 3, children: "Box 1" }, "box1"),
            _jsx(Box, { bg: "lightgray", p: 3, children: "Box 2" }, "box2"),
            _jsx(Box, { bg: "lightgray", p: 3, children: "Box 3" }, "box3"),
        ],
    },
};
/**
 * Horizontal Stack
 */
export const HorizontalStack = {
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
export const VerticalStack = {
    ...Template,
    args: {
        ...Template.args,
        flexDirection: "column",
    },
};
VerticalStack.storyName = "Vertical Stack";
