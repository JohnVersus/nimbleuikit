import styled from "styled-components";
import { commonSystemProps } from "../system";
import { InputProps } from ".";

/**
 * `Input` is a styled-component used to create HTML input elements.
 *
 * @component
 * @example
 * ```jsx
 * <Label>
 *   Name:
 *   <Input type="text" />
 * </Label>
 * ```
 */

const Input = styled.input<InputProps>({}, ...commonSystemProps);

export default Input;
