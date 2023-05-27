import styled from "styled-components";
import { commonSystemProps } from "../system";
import { TextProps } from "./";

/**
 * `Text` is a styled-component used for displaying text content.
 *
 * @component
 * @example
 * ```jsx
 * <Text>This is some text.</Text>
 * ```
 */

const Text = styled.span<TextProps>({}, ...commonSystemProps);

export default Text;
