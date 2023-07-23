import styled from "styled-components";
import { commonSystemProps } from "../system";
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
const Form = styled.form({}, ...commonSystemProps);
export default Form;
