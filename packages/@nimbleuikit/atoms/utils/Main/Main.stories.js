import { jsx as _jsx } from "react/jsx-runtime";
import { Main } from ".";
const meta = {
    title: "Atoms/Utils/Main",
    component: Main,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: "text",
            description: "The content of the main.",
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
          The \`Main\` component is a simple utility component that wraps its children 
    inside a standard HTML \`main\` tag.
        `,
            },
            source: {
                code: `
          <Main>
            <p>This is some example content for the Main of the page.</p>
          </Main>
        `,
            },
        },
    },
};
export default meta;
/**
 * ### Usage
 * ```jsx
 * <Main>
 * <p>This is some example content for the main of the page.</p>
 * </Main>
 * ```
 */
export const Default = {
    args: {
        children: _jsx("p", { children: "This is some example content for the main of the page." }),
    },
};
Default.storyName = "Default Main";
