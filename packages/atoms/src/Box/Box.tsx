import styled, { css as styledCss } from "styled-components";

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
import { BoxProps } from ".";

const Box = styled.div<BoxProps>(
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
  (props) => props.css && styledCss(props.css)
);

export default Box;
