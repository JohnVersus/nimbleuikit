import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Body, BodyProps } from ".";

const meta: Meta<BodyProps> = {
  title: "Atoms/Utils/Body",
  component: Body,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The content of the body.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
          The \`Body\` component is a simple utility component that wraps its children 
    inside a standard HTML \`main\` tag.
        `,
      },
      source: {
        code: `
          <Body>
            <p>This is some example content for the body of the page.</p>
          </Body>
        `,
      },
    },
  },
};

export default meta;

/**
 * ### Usage
 * ```jsx
 * <Body>
 * <p>This is some example content for the body of the page.</p>
 * </Body>
 * ```
 */

export const Default: StoryObj<BodyProps> = {
  args: {
    children: <p>This is some example content for the body of the page.</p>,
  },
};

Default.storyName = "Default Body";
