import styled, { css as styledCss } from "styled-components";
import { commonSystemProps } from "../system";
import { TextProps } from "./";

const Text = styled.span<TextProps>(
  {},
  ...commonSystemProps,
  (props) => props.css && styledCss(props.css)
);

export default Text;
