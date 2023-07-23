import type { Meta, StoryObj } from "@storybook/react";
import { BoxProps } from "./";
/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
declare const meta: Meta<BoxProps>;
export default meta;
/**
 * Simple Box component.
 * This component renders a simple box with text.
 */
export declare const SimpleBox: StoryObj<BoxProps>;
/**
 * Box as a button.
 * This component shows how Box can be used as a button.
 */
export declare const AsButton: StoryObj<BoxProps>;
/**
 * Box as a text.
 * This component demonstrates how Box can be used as a paragraph.
 */
export declare const AsText: StoryObj<BoxProps>;
/**
 * Box as an input.
 * This component shows how Box can be used as an input element.
 */
export declare const AsInput: StoryObj<BoxProps>;
/**
 * Box with a border.
 * This component shows a Box with a solid border.
 */
export declare const WithBorder: StoryObj<BoxProps>;
/**
 * Box with custom CSS.
 * This component demonstrates a Box with custom CSS applied.
 */
export declare const WithCustomCSS: StoryObj<BoxProps>;
