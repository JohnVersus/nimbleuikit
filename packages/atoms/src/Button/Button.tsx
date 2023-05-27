import styled from "styled-components";
import { commonSystemProps } from "../system";
import { ButtonProps } from ".";

/**
 * `Button` is a styled-component used to create buttons.
 *
 * @component
 * @example
 * ```jsx
 * <Button onClick={() => alert('Clicked!')}>
 *   Click me
 * </Button>
 * ```
 */

const Button = styled.button<ButtonProps>(
  {
    cursor: "pointer",
    ":disabled": {
      opacity: 0.8,
      cursor: "not-allowed",
    },
  },
  ...commonSystemProps
);

export default Button;
