import type {
  SpaceProps, // Defines margin and padding CSS properties
  ColorProps, // Defines color and background-color CSS properties
  LayoutProps, // Defines width, height, and display CSS properties
  TypographyProps, // Defines font-related CSS properties
  FlexboxProps, // Defines flex-container and flex-item CSS properties
  GridProps, // Defines grid-container CSS properties
  BackgroundProps, // Defines background CSS properties
  BorderProps, // Defines border CSS properties
  PositionProps, // Defines position, top, right, bottom, left, and zIndex CSS properties
  ShadowProps, // Defines box-shadow and text-shadow CSS properties
} from "styled-system";
import type { ReactNode } from "react";
import type { CSSObject } from "styled-components";

export interface BoxProps
  /**
   * margin and padding CSS properties
   */
  extends SpaceProps,
    /**
     * color and background-color CSS properties
     */
    ColorProps,
    /**
     * width, height, and display CSS properties
     */
    LayoutProps,
    /**
     * font-related CSS properties
     */
    TypographyProps,
    /**
     * flex-container and flex-item CSS properties
     */
    FlexboxProps,
    /**
     * grid-container CSS properties
     */
    GridProps,
    /**
     * background CSS properties
     */
    BackgroundProps,
    /**
     * border CSS properties
     */
    BorderProps,
    /**
     * position, top, right, bottom, left, and zIndex CSS properties
     */
    PositionProps,
    /**
     * box-shadow and text-shadow CSS properties
     */
    ShadowProps,
    /**
     * custom properties specific to the Box component
     */
    CustomProps {}

interface CustomProps {
  /**
   * Defines the component type to be rendered.
   * Can be any valid React element type (e.g. 'div', 'span', custom component)
   */
  as?: React.ElementType;

  /**
   * Defines the type of accepted children.
   * Can be a single React node, an array of React nodes, a string, a number, or null/undefined
   */
  children?: ReactNode | ReactNode[] | string | number | null | undefined;

  /**
   * Defines the css object to add custom css.
   * Can be a CSSObject or a function that receives the theme and returns a CSSObject
   */
  css?: CSSObject | ((theme: any) => CSSObject);

  /**
   * Defines the placeholder value for input components.
   * Is only relevant for input-based components (e.g. 'input', 'textarea')
   */
  placeholder?: string;
}
