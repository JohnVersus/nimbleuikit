import type { ReactNode } from "react";
import styled, { CSSObject, css as styledCss } from "styled-components";

import {
  space,
  color,
  layout,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from "styled-system";
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

/**
 * BoxProps
 * @property {SpaceProps} SpaceProps - margin and padding CSS properties
 * @property {ColorProps} ColorProps - color and background-color CSS properties
 * @property {LayoutProps} LayoutProps - width, height, and display CSS properties
 * @property {TypographyProps} TypographyProps - font-related CSS properties
 * @property {FlexboxProps} FlexboxProps - flex-container and flex-item CSS properties
 * @property {GridProps} GridProps - grid-container CSS properties
 * @property {BackgroundProps} BackgroundProps - background CSS properties
 * @property {BorderProps} BorderProps - border CSS properties
 * @property {PositionProps} PositionProps - position, top, right, bottom, left, and zIndex CSS properties
 * @property {ShadowProps} ShadowProps - box-shadow and text-shadow CSS properties
 * @property {CustomProps} CustomProps - custom properties specific to the Box component
 */
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

const Box = styled.div<BoxProps>(
  space,
  color,
  layout,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  (props) => props.css && styledCss(props.css)
);

export default Box;
