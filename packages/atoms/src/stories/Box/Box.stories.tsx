import type { Meta, StoryObj } from "@storybook/react";
import Box, { BoxProps } from "../../Box";

const meta: Meta<BoxProps> = {
  title: "Atoms/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    bg: { control: "color" },
  },
};

export default meta;

/**
 * Simple Box component.
 * This component renders a simple box with text.
 */
export const SimpleBox: StoryObj<BoxProps> = {
  args: {
    as: "div",
    p: 3,
    color: "white",
    bg: "gray",
    width: [1, 1 / 2, 1 / 4],
    children: "Hello, world!",
  },
};

/**
 * Box as a button.
 * This component shows how Box can be used as a button.
 */
export const AsButton: StoryObj<BoxProps> = {
  args: {
    as: "button",
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    children: "I'm a Box as a button!",
    color: "red",
    fontWeight: "lighter",
    css: {
      cursor: "pointer",
      ":hover": {
        fontWeight: "bold",
      },
    },
  },
};

/**
 * Box as a text.
 * This component demonstrates how Box can be used as a paragraph.
 */
export const AsText: StoryObj<BoxProps> = {
  args: {
    as: "p",
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    children: "I'm a Box as a text!",
    color: "blue",
    fontSize: "20px",
    css: {
      textDecoration: "underline",
      ":hover": {
        textDecoration: "none",
      },
    },
  },
};

/**
 * Box as an input.
 * This component shows how Box can be used as an input element.
 */
export const AsInput: StoryObj<BoxProps> = {
  args: {
    as: "input",
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    placeholder: "I'm a Box as a input!",
    color: "red",
    fontSize: "20px",
  },
};

/**
 * Box with a border.
 * This component shows a Box with a solid border.
 */
export const WithBorder: StoryObj<BoxProps> = {
  args: {
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    children: "I'm a Box with a border!",
    border: "2px solid black",
    borderRadius: "5px",
  },
};

/**
 * Box with custom CSS.
 * This component demonstrates a Box with custom CSS applied.
 */
export const WithCustomCSS: StoryObj<BoxProps> = {
  args: {
    p: 3,
    width: 1 / 2,
    bg: "lightgray",
    children: "I'm a Box with custom CSS!",
    css: {
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      transition: "box-shadow 0.3s ease-in-out",
      ":hover": {
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      },
    },
  },
};
