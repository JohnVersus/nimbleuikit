import type { Meta, StoryObj } from "@storybook/react";
import { TooltipProps } from ".";
/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
declare const meta: Meta<TooltipProps>;
export default meta;
/**
 * Dynamic tooltip example. Changes the tooltip position based on the available screen space.
 */
export declare const DynamicTooltip: StoryObj<TooltipProps>;
/**
 * Tooltip custom position example. Shows the tooltip on bottom.
 */
export declare const DefaultTooltip: StoryObj<TooltipProps>;
/**
 * Tooltip with styled content and button trigger example.
 */
export declare const StyledTooltip: StoryObj<TooltipProps>;
