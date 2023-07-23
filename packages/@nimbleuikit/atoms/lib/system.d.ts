import { CSSObject } from "styled-components";
export type StyledProps = {
    css?: CSSObject | ((theme: any) => CSSObject);
};
/**
 * All styled-system functions grouped into a single object.
 * This can be used as the second argument to the `styled` function from `styled-components`.
 */
export declare const commonSystemProps: (import("styled-system").styleFn | ((props: StyledProps) => import("styled-components").FlattenSimpleInterpolation | undefined))[];
