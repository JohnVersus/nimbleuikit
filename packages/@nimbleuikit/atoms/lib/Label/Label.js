import styled from "styled-components";
import { commonSystemProps } from "../system";
/**
 * `Label` is a styled-component used to create HTML label elements.
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
const Label = styled.label({}, ...commonSystemProps);
export default Label;
