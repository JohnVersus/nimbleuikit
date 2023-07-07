import styled from "styled-components";
import { commonSystemProps } from "../system";
import { SampleProps } from "./types";

/**
 * A Sample component.
 *
 * This component is a styled div, that can accept all props which a normal div can accept.
 *
 * @example
 * ```jsx
 * <Sample color="primary" bg="secondary">
 *   Hello World
 * </Sample>
 * ```
 *
 * @component
 * @see {@link https://styled-system.com/api}
 */
const Sample = styled.div<SampleProps>(
  {
    // space for fixed component styling if required
  },
  ...commonSystemProps
);

export default Sample;
