import type { Meta, StoryObj } from "@storybook/react";
import SimpleInput, { SimpleInputProps } from "./SimpleInput";
import * as Icons from "react-feather";

/**
 * Customizable Input component.
 * This component offers a variety of customization options to create unique input designs.
 *
 * Refer to [Props Details](?path=/docs/cookbook-simpleinput--props-details) for details on the available props.
 *
 * Refer to [Source Code](?path=/docs/cookbook-simpleinput-sourcecode--documentation) for component code.
 */

const meta: Meta<SimpleInputProps> = {
  title: "CookBook/SimpleInput",
  component: SimpleInput,
  tags: ["autodocs"],
  argTypes: {
    variantType: {
      control: {
        type: "select",
        options: ["primary", "secondary", "outline"],
      },
      defaultValue: "outline",
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
    inputShape: {
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
      defaultValue: "left",
    },
    iconColor: {
      control: {
        type: "color",
      },
      defaultValue: "#000",
    },
    width: {
      control: {
        type: "text",
      },
      defaultValue: "100%",
    },
  },
};

export default meta;

/**
 * Basic usage of the SimpleInput component.
 */
export const Basic: StoryObj<SimpleInputProps> = {
  args: {
    placeholder: "Enter text",
  },
};

/**
 * Primary variant of the SimpleInput.
 */
export const Primary: StoryObj<SimpleInputProps> = {
  args: {
    variantType: "primary",
    placeholder: "Primary Input",
  },
};

/**
 * Secondary variant of the SimpleInput.
 */
export const Secondary: StoryObj<SimpleInputProps> = {
  args: {
    variantType: "secondary",
    placeholder: "Secondary Input",
  },
};

/**
 * Outline variant of the SimpleInput.
 */
export const Outline: StoryObj<SimpleInputProps> = {
  args: {
    variantType: "outline",
    placeholder: "Outline Input",
  },
};

/**
 * SimpleInput with an icon on the left.
 */
export const IconLeft: StoryObj<SimpleInputProps> = {
  args: {
    icon: "Search",
    iconPosition: "left",
    placeholder: "Search...",
  },
};

/**
 * SimpleInput with an icon on the right.
 */
export const IconRight: StoryObj<SimpleInputProps> = {
  args: {
    icon: "X",
    iconPosition: "right",
    placeholder: "Enter and press X to clear",
  },
};
