import { jsx as _jsx } from "react/jsx-runtime";
import { Header } from ".";
const meta = {
    title: "Atoms/Utils/Header",
    component: Header,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: "text",
            description: "The content of the header.",
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
          The \`Header\` component is a simple utility component that wraps its children 
    inside a standard HTML \`header\` tag.
        `,
            },
            source: {
                code: `
          <Header>
            <h1>Example Page</h1>
          </Header>
        `,
            },
        },
    },
};
export default meta;
/**
 * ### Usage
 * ```jsx
 * <Header>
 * <h1>Example Page</h1>
 * </Header>
 * ```
 */
export const Default = {
    args: {
        children: _jsx("h1", { children: "Example Page" }),
    },
};
Default.storyName = "Default Header";
