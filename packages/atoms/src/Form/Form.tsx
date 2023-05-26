import styled from "styled-components";
import { commonSystemProps } from "../system";
import { FormProps } from "./types";

const Form = styled.form<FormProps>({}, ...commonSystemProps);

export default Form;
