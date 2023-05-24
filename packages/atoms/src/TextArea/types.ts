import { CommonStyleProps } from "../types";

export interface TextAreaProps
  extends CommonStyleProps,
    Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      "children" | "color"
    > {}
