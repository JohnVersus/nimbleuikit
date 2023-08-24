import { Meta, StoryObj } from "@storybook/react";
import { Text } from "@nimbleuikit/atoms";
const meta: Meta = {
  title: "CookBook/SimpleInput/SourceCode",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

/**
```jsx
import { Input, InputProps } from "@nimbleuikit/atoms";
import { styled, variant, VariantProps } from "@nimbleuikit/atoms/utils";
import * as Icons from "react-feather";

export type SimpleInputProps = InputProps & {
  variantType?: "primary" | "secondary" | "outline";
  textSize?: "small" | "medium" | "large";
  textColor?: "primary" | "secondary" | "accent";
  inputShape?: "square" | "rounded" | "ellipse";
  icon?: keyof typeof Icons;
  iconPosition?: "left" | "right";
  iconColor?: string;
  width?: string;
};

const colors = {
  primary: "#00B8A9",
  secondary: "#4866FF",
  accent: "#CAFBE7",
  border: "#D1D5DB", // A neutral border color
  background: "#F3F4F6", // A neutral background color
};

const textColors = {
  primary: "#00B8A9",
  secondary: "#4866FF",
  accent: "#CAFBE7",
};

const fontSizes = ["14px", "16px", "18px"];
const radii = { square: "4px", rounded: "10px", ellipse: "25px" };

const variantStyle = variant<VariantProps>({
  prop: "variantType",
  variants: {
    primary: {
      borderColor: colors.primary,
      backgroundColor: colors.primary,
      color: "white",
      "&:focus": {
        boxShadow: `0 0 0 2px ${colors.primary}`,
      },
    },
    secondary: {
      borderColor: colors.secondary,
      backgroundColor: colors.secondary,
      color: "white",
      "&:focus": {
        boxShadow: `0 0 0 2px ${colors.secondary}`,
      },
    },
    outline: {
      borderColor: colors.border,
      backgroundColor: colors.background,
      color: colors.secondary,
      "&:focus": {
        boxShadow: `0 0 0 2px ${colors.accent}`,
      },
    },
  },
});

const fontColorStyle = variant<VariantProps>({
  prop: "textColor",
  variants: {
    primary: {
      color: textColors.primary,
    },
    secondary: {
      color: textColors.secondary,
    },
    accent: {
      color: textColors.accent,
    },
  },
});

const fontSizeStyle = variant<VariantProps>({
  prop: "textSize",
  variants: {
    small: {
      fontSize: fontSizes[0],
      padding: "8px 12px",
    },
    medium: {
      fontSize: fontSizes[1],
      padding: "10px 15px",
    },
    large: {
      fontSize: fontSizes[2],
      padding: "12px 18px",
    },
  },
});

const shapeStyle = variant<VariantProps>({
  prop: "inputShape",
  variants: {
    square: {
      borderRadius: radii.square,
    },
    rounded: {
      borderRadius: radii.rounded,
    },
    ellipse: {
      borderRadius: radii.ellipse,
    },
  },
});

const IconWrapper = styled("div")<{
  iconPosition: "left" | "right";
}>`
  display: inline-flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) =>
    props.iconPosition === "left"
      ? `
            left: 15px;
          `
      : `
            right: 15px;
          `}
  pointer-events: none;
`;

const StyledInput = styled(Input)(
  {
    // default styles
    transition: "all 0.3s ease",
    outline: "none",
    border: "2px solid",
    padding: "12px 15px",
    "&:hover": {
      borderColor: colors.secondary,
    },
    "&:focus": {
      borderColor: colors.primary,
    },
  },
  variantStyle,
  fontSizeStyle,
  fontColorStyle,
  shapeStyle
);

const SimpleInput = ({
  icon,
  iconPosition = "left",
  iconColor,
  width = "100%",
  ...props
}: SimpleInputProps) => {
  const Icon = icon ? Icons[icon] : null;
  const computedIconColor =
    iconColor || (props.variantType === "outline" ? colors.secondary : "white");
  return (
    <div style={{ position: "relative", width }}>
      {Icon && (
        <IconWrapper iconPosition={iconPosition}>
          <Icon color={computedIconColor} />
        </IconWrapper>
      )}
      <StyledInput
        {...props}
        style={{
          paddingLeft: icon && iconPosition === "left" ? "40px" : undefined,
          paddingRight: icon && iconPosition === "right" ? "40px" : undefined,
        }}
      />
    </div>
  );
};

export default SimpleInput;
```
 */

export const Default: StoryObj = {
  args: {},
};

Default.storyName = "";
