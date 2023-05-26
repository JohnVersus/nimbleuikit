import { HTMLAttributes } from "react";
import { CommonStyleProps } from "../types";

/**
 * Props for the Sample component.
 *
 * Apart from the props mentioned below, this component can receive and handle all props a HTML `div` element can handle.
 *
 * @see {@link https://styled-system.com/api}
 */
export interface SampleProps
  extends CommonStyleProps,
    /**
     * include appropriate htmls attribute types and omit as required based on type errors.
     */

    Omit<HTMLAttributes<HTMLDivElement>, "children" | "color"> {}
