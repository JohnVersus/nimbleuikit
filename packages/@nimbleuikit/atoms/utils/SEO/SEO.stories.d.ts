import { Meta, StoryObj } from "@storybook/react";
import { SEOProps } from ".";
declare const meta: Meta<SEOProps>;
export default meta;
/**
 *
 * ### Usage
 *
 * ```jsx
 * <SEO
 *   title="Example Page"
 *   description="This is an example page for SEO purposes."
 *   image="https://example.com/image.jpg"
 *   url="https://example.com"
 *   keywords={["example", "SEO"]}
 *   lang="en"
 *   type="website"
 * />
 * ```
 */
export declare const Default: StoryObj<SEOProps>;
