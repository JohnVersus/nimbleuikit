import { CommonStyleProps } from "src/lib";
import { CSSObject } from ".";

export type VariantProps = Omit<CommonStyleProps, "css"> | CSSObject;
