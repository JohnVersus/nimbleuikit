// "use client";
import { Button, ButtonProps } from "@nimbleuikit/atoms";
import { styled, variant, VariantProps } from "@nimbleuikit/atoms/utils";
import { theme } from "~/theme/theme";
import * as Icons from "react-feather";

type MasterButtonProps = ButtonProps & {
  themeVariant?: "primary" | "secondary" | "nav";
  fontSize?: "small" | "medium" | "large";
  fontColor?: "primary" | "secondary" | "accent";
  shape?: "square" | "rounded" | "pill";
  icon?: keyof typeof Icons;
  iconPosition?: "left" | "right";
};

const { colors, fontSizes, fontWeights, radii } = theme;
const { primary, secondary, accent } = colors;
const { regular, medium, bold } = fontWeights;

const variantStyle = variant<VariantProps>({
  prop: "themeVariant",
  variants: {
    primary: {
      backgroundColor: primary,
      color: secondary,
      border: `1px solid ${secondary}`,
    },
    secondary: {
      backgroundColor: secondary,
      color: primary,
      border: `1px solid ${primary}`,
    },
    nav: {
      backgroundColor: "transparent",
      color: primary,
      border: "none",
      p: 0,
      "&:hover": {
        backgroundColor: "transparent",
        borderBottom: `1px solid`,
      },
      "&:active": {
        backgroundColor: "transparent",
      },
    },
  },
});
const fontColorStyle = variant<VariantProps>({
  prop: "fontColor",
  variants: {
    primary: {
      color: primary,
    },
    secondary: {
      color: secondary,
    },
    accent: {
      color: accent,
    },
  },
});
const fontSizeStyle = variant<VariantProps>({
  prop: "fontSize",
  variants: {
    small: {
      fontSize: fontSizes[0],
      fontWeight: regular,
    },
    medium: {
      fontSize: fontSizes[1],
      fontWeight: medium,
    },
    large: {
      fontSize: fontSizes[2],
      fontWeight: bold,
    },
  },
});
const shapeStyle = variant<VariantProps>({
  prop: "shape",
  variants: {
    square: {
      borderRadius: radii[0],
    },
    rounded: {
      borderRadius: radii[3],
    },
    pill: {
      borderRadius: radii[6],
    },
  },
});

const IconWrapper = styled("div")<{
  iconPosition: "left" | "right";
  hasChildren: boolean;
}>`
  padding: ${(props: { hasChildren: any; iconPosition: string }) =>
    props.hasChildren
      ? props.iconPosition === "right"
        ? "0 0 0 0.5em"
        : "0 0.5em 0 0"
      : "0"};
`;

const MasterButton = styled(
  ({ icon, iconPosition = "right", children, ...props }: MasterButtonProps) => {
    const Icon = icon ? Icons[icon] : null;
    return (
      <Button {...props}>
        {Icon && iconPosition === "left" && (
          <IconWrapper
            iconPosition={iconPosition}
            hasChildren={Boolean(children)}
          >
            <Icon />
          </IconWrapper>
        )}
        {children}
        {Icon && iconPosition === "right" && (
          <IconWrapper
            iconPosition={iconPosition}
            hasChildren={Boolean(children)}
          >
            <Icon />
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

export default MasterButton;
