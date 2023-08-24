import type { Meta, StoryObj } from "@storybook/react";
import SimpleButton, { SimpleButtonProps } from "./SimpleButton"; // Update with the correct path to your component
import * as Icons from "react-feather";

/**
 * Simpleizable Button component.
 * This component offers a variety of Simpleization options to create unique button designs.
 *
 * Refer to [Props Details](?path=/docs/cookbook-Simplebutton--props-details) for details on the available props.
 *
 * Refer to [Source Code](?path=/docs/cookbook-Simplebutton-sourcecode--documentation) for component code.
 */

const meta: Meta<SimpleButtonProps> = {
  title: "CookBook/SimpleButton",
  component: SimpleButton,
  tags: ["autodocs"],
  argTypes: {
    variantType: {
      control: {
        type: "select",
        options: ["primary", "secondary", "navigation"],
      },
      defaultValue: "primary",
    },
    textSize: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      defaultValue: "medium",
    },
    textColor: {
      control: {
        type: "select",
        options: ["primary", "secondary", "accent"],
      },
      defaultValue: "primary",
    },
    buttonShape: {
      control: {
        type: "select",
        options: ["square", "rounded", "ellipse"],
      },
      defaultValue: "rounded",
    },
    icon: {
      control: {
        type: "select",
        options: Object.keys(Icons),
      },
    },
    iconPosition: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
      defaultValue: "right",
    },
    iconColor: {
      control: {
        type: "color",
      },
      defaultValue: "white",
    },
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;

/**
 * Basic usage of the SimpleButton component.
 */
export const Basic: StoryObj<SimpleButtonProps> = {
  args: {
    children: "Click me",
  },
};

/**
 * Primary variant of the SimpleButton.
 */
export const Primary: StoryObj<SimpleButtonProps> = {
  args: {
    variantType: "primary",
    children: "Primary",
  },
};

/**
 * Secondary variant of the SimpleButton.
 */
export const Secondary: StoryObj<SimpleButtonProps> = {
  args: {
    variantType: "secondary",
    children: "Secondary",
  },
};

/**
 * Navigation variant of the SimpleButton.
 */
export const Navigation: StoryObj<SimpleButtonProps> = {
  args: {
    variantType: "navigation",
    children: "Navigation",
  },
};

/**
 * SimpleButton with an icon on the left.
 */
export const IconLeft: StoryObj<SimpleButtonProps> = {
  args: {
    icon: "ArrowLeft",
    iconPosition: "left",
    iconColor: "black",
    children: "With Icon",
  },
};

/**
 * SimpleButton with an icon on the right.
 */
export const IconRight: StoryObj<SimpleButtonProps> = {
  args: {
    icon: "ArrowRight",
    iconPosition: "right",
    iconColor: "black",
    children: "With Icon",
  },
};
