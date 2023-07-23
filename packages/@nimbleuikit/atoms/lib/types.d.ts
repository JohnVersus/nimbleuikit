import { ReactNode } from "react";
import { CSSObject } from "styled-components";
import { SpaceProps, ColorProps, LayoutProps, TypographyProps, FlexboxProps, GridProps, BackgroundProps, BorderProps, PositionProps, ShadowProps } from "styled-system";
/**
 * CommonProps is a collection of shared properties
 * that apply to all styled components in the project.
 *
 * These props are derived from the styled-system library,
 * allowing components to directly respond to changes in theme
 * and to be adjusted with inline props.
 */
export interface CommonStyleProps extends SpaceProps, // Space-related props (margin, padding, etc.)
ColorProps, // Color-related props (color, backgroundColor, etc.)
LayoutProps, // Layout-related props (width, height, display, etc.)
TypographyProps, // Typography-related props (fontSize, fontWeight, etc.)
FlexboxProps, // Flexbox-related props (alignItems, justifyContent, etc.)
GridProps, // Grid-related props (gridGap, gridRow, gridColumn, etc.)
BackgroundProps, // Background-related props (backgroundImage, backgroundSize, etc.)
BorderProps, // Border-related props (borderColor, borderRadius, etc.)
PositionProps, // Position-related props (zIndex, top, right, bottom, left)
ShadowProps {
    /**
     * The HTML element or custom component as which the component should render
     */
    as?: React.ElementType;
    /**
     * The content of the component
     */
    children?: ReactNode | ReactNode[] | string | number | null | undefined;
    /**
     * Custom CSS for the component.
     * This can either be a CSSObject, or a function that receives the theme and returns a CSSObject.
     */
    css?: CSSObject | ((theme: any) => CSSObject);
}
