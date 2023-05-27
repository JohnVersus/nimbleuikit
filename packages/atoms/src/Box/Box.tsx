import styled from "styled-components";
import { commonSystemProps } from "../system";
import { BoxProps } from ".";

/**
 * `Box` is a styled-component used for layout and contains style props for margin and padding.
 *
 * @component
 * @example
 * ```jsx
 * <Box m={2} p={2}>
 *   This is a box component.
 * </Box>
 * ```
 */

const Box = styled.div<BoxProps>(
  {
    // For static styles
  },
  ...commonSystemProps
);

export default Box;
