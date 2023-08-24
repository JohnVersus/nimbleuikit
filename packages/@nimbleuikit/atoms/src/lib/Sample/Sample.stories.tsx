import type { Meta, StoryObj } from "@storybook/react";
import { Sample, SampleProps } from ".";

/**
 * Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props.
 */
const meta: Meta<SampleProps> = {
  title: "Sample/Sample for development",
  component: Sample,
  tags: ["autodocs"], // for documentation
};

export default meta;

/**
 * Simple Sample
 */
export const SimpleSample: StoryObj<SampleProps> = {
  args: {
    children: "Simple Sample Component",
  },
};

SimpleSample.storyName = "Simple Sample";
