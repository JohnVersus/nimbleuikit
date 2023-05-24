import styled from "styled-components";
import { commonSystemProps } from "../system";

import { ButtonProps } from ".";

const Button = styled.button<ButtonProps>(
  {
    cursor: "pointer",
    ":disabled": {
      opacity: 0.8,
      cursor: "not-allowed",
    },
  },
  ...commonSystemProps
);

export default Button;
