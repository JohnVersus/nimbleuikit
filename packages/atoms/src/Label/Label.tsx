import styled from "styled-components";
import { LabelProps } from ".";
import { commonSystemProps } from "../system";

const Label = styled.label<LabelProps>({}, ...commonSystemProps);

export default Label;
