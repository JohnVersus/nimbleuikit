import{j as e,a as t,F as a}from"./jsx-runtime-29545a09.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function i(o){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},r(),o.components);return t(a,{children:[e(n.h1,{id:"customizing-components-with-variants",children:"Customizing Components with Variants"}),`
`,t(n.p,{children:["The ",e(n.code,{children:"@nimbleuikit/atoms"})," library provides a convenient way to customize components using the ",e(n.code,{children:"variant"})," function from ",e(n.code,{children:"styled-system"}),". The ",e(n.code,{children:"variant"})," function can be used to apply complex styles to a component based on a single prop."]}),`
`,e(n.h2,{id:"usage",children:"Usage"}),`
`,t(n.p,{children:["First, you need to import the ",e(n.code,{children:"variant"})," function and the component you want to customize:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`import { Button } from "@nimbleuikit/atoms";
import { variant } from "@nimbleuikit/atoms/utils";
`})}),`
`,t(n.p,{children:["Next, you can define your custom variants using the ",e(n.code,{children:"variant"})," function:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`import { styled } from "@nimbleuikit/atoms/utils";
const CustomButton = styled(Button)(
  variant({
    variants: {
      primary: {
        color: "black",
        bg: "white",
      },
      secondary: {
        color: "white",
        bg: "black",
      },
    },
  })
);
`})}),`
`,t(n.p,{children:["The ",e(n.code,{children:"CustomButton"})," component can now use the ",e(n.code,{children:"variant"})," prop to switch between the primary and secondary styles:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`<CustomButton variant='primary'>Primary</CustomButton>
<CustomButton variant='secondary'>Secondary</CustomButton>
`})}),`
`,t(n.p,{children:["Please note that when using CSS properties in a variant, you should avoid mixing these styles with conflicting Styled System props. For example, if your variant includes the ",e(n.code,{children:"color"})," property, avoid using the ",e(n.code,{children:"color"})," React prop in your components."]}),`
`,e(n.h2,{id:"custom-prop-name",children:"Custom Prop Name"}),`
`,t(n.p,{children:["If you'd like to use a custom prop name other than ",e(n.code,{children:"variant"}),", use the ",e(n.code,{children:"prop"})," option:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const CustomButton = styled(Button)(
  variant({
    prop: "size",
    variants: {
      big: {
        fontSize: 4,
        lineHeight: "heading",
      },
      small: {
        fontSize: 1,
        lineHeight: "body",
      },
    },
  })
);
// Usage: <CustomButton size='big' />
`})}),`
`,t(n.p,{children:["This document provides a basic introduction to customizing components with variants. For more advanced usage, refer to the ",e(n.a,{href:"https://styled-system.com/variants",target:"_blank",rel:"nofollow noopener noreferrer",children:"styled-system documentation"}),"."]})]})}function m(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e(n,Object.assign({},o,{children:e(i,o)})):i(o)}export{m as default};
//# sourceMappingURL=4 - Variants-a4a1f4dd.js.map
