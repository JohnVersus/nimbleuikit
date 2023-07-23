import type { Meta, StoryObj } from "@storybook/react";
import { ContentLoaderProps } from ".";
/**
 * Placeholder loading components for images, text, and a combination of both.
 */
declare const meta: Meta<ContentLoaderProps>;
export default meta;
/**
 * The ContentLoader component when used as an image loader
 */
export declare const ImageLoader: StoryObj<ContentLoaderProps>;
/**
 * The ContentLoader component when used as a text loader
 */
export declare const TextLoader: StoryObj<ContentLoaderProps>;
