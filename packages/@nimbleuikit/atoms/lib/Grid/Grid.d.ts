import { GridProps } from "./types";
/**
 * `Grid` is a styled-component used to create grid layouts.
 *
 * The `gridTemplateColumns` prop can be used to specify the column structure of the grid.
 *
 * The `gap` prop can be used to specify the space between grid items.
 *
 * The `gridAutoRows` and `gridAutoColumns` props can be used to specify the size of rows and columns respectively
 * that are created implicitly by placing items outside the explicit grid.
 *
 * @component
 * @example
 * ```jsx
 * <Grid gridTemplateColumns="repeat(3, 1fr)" gap="10px">
 *  <Box bg="lightgray">Box 1</Box>
 *  <Box bg="lightgray">Box 2</Box>
 *  <Box bg="lightgray">Box 3</Box>
 * </Grid>
 * ```
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
 */
declare const Grid: import("styled-components").StyledComponent<"div", any, GridProps, never>;
export default Grid;
