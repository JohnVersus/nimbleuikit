import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "../Box";
import { Grid } from ".";
/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta = {
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
export const TemplateLayoutGrid = {
    args: {
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        children: Array.from({ length: 9 }).map((_, i) => (_jsx(Box, { bg: "lightgray", height: 50, display: "flex", alignItems: "center", justifyContent: "center", children: `Box ${i + 1}` }, i))),
    },
};
TemplateLayoutGrid.storyName = "Template Layout Grid";
/**
 * Auto Layout Grid
 */
export const AutoLayoutGrid = {
    args: {
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "10px",
        children: Array.from({ length: 12 }).map((_, i) => (_jsx(Box, { bg: "lightgray", height: 50, display: "flex", alignItems: "center", justifyContent: "center", children: `Box ${i + 1}` }, i))),
    },
};
AutoLayoutGrid.storyName = "Auto Layout Grid";
/**
 * Responsive Grid
 */
export const ResponsiveGrid = {
    args: {
        gridTemplateColumns: [
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)", // large desktop
        ],
        gridAutoRows: "1fr",
        gap: "10px",
        children: Array.from({ length: 12 }).map((_, i) => (_jsx(Box, { bg: "lightgray", height: 50, display: "flex", alignItems: "center", justifyContent: "center", children: `Box ${i + 1}` }, i))),
    },
};
ResponsiveGrid.storyName = "Responsive Grid";
