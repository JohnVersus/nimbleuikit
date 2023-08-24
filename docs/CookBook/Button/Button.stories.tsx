import type { Meta, StoryObj } from "@storybook/react";
import CustomButton, { CustomButtonProps } from "./CustomButton"; // Update with the correct path to your component
import * as Icons from "react-feather";

/**
 * Customizable Button component.
 * This component offers a variety of customization options to create unique button designs.
 *
 * Refer to [Props Details](?path=/docs/cookbook-custombutton--props-details) for details on the available props.
 *
 * Refer to [Source Code](?path=/docs/cookbook-custombutton-sourcecode--documentation) for component code.
 */

const meta: Meta<CustomButtonProps> = {
  title: "CookBook/CustomButton",
  component: CustomButton,
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
 * Basic usage of the CustomButton component.
 */
export const Basic: StoryObj<CustomButtonProps> = {
  args: {
    children: "Click me",
  },
};

/**
 * Primary variant of the CustomButton.
 */
export const Primary: StoryObj<CustomButtonProps> = {
  args: {
    variantType: "primary",
    children: "Primary",
  },
};

/**
 * Secondary variant of the CustomButton.
 */
export const Secondary: StoryObj<CustomButtonProps> = {
  args: {
    variantType: "secondary",
    children: "Secondary",
  },
};

/**
 * Navigation variant of the CustomButton.
 */
export const Navigation: StoryObj<CustomButtonProps> = {
  args: {
    variantType: "navigation",
    children: "Navigation",
  },
};

/**
 * CustomButton with an icon on the left.
 */
export const IconLeft: StoryObj<CustomButtonProps> = {
  args: {
    icon: "ArrowLeft",
    iconPosition: "left",
    iconColor: "black",
    children: "With Icon",
  },
};

/**
 * CustomButton with an icon on the right.
 */
export const IconRight: StoryObj<CustomButtonProps> = {
  args: {
    icon: "ArrowRight",
    iconPosition: "right",
    iconColor: "black",
    children: "With Icon",
  },
};
