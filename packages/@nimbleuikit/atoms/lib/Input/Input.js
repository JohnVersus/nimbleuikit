import styled from "styled-components";
import { commonSystemProps } from "../system";
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
const Input = styled.input({}, ...commonSystemProps);
export default Input;
