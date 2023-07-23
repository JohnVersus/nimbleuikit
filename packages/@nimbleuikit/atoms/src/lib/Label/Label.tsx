import styled from "styled-components";
import { LabelProps } from ".";
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

const Label = styled.label<LabelProps>({}, ...commonSystemProps);

export default Label;
