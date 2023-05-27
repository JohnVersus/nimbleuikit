import styled from "styled-components";
import { commonSystemProps } from "../system";
import { FormProps } from "./types";

/**
 * `Form` is a styled-component used to create HTML form elements.
 *
 * @component
 * @example
 * ```jsx
 * <Form onSubmit={handleSubmit}>
 *   <Label>
 *     Name:
 *     <Input type="text" />
 *   </Label>
 *   <Button type="submit">Submit</Button>
 * </Form>
 * ```
 */

const Form = styled.form<FormProps>({}, ...commonSystemProps);

export default Form;
