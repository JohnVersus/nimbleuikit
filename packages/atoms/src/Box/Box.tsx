import styled, { css as styledCss } from "styled-components";
import { commonSystemProps } from "../system";

import { BoxProps } from ".";

const Box = styled.div<BoxProps>(
  {
    // For static styles
  },
  ...commonSystemProps,
  (props) => props.css && styledCss(props.css)
);

export default Box;
