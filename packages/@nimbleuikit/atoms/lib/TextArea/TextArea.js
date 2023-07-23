import styled from "styled-components";
import { commonSystemProps } from "../system";
/**
 * `TextArea` is a styled-component used to create HTML textarea elements.
 *
 * @component
 * @example
 * ```jsx
 * <Label>
 *   Message:
 *   <TextArea rows={4} />
 * </Label>
 * ```
 */
const TextArea = styled.textarea({}, ...commonSystemProps);
export default TextArea;
