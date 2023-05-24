import styled from "styled-components";
import { commonSystemProps } from "../system";
import { TextProps } from "./";

const Text = styled.span<TextProps>({}, ...commonSystemProps);

export default Text;
