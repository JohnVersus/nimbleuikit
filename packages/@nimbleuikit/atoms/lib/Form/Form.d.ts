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
declare const Form: import("styled-components").StyledComponent<"form", any, FormProps, never>;
export default Form;
