import{T as a}from"./TextArea-752a153e.js";import"./jsx-runtime-4ca860c5.js";import"./index-61bf1805.js";import"./index.esm-617eedbf.js";import"./_commonjsHelpers-de833af9.js";const u={title:"CookBook/SimpleInput/SourceCode",component:a,tags:["autodocs"]},n={args:{}};n.storyName="";var o,r,t,e,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(t=(r=n.parameters)==null?void 0:r.docs)==null?void 0:t.source},description:{story:`\`\`\`jsx
import { Input, InputProps } from "@nimbleuikit/atoms";
import {
styled,
variant,
VariantProps,
CSSObject,
} from "@nimbleuikit/atoms/utils";
import * as Icons from "react-feather";

export type SimpleInputProps = InputProps & {
variantType?: "primary" | "secondary" | "outline";
textSize?: "small" | "medium" | "large";
textColor?: "primary" | "secondary" | "accent";
inputShape?: "square" | "rounded" | "ellipse";
icon?: keyof typeof Icons;
iconPosition?: "left" | "right";
iconColor?: string;
width?: CSSObject["width"];
};

const colors = {
primary: "#00B8A9",
secondary: "#4866FF",
accent: "#CAFBE7",
border: "#D1D5DB",
background: "#F3F4F6",
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
"&:focus": {
boxShadow: \`0 0 0 2px \${colors.primary}\`,
},
},
secondary: {
borderColor: colors.secondary,
"&:focus": {
boxShadow: \`0 0 0 2px \${colors.secondary}\`,
},
},
outline: {
borderColor: colors.border,
"&:focus": {
boxShadow: \`0 0 0 2px \${colors.accent}\`,
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
variantType?: "primary" | "secondary" | "outline";
borderRadius: string;
}>\`
display: inline-flex;
position: absolute;
top: 0;
bottom: 0;
align-items: center;
background-color: \${(props) =>
colors[
(props.variantType as keyof (typeof props)["variantType"]) || "outline"
]};
padding: 8px;
border-radius: \${(props) => props.borderRadius};
\${(props) =>
props.iconPosition === "left"
? \`
left: 0;
border-top-right-radius: 0;
border-bottom-right-radius: 0;
\`
: \`
right: 0;
border-top-left-radius: 0;
border-bottom-left-radius: 0;
\`}
pointer-events: none;
\`;

const StyledInput = styled(Input)(
{
transition: "all 0.3s ease",
outline: "none",
border: "2px solid",
padding: "12px 15px",
width: "100%",
boxSizing: "border-box",
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
const borderRadius = radii[props.inputShape || "rounded"];
return (
<div style={{ position: "relative", width }}>
{Icon && (
<IconWrapper
iconPosition={iconPosition}
variantType={props.variantType}
borderRadius={borderRadius}
>
<Icon color={computedIconColor} />
</IconWrapper>
)}
<StyledInput
{...props}
style={{
paddingLeft: icon && iconPosition === "left" ? "50px" : undefined,
paddingRight: icon && iconPosition === "right" ? "50px" : undefined,
}}
/>
</div>
);
};

export default SimpleInput;
\`\`\``,...(i=(e=n.parameters)==null?void 0:e.docs)==null?void 0:i.description}}};const y=["Default"];export{n as Default,y as __namedExportsOrder,u as default};
//# sourceMappingURL=SourceCode.stories-44454982.js.map
