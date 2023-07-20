# Nimble UI Kit

The Nimble UI Kit is a collection of versatile and reusable React components for building user interfaces. The components are designed using styled-components and styled-system which enable easy usage of common layout, typography, and style props, thus making it faster and simpler to build responsive UIs.

## Packages

This monorepo contains the following packages:

- **@nimbleuikit/atoms**: Basic styled building blocks.

## Installation

Each package needs to be installed separately. Refer to the individual package README for installation instructions.

## Docs

[StoryBook Docs](https://johnversus.github.io/nimbleuikit/)

## Example component with variants

Here is an example code of a styled Button component with multiple variants like `variantType`, `textSize`, `textColor`, `buttonShape` and some props to add react feather `icons`.

The buttons generated using the below component looks like this.

```tsx
import { Button, ButtonProps } from "@nimbleuikit/atoms";
import { styled, variant, VariantProps } from "@nimbleuikit/atoms/utils";
import * as Icons from "react-feather";

type CustomButtonProps = ButtonProps & {
  variantType?: "primary" | "secondary" | "navigation";
  textSize?: "small" | "medium" | "large";
  textColor?: "primary" | "secondary" | "accent";
  buttonShape?: "square" | "rounded" | "ellipse";
  icon?: keyof typeof Icons;
  iconPosition?: "left" | "right";
  iconColor?: string;
};

const colors = {
  primary: "linear-gradient(90deg, #00916E 0%, #00B8A9 100%)",
  secondary: "linear-gradient(90deg, #68A7FF 0%, #4866FF 100%)",
  accent: "#CAFBE7",
};

const fontSizes = ["14px", "16px", "18px"];
const fontWeights = ["400", "500", "600"];
const radii = { small: "5px", medium: "10px", large: "15px" };

const variantStyle = variant<VariantProps>({
  prop: "variantType",
  variants: {
    primary: {
      background: colors.primary,
      color: "white",
      border: "none",
      boxShadow: "0px 4px 14px 0px rgba(0, 146, 110, 0.39)",
      "&:hover": {
        boxShadow: "0px 6px 20px 0px rgba(0, 146, 110, 0.39)",
        transform: "translateY(-1px)",
      },
      "&:active": {
        boxShadow: "0px 4px 14px 0px rgba(0, 146, 110, 0.39)",
        transform: "translateY(1px)",
      },
    },
    secondary: {
      background: colors.secondary,
      color: "white",
      border: "none",
      boxShadow: "0px 4px 14px 0px rgba(104, 167, 255, 0.39)",
      "&:hover": {
        boxShadow: "0px 6px 20px 0px rgba(104, 167, 255, 0.39)",
        transform: "translateY(-1px)",
      },
      "&:active": {
        boxShadow: "0px 4px 14px 0px rgba(104, 167, 255, 0.39)",
        transform: "translateY(1px)",
      },
    },
    navigation: {
      backgroundColor: "transparent",
      color: colors.primary,
      border: "none",
      borderBottom: `1px solid black`,
      p: 0,
      "&:hover": {
        backgroundColor: "transparent",
        borderBottom: `2px solid`,
      },
      "&:active": {
        backgroundColor: "transparent",
      },
    },
  },
});
const fontColorStyle = variant<VariantProps>({
  prop: "textColor",
  variants: {
    primary: {
      color: colors.primary,
    },
    secondary: {
      color: colors.secondary,
    },
    accent: {
      color: colors.accent,
    },
  },
});
const fontSizeStyle = variant<VariantProps>({
  prop: "textSize",
  variants: {
    small: {
      fontSize: fontSizes[0],
      fontWeight: fontWeights[0],
      borderRadius: radii.small,
      padding: "10px 20px",
    },
    medium: {
      fontSize: fontSizes[1],
      fontWeight: fontWeights[1],
      borderRadius: radii.medium,
      padding: "12px 24px",
    },
    large: {
      fontSize: fontSizes[2],
      fontWeight: fontWeights[2],
      borderRadius: radii.large,
      padding: "14px 28px",
    },
  },
});
const shapeStyle = variant<VariantProps>({
  prop: "buttonShape",
  variants: {
    square: {
      borderRadius: radii.small,
    },
    rounded: {
      borderRadius: radii.medium,
    },
    ellipse: {
      borderRadius: radii.large,
    },
  },
});

const IconWrapper = styled("div")<{
  iconPosition: "left" | "right";
  hasChildren: boolean;
  iconColor: string;
}>`
  padding: ${(props) =>
    props.hasChildren
      ? props.iconPosition === "right"
        ? "0 0 0 0.5em"
        : "0 0.5em 0 0"
      : "0"};
`;

const CustomButton = styled(
  ({
    icon,
    iconPosition = "right",
    children,
    iconColor = "white",
    ...props
  }: CustomButtonProps) => {
    const Icon = icon ? Icons[icon] : null;
    return (
      <Button {...props}>
        {Icon && iconPosition === "left" && (
          <IconWrapper
            iconPosition={iconPosition}
            hasChildren={Boolean(children)}
            iconColor={iconColor}
          >
            <Icon color={iconColor} />
          </IconWrapper>
        )}
        {children}
        {Icon && iconPosition === "right" && (
          <IconWrapper
            iconPosition={iconPosition}
            hasChildren={Boolean(children)}
            iconColor={iconColor}
          >
            <Icon color={iconColor} />
          </IconWrapper>
        )}
      </Button>
    );
  }
)(
  {
    // default styles here
    cursor: "pointer",
    transition: "all 0.3s ease",
    padding: "1em",
    minWidth: "50px",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ":hover": {
      transform: "scale(1.02)",
    },
    ":active": {
      transform: "scale(0.98)",
    },
  },
  variantStyle,
  fontSizeStyle,
  fontColorStyle,
  shapeStyle
);

export default CustomButton;
```

## Contribution

Contributions are always welcome! Please read the contribution guidelines before starting.

## License

MIT
