import { Meta, StoryObj } from "@storybook/react";
import { Header, HeaderProps } from ".";

const meta: Meta<HeaderProps> = {
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

export const Default: StoryObj<HeaderProps> = {
  args: {
    children: <h1>Example Page</h1>,
  },
};

Default.storyName = "Default Header";
