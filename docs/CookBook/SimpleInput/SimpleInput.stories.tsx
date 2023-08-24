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
      table: {
        category: "Design",
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
        category: "Design",
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
        category: "Design",
        position: 3,
      },
    },
    inputShape: {
      control: {
        type: "select",
        options: ["square", "rounded", "ellipse"],
      },
      defaultValue: "rounded",
      table: {
        category: "Design",
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
      defaultValue: "left",
      table: {
        category: "Icon",
        position: 2,
      },
    },
    iconColor: {
      control: {
        type: "color",
      },
      defaultValue: "#000",
      table: {
        category: "Icon",
        position: 3,
      },
    },
    width: {
      control: {
        type: "text",
      },
      defaultValue: "100%",
      table: {
        category: "Size",
        position: 1,
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
      table: {
        category: "Native Input Props",
        position: 1,
      },
    },
    as: {
      control: {
        type: "text",
      },
      table: {
        category: "Native Input Props",
        position: 2,
      },
    },
    children: {
      control: {
        type: "text",
      },
      table: {
        category: "Native Input Props",
        position: 3,
      },
    },
    css: {
      control: {
        type: "text",
      },
      table: {
        category: "Native Input Props",
        position: 4,
      },
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
    width: "400px",
  },
};

/**
 * Primary variant of the SimpleInput.
 */
export const Primary: StoryObj<SimpleInputProps> = {
  args: {
    variantType: "primary",
    width: "400px",
    placeholder: "Primary Input",
  },
};

/**
 * Secondary variant of the SimpleInput.
 */
export const Secondary: StoryObj<SimpleInputProps> = {
  args: {
    variantType: "secondary",
    width: "400px",
    placeholder: "Secondary Input",
  },
};

/**
 * Outline variant of the SimpleInput.
 */
export const Outline: StoryObj<SimpleInputProps> = {
  args: {
    variantType: "outline",
    width: "400px",
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
    width: "400px",
    placeholder: "Search...",
    inputShape: "square",
    variantType: "primary",
  },
};

/**
 * SimpleInput with an icon on the right.
 */
export const IconRight: StoryObj<SimpleInputProps> = {
  args: {
    icon: "X",
    iconPosition: "right",
    width: "400px",
    placeholder: "Enter text",
    inputShape: "square",
    variantType: "primary",
  },
};
