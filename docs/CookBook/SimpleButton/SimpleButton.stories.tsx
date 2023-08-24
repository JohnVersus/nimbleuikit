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
      table: {
        category: "Appearance",
        position: 1,
      },
    },
    textSize: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      defaultValue: "medium",
      table: {
        category: "Appearance",
        position: 2,
      },
    },
    textColor: {
      control: {
        type: "select",
        options: ["primary", "secondary", "accent"],
      },
      defaultValue: "primary",
      table: {
        category: "Appearance",
        position: 3,
      },
    },
    buttonShape: {
      control: {
        type: "select",
        options: ["square", "rounded", "ellipse"],
      },
      defaultValue: "rounded",
      table: {
        category: "Appearance",
        position: 4,
      },
    },
    icon: {
      control: {
        type: "select",
        options: Object.keys(Icons),
      },
      table: {
        category: "Icon",
        position: 1,
      },
    },
    iconPosition: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
      defaultValue: "right",
      table: {
        category: "Icon",
        position: 2,
      },
    },
    iconColor: {
      control: {
        type: "color",
      },
      defaultValue: "white",
      table: {
        category: "Icon",
        position: 3,
      },
    },
    onClick: {
      action: "clicked",
      table: {
        category: "Actions",
        position: 1,
      },
    },
    children: {
      table: {
        category: "Native Button Props",
        position: 1,
      },
    },
    disabled: {
      table: {
        category: "Native Button Props",
        position: 2,
      },
    },
    as: {
      table: {
        category: "Native Button Props",
        position: 3,
      },
    },
    css: {
      table: {
        category: "Native Button Props",
        position: 4,
      },
    },
    // @ts-ignore
    theme: {
      table: {
        category: "Native Button Props",
        position: 5,
      },
    },
    forwardedAs: {
      table: {
        category: "Native Button Props",
        position: 6,
      },
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
