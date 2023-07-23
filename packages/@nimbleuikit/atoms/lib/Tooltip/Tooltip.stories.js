import { jsx as _jsx } from "react/jsx-runtime";
import { Tooltip } from ".";
import { Button } from "../Button";
import { Text } from "../Text";
/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta = {
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
export const DynamicTooltip = {
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
export const DefaultTooltip = {
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
export const StyledTooltip = {
    args: {
        tipPosition: "dynamic",
        children: (_jsx(Button, { background: "white", p: 2, children: "Hover me!" })),
        content: (_jsx(Text, { color: "green", fontWeight: "bold", children: "Styled Tooltip Content" })),
        tooltipBgColor: "lightpink",
    },
};
StyledTooltip.storyName = "Styled Tooltip";
