import styled from "styled-components";
import { commonSystemProps } from "../system";
import { FlexBoxProps } from "./types";

/**
 * `FlexBox` is a styled-component used to create flex containers.
 *
 * @component
 * @example
 * ```jsx
 * <FlexBox>
 *   <Box>Item 1</Box>
 *   <Box>Item 2</Box>
 *   <Box>Item 3</Box>
 * </FlexBox>
 * ```
 */

const FlexBox = styled.div<FlexBoxProps>(
  { display: "flex" },
  ...commonSystemProps,
  (props) => ({
    gap: props.gap,
  })
);

export default FlexBox;
