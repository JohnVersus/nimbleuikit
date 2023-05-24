import styled from "styled-components";
import { commonSystemProps } from "../system";

import { BoxProps } from ".";

const Box = styled.div<BoxProps>(
  {
    // For static styles
  },
  ...commonSystemProps
);

export default Box;
