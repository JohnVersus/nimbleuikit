import{j as n,a as i,F as o}from"./jsx-runtime-e6a661ac.js";import{u as a}from"./index-e744116c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";function t(s){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",a:"a"},a(),s.components);return i(o,{children:[n(e.h1,{id:"responsive-styles",children:"Responsive Styles"}),`
`,n(e.p,{children:"Responsive layouts often require adjusting styles along a singular dimension like font-size, margin, padding, and width. Instead of manually managing media queries and adding nested style objects, Styled System offers a convenient shorthand syntax for adding responsive styles using a mobile-first approach. This syntax allows managing responsive typography and layouts more efficiently."}),`
`,n(e.p,{children:"All style utilities in Styled System add props that accept arrays as values for mobile-first responsive styles."}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import { Box } from '@nimbleuikit/atoms';

<Box
  width={[
    1, // 100% below the smallest breakpoint
    1 / 2, // 50% from the next breakpoint and up
    1 / 4, // 25% from the next breakpoint and up
  ]}
/>

// responsive font size

<Box fontSize={[1, 2, 3, 4]} />

// responsive margin

<Box m={[1, 2, 3, 4]} />

// responsive padding

<Box p={[1, 2, 3, 4]} />
`})}),`
`,n(e.h2,{id:"what-it-does",children:"What it does"}),`
`,n(e.p,{children:"The shorthand is an alternative to manually writing media queries."}),`
`,n(e.p,{children:"Given the following:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Box width={[1, 1 / 2, 1 / 4]} />
`})}),`
`,n(e.p,{children:"Styled System, with a CSS-in-JS library, will generate something like the following CSS:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-css",children:`.Box-hash {
  width: 100%;
}

@media screen and (min-width: 40em) {
  .Box-hash {
    width: 50%;
  }
}

@media screen and (min-width: 52em) {
  .Box-hash {
    width: 25%;
  }
}
`})}),`
`,n(e.h2,{id:"using-objects",children:"Using objects"}),`
`,n(e.p,{children:"Alternatively, you can define breakpoints with aliases and use plain objects as values. Any undefined alias key will define the base, non-responsive value."}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`// theme.js
const breakpoints = ["40em", "52em", "64em", "80em"];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
  breakpoints,
};
`})}),`
`,n(e.p,{children:"Then, use these aliases in your components:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Box width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }} />
`})}),`
`,i(e.p,{children:["For more detailed information on the responsive styling, please refer to the ",n(e.a,{href:"https://styled-system.com/responsive-styles/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Styled System Responsive Styles"}),"."]})]})}function p(s={}){const{wrapper:e}=Object.assign({},a(),s.components);return e?n(e,Object.assign({},s,{children:n(t,s)})):t(s)}export{p as default};
//# sourceMappingURL=5 - ResponsiveStyle-91d94915.js.map
