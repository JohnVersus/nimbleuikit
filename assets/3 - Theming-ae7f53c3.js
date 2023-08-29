import{j as r,a as n,F as c}from"./jsx-runtime-236b79c2.js";import{u as d}from"./index-e744116c.js";import"./jsx-runtime-4ca860c5.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";function i(o){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},d(),o.components);return n(c,{children:[r(e.h1,{id:"theme",children:"Theme"}),`
`,r(e.p,{children:"A theme in styled-components is a way of specifying common styles, such as colors, font sizes, and spacings, which can be shared and reused throughout the app. This is especially useful for design systems and maintaining consistency across the app."}),`
`,r(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n(e.p,{children:["First, import the ",r(e.code,{children:"ThemeProvider"})," from ",r(e.code,{children:"@nimbleuikit/atoms/utils"}),"."]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`import { ThemeProvider } from "@nimbleuikit/atoms/utils";
`})}),`
`,r(e.p,{children:"Then, define your theme:"}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`const theme = {
  colors: {
    primary: "#6200ee",
    secondary: "#03dac6",
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
};
`})}),`
`,n(e.p,{children:["Now, you can use ",r(e.code,{children:"ThemeProvider"})," to provide this theme to your components:"]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`import { Box } from "@nimbleuikit/atoms";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box color="primary">This is a box</Box>
    </ThemeProvider>
  );
}
`})}),`
`,n(e.p,{children:["In this example, the color of the text in the ",r(e.code,{children:"Box"})," component will be ",r(e.code,{children:"#6200ee"}),", which is the ",r(e.code,{children:"primary"})," color defined in the theme."]}),`
`,r(e.h2,{id:"theme-structure",children:"Theme Structure"}),`
`,r(e.p,{children:"The theme object consists of different properties, each representing a set of design tokens or values."}),`
`,r(e.p,{children:"Here's an overview of the common properties:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[r(e.code,{children:"space"}),": Used for margin and padding."]}),`
`,n(e.li,{children:[r(e.code,{children:"fontSizes"}),": Used for the ",r(e.code,{children:"font-size"})," property."]}),`
`,n(e.li,{children:[r(e.code,{children:"colors"}),": Used for color-related properties, e.g., ",r(e.code,{children:"color"}),", ",r(e.code,{children:"background-color"}),", ",r(e.code,{children:"border-color"}),"."]}),`
`,n(e.li,{children:[r(e.code,{children:"fonts"}),": Used for the ",r(e.code,{children:"font-family"})," property."]}),`
`,n(e.li,{children:[r(e.code,{children:"fontWeights"}),": Used for the ",r(e.code,{children:"font-weight"})," property."]}),`
`,n(e.li,{children:[r(e.code,{children:"lineHeights"}),": Used for the ",r(e.code,{children:"line-height"})," property."]}),`
`,n(e.li,{children:[r(e.code,{children:"letterSpacings"}),": Used for the ",r(e.code,{children:"letter-spacing"})," property."]}),`
`,n(e.li,{children:[r(e.code,{children:"sizes"}),": Used for width and height-related properties."]}),`
`,n(e.li,{children:[r(e.code,{children:"borders"}),": Used for border-related properties."]}),`
`,n(e.li,{children:[r(e.code,{children:"borderWidths"}),": Used for the ",r(e.code,{children:"border-width"})," property."]}),`
`,n(e.li,{children:[r(e.code,{children:"borderStyles"}),": Used for the ",r(e.code,{children:"border-style"})," property."]}),`
`,n(e.li,{children:[r(e.code,{children:"radii"}),": Used for the ",r(e.code,{children:"border-radius"})," property."]}),`
`,n(e.li,{children:[r(e.code,{children:"shadows"}),": Used for shadow-related properties, e.g., ",r(e.code,{children:"box-shadow"}),", ",r(e.code,{children:"text-shadow"}),"."]}),`
`,n(e.li,{children:[r(e.code,{children:"zIndices"}),": Used for the ",r(e.code,{children:"z-index"})," property."]}),`
`]}),`
`,n(e.p,{children:["In addition to these, you can also define style variants for specific components, like buttons or text, under their respective keys (",r(e.code,{children:"buttons"}),", ",r(e.code,{children:"textStyles"}),", etc.)"]}),`
`,n(e.p,{children:["For more detailed information on the theme specification, please refer to the ",r(e.a,{href:"https://styled-system.com/theme-specification",target:"_blank",rel:"nofollow noopener noreferrer",children:"Styled System Theme Specification"}),"."]})]})}function p(o={}){const{wrapper:e}=Object.assign({},d(),o.components);return e?r(e,Object.assign({},o,{children:r(i,o)})):i(o)}export{p as default};
//# sourceMappingURL=3 - Theming-ae7f53c3.js.map
