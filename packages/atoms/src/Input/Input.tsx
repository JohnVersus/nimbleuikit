import styled from "styled-components";
import { commonSystemProps } from "../system";
import { InputProps } from ".";

const Input = styled.input<InputProps>({}, ...commonSystemProps);

export default Input;
