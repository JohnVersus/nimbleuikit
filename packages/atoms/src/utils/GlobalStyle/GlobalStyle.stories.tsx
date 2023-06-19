import { Meta, StoryObj } from "@storybook/react";
import { GlobalStyle, GlobalStyleProps } from ".";

const meta: Meta = {
  title: "Atoms/Utils/GlobalStyle",
  component: GlobalStyle,
  tags: ["autodocs"],
  argTypes: {
    css: {
      control: "object",
      description: "The CSS rules to be applied globally",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
    The \`GlobalStyle\` component accepts a CSS object prop and applies these styles globally.            
    It accepts the following props:
        - \`css\`: The CSS rules to be applied globally.
              `,
      },
      source: {
        code: `
        <GlobalStyle
          css={{
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            backgroundColor: '#fff',
          }}
        />
        `,
      },
    },
  },
};

export default meta;

/**
 *
 * ### Usage
 *
 * ```jsx
 * <GlobalStyle
 *        css={{
 *          fontFamily: 'Arial, sans-serif',
 *          color: '#333',
 *          backgroundColor: '#fff',
 *        }}
 *      />
 * ```
 */

export const Default: StoryObj<GlobalStyleProps> = {
  args: {
    css: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      backgroundColor: "#fff",
    },
  },
};

Default.storyName = "GlobalStyle";
