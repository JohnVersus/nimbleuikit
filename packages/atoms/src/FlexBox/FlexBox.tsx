import styled from "styled-components";
import { commonSystemProps } from "../system";
import { FlexBoxProps } from "./types";

const FlexBox = styled.div<FlexBoxProps>(
  { display: "flex" },
  ...commonSystemProps
);

export default FlexBox;
