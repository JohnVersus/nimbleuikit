import { css as styledCss, CSSObject } from "styled-components";
import {
  space,
  color,
  layout,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from "styled-system";

export type StyledProps = { css?: CSSObject | ((theme: any) => CSSObject) };

/**
 * All styled-system functions grouped into a single object.
 * This can be used as the second argument to the `styled` function from `styled-components`.
 */
export const commonSystemProps = [
  space,
  color,
  layout,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  (props: StyledProps) => props.css && styledCss(props.css as CSSObject),
];
