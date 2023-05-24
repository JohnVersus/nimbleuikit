import styled from "styled-components";
import { commonSystemProps } from "../system";
import { TextAreaProps } from "./types";

const TextArea = styled.textarea<TextAreaProps>({}, ...commonSystemProps);

export default TextArea;
