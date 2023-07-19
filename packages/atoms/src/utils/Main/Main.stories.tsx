import { Meta, StoryObj } from "@storybook/react";
import { Main, MainProps } from ".";

const meta: Meta<MainProps> = {
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

export const Default: StoryObj<MainProps> = {
  args: {
    children: <p>This is some example content for the main of the page.</p>,
  },
};

Default.storyName = "Default Main";
