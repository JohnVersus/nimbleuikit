import{j as e,a as r,F as t}from"./jsx-runtime-91a467a5.js";import{u as l}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function i(n){const d=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},l(),n.components);return r(t,{children:[e(d.h1,{id:"component-api",children:"Component API"}),`
`,e(d.p,{children:"All utility components provides access to various style props. You can use it to quickly style your components using a consistent design system."}),`
`,r(d.p,{children:["Refer ",e(d.a,{href:"https://styled-system.com",target:"_blank",rel:"nofollow noopener noreferrer",children:"styled-system"})," docs for more detailed information on the supported props."]}),`
`,e(d.h2,{id:"space",children:"Space"}),`
`,e(d.p,{children:"The space utility converts shorthand margin and padding props to margin and padding CSS declarations."}),`
`,r(d.ul,{children:[`
`,r(d.li,{children:["Numbers from 0 to the length of ",e(d.code,{children:"theme.space"})," are converted to values on the space scale."]}),`
`,e(d.li,{children:"Negative values can be used for negative margins."}),`
`,r(d.li,{children:["Numbers greater than the length of the ",e(d.code,{children:"theme.space"})," array are converted to raw pixel values."]}),`
`,e(d.li,{children:"String values are passed as raw CSS values."}),`
`,e(d.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,e(d.p,{children:"Margin and padding props follow a shorthand syntax for specifying direction."}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Prop"}),e("th",{children:"CSS Property"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"margin"}),", ",e("code",{children:"m"})]})}),e("td",{children:"margin"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"marginTop"}),", ",e("code",{children:"mt"})]})}),e("td",{children:"margin-top"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"marginRight"}),", ",e("code",{children:"mr"})]})}),e("td",{children:"margin-right"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"marginBottom"}),", ",e("code",{children:"mb"})]})}),e("td",{children:"margin-bottom"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"marginLeft"}),", ",e("code",{children:"ml"})]})}),e("td",{children:"margin-left"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"marginX"}),", ",e("code",{children:"mx"})]})}),e("td",{children:"margin-left and margin-right"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"marginY"}),", ",e("code",{children:"my"})]})}),e("td",{children:"margin-top and margin-bottom"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"padding"}),", ",e("code",{children:"p"})]})}),e("td",{children:"padding"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"paddingTop"}),", ",e("code",{children:"pt"})]})}),e("td",{children:"padding-top"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"paddingRight"}),", ",e("code",{children:"pr"})]})}),e("td",{children:"padding-right"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"paddingBottom"}),", ",e("code",{children:"pb"})]})}),e("td",{children:"padding-bottom"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"paddingLeft"}),", ",e("code",{children:"pl"})]})}),e("td",{children:"padding-left"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"paddingX"}),", ",e("code",{children:"px"})]})}),e("td",{children:"padding-left and padding-right"})]}),r("tr",{children:[e("td",{children:r(d.p,{children:[e("code",{children:"paddingY"}),", ",e("code",{children:"py"})]})}),e("td",{children:"padding-top and padding-bottom"})]})]})]}),`
`,e(d.pre,{children:e(d.code,{className:"language-jsx",children:`// examples (margin prop)

// sets margin value of \`theme.space[2]\`
<Box m={2} />

// sets margin value of \`-1 * theme.space[2]\`
<Box m={-2} />

// sets a margin value of \`16px\` since it's greater than \`theme.space.length\`
<Box m={16} />

// sets margin \`'auto'\`
<Box m='auto' />

// sets margin \`8px\` on all viewports and \`16px\` from the first breakpoint and up
<Box m={[ 2, 3 ]} />
`})}),`
`,e(d.h2,{id:"color",children:"Color"}),`
`,e(d.p,{children:"The color utility includes style props for color and background color."}),`
`,r(d.ul,{children:[`
`,r(d.li,{children:["Color names can be used directly from the ",e(d.code,{children:"theme.colors"})," object."]}),`
`,e(d.li,{children:"Raw CSS values can also be passed."}),`
`]}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Prop"}),e("th",{children:"CSS Property"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:e("code",{children:"color"})}),e("td",{children:"color"})]}),r("tr",{children:[e("td",{children:e("code",{children:"bg"})}),e("td",{children:"background-color"})]})]})]}),`
`,e(d.pre,{children:e(d.code,{className:"language-jsx",children:`// examples (color prop)

// sets color value from \`theme.colors.text\`
<Box color='text' />

// sets background color value from \`theme.colors.background\`
<Box bg='background' />

// sets a raw CSS color value
<Box color='#aabbcc' />

`})}),`
`,e(d.h2,{id:"layout",children:"Layout"}),`
`,e(d.p,{children:"The layout utility includes style props for width, height, display, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, overflow, and overflowX, overflowY."}),`
`,r(d.ul,{children:[`
`,e(d.li,{children:"Numbers from 0 to 1 are converted to percentage values i.e., a decimal representing a fraction of the parent element's width or height."}),`
`,e(d.li,{children:"Numbers greater than 1 are converted to pixel values."}),`
`,e(d.li,{children:"String values are passed as raw CSS values."}),`
`,e(d.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Prop"}),e("th",{children:"CSS Property"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:e("code",{children:"width"})}),e("td",{children:"width"})]}),r("tr",{children:[e("td",{children:e("code",{children:"height"})}),e("td",{children:"height"})]}),r("tr",{children:[e("td",{children:e("code",{children:"minWidth"})}),e("td",{children:"min-width"})]}),r("tr",{children:[e("td",{children:e("code",{children:"maxWidth"})}),e("td",{children:"max-width"})]}),r("tr",{children:[e("td",{children:e("code",{children:"minHeight"})}),e("td",{children:"min-height"})]}),r("tr",{children:[e("td",{children:e("code",{children:"maxHeight"})}),e("td",{children:"max-height"})]}),r("tr",{children:[e("td",{children:e("code",{children:"display"})}),e("td",{children:"display"})]}),r("tr",{children:[e("td",{children:e("code",{children:"size"})}),e("td",{children:"width and height"})]}),r("tr",{children:[e("td",{children:e("code",{children:"verticalAlign"})}),e("td",{children:"vertical-align"})]}),r("tr",{children:[e("td",{children:e("code",{children:"overflow"})}),e("td",{children:"overflow"})]}),r("tr",{children:[e("td",{children:e("code",{children:"overflowX"})}),e("td",{children:"overflow-x"})]}),r("tr",{children:[e("td",{children:e("code",{children:"overflowY"})}),e("td",{children:"overflow-y"})]})]})]}),`
`,e(d.pre,{children:e(d.code,{className:"language-jsx",children:`// examples (layout prop)

// sets width and height value to \`theme.space[2]\`
<Box size={2} />

// sets a width value of \`50%\`
<Box width={1/2} />

// sets display to 'flex'
<Box display='flex' />
`})}),`
`,e(d.h2,{id:"typography",children:"Typography"}),`
`,e(d.p,{children:"Typography utility includes style props for fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, and fontStyle."}),`
`,r(d.ul,{children:[`
`,r(d.li,{children:["Numbers for ",e(d.code,{children:"fontSize"})," are converted to values on the font size scale."]}),`
`,e(d.li,{children:"String values are passed as raw CSS values."}),`
`,e(d.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Prop"}),e("th",{children:"CSS Property"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:e("code",{children:"fontFamily"})}),e("td",{children:"font-family"})]}),r("tr",{children:[e("td",{children:e("code",{children:"fontSize"})}),e("td",{children:"font-size"})]}),r("tr",{children:[e("td",{children:e("code",{children:"fontWeight"})}),e("td",{children:"font-weight"})]}),r("tr",{children:[e("td",{children:e("code",{children:"lineHeight"})}),e("td",{children:"line-height"})]}),r("tr",{children:[e("td",{children:e("code",{children:"letterSpacing"})}),e("td",{children:"letter-spacing"})]}),r("tr",{children:[e("td",{children:e("code",{children:"textAlign"})}),e("td",{children:"text-align"})]}),r("tr",{children:[e("td",{children:e("code",{children:"fontStyle"})}),e("td",{children:"font-style"})]})]})]}),`
`,e(d.pre,{children:e(d.code,{className:"language-jsx",children:`// examples (typography prop)

// sets font-size to \`theme.fontSizes[2]\`
<Box fontSize={2} />

// sets font-weight to 'bold'
<Box fontWeight='bold' />

// sets text-align to 'center'
<Box textAlign='center' />
`})}),`
`,e(d.h2,{id:"flexbox",children:"Flexbox"}),`
`,e(d.p,{children:"Flexbox utility includes style props for alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, and order."}),`
`,r(d.ul,{children:[`
`,e(d.li,{children:"String values are passed as raw CSS values."}),`
`,e(d.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Prop"}),e("th",{children:"CSS Property"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:e("code",{children:"alignItems"})}),e("td",{children:"align-items"})]}),r("tr",{children:[e("td",{children:e("code",{children:"alignContent"})}),e("td",{children:"align-content"})]}),r("tr",{children:[e("td",{children:e("code",{children:"justifyItems"})}),e("td",{children:"justify-items"})]}),r("tr",{children:[e("td",{children:e("code",{children:"justifyContent"})}),e("td",{children:"justify-content"})]}),r("tr",{children:[e("td",{children:e("code",{children:"flexWrap"})}),e("td",{children:"flex-wrap"})]}),r("tr",{children:[e("td",{children:e("code",{children:"flexDirection"})}),e("td",{children:"flex-direction"})]}),r("tr",{children:[e("td",{children:e("code",{children:"flex"})}),e("td",{children:"flex"})]}),r("tr",{children:[e("td",{children:e("code",{children:"flexGrow"})}),e("td",{children:"flex-grow"})]}),r("tr",{children:[e("td",{children:e("code",{children:"flexShrink"})}),e("td",{children:"flex-shrink"})]}),r("tr",{children:[e("td",{children:e("code",{children:"flexBasis"})}),e("td",{children:"flex-basis"})]}),r("tr",{children:[e("td",{children:e("code",{children:"justifySelf"})}),e("td",{children:"justify-self"})]}),r("tr",{children:[e("td",{children:e("code",{children:"alignSelf"})}),e("td",{children:"align-self"})]}),r("tr",{children:[e("td",{children:e("code",{children:"order"})}),e("td",{children:"order"})]})]})]}),`
`,e(d.pre,{children:e(d.code,{className:"language-jsx",children:`// examples (flexbox prop)

// sets align-items to 'center'
<Box alignItems='center' />

// sets justify-content to 'space-between'
<Box justifyContent='space-between' />

// sets flex-direction to 'column'
<Box flexDirection='column' />
`})}),`
`,e(d.h2,{id:"grid",children:"Grid"}),`
`,e(d.p,{children:"Grid utility includes style props for gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea."}),`
`,r(d.ul,{children:[`
`,r(d.li,{children:["Numbers from 0 to the length of ",e(d.code,{children:"theme.space"})," array are converted to values on the space scale."]}),`
`,e(d.li,{children:"String values are passed as raw CSS values."}),`
`,e(d.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Prop"}),e("th",{children:"CSS Property"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:e("code",{children:"gridGap"})}),e("td",{children:"grid-gap"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridColumnGap"})}),e("td",{children:"grid-column-gap"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridRowGap"})}),e("td",{children:"grid-row-gap"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridColumn"})}),e("td",{children:"grid-column"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridRow"})}),e("td",{children:"grid-row"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridAutoFlow"})}),e("td",{children:"grid-auto-flow"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridAutoColumns"})}),e("td",{children:"grid-auto-columns"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridAutoRows"})}),e("td",{children:"grid-auto-rows"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridTemplateColumns"})}),e("td",{children:"grid-template-columns"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridTemplateRows"})}),e("td",{children:"grid-template-rows"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridTemplateAreas"})}),e("td",{children:"grid-template-areas"})]}),r("tr",{children:[e("td",{children:e("code",{children:"gridArea"})}),e("td",{children:"grid-area"})]})]})]}),`
`,e(d.pre,{children:e(d.code,{className:"language-jsx",children:`// examples (grid prop)

// sets grid-template-columns to 'repeat(2, 1fr)'
<Box gridTemplateColumns='repeat(2, 1fr)' />

// sets grid-gap to \`theme.space[2]\`
<Box gridGap={2} />

`})}),`
`,e(d.h2,{id:"background",children:"Background"}),`
`,e(d.p,{children:"Background utility includes style props for background, backgroundColor, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat."}),`
`,r(d.ul,{children:[`
`,e(d.li,{children:"String values are passed as raw CSS values."}),`
`,e(d.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Prop"}),e("th",{children:"CSS Property"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:e("code",{children:"background"})}),e("td",{children:"background"})]}),r("tr",{children:[e("td",{children:e("code",{children:"backgroundColor"})}),e("td",{children:"background-color"})]}),r("tr",{children:[e("td",{children:e("code",{children:"backgroundImage"})}),e("td",{children:"background-image"})]}),r("tr",{children:[e("td",{children:e("code",{children:"backgroundSize"})}),e("td",{children:"background-size"})]}),r("tr",{children:[e("td",{children:e("code",{children:"backgroundPosition"})}),e("td",{children:"background-position"})]}),r("tr",{children:[e("td",{children:e("code",{children:"backgroundRepeat"})}),e("td",{children:"background-repeat"})]})]})]}),`
`,e(d.pre,{children:e(d.code,{className:"language-jsx",children:`// examples (background prop)

// sets background-color to 'tomato'
<Box backgroundColor='tomato' />

// sets background-image to 'url("/path/to/image.jpg")'
<Box backgroundImage='url("/path/to/image.jpg")' />
`})}),`
`,e(d.h2,{id:"border",children:"Border"}),`
`,e(d.p,{children:"Border utility includes style props for border, borderWidth, borderStyle, borderColor, borderRadius, borderTop, borderTopRight, borderBottom, borderBottomLeft, borderLeft, borderX, and borderY."}),`
`,r(d.ul,{children:[`
`,r(d.li,{children:["Numbers for ",e(d.code,{children:"borderWidth"})," and ",e(d.code,{children:"borderRadius"})," are converted to values on the space scale."]}),`
`,e(d.li,{children:"String values are passed as raw CSS values."}),`
`,e(d.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Prop"}),e("th",{children:"CSS Property"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:e("code",{children:"border"})}),e("td",{children:"border"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderWidth"})}),e("td",{children:"border-width"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderStyle"})}),e("td",{children:"border-style"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderColor"})}),e("td",{children:"border-color"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderRadius"})}),e("td",{children:"border-radius"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderTop"})}),e("td",{children:"border-top"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderTopRight"})}),e("td",{children:"border-top-right"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderBottom"})}),e("td",{children:"border-bottom"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderBottomLeft"})}),e("td",{children:"border-bottom-left"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderLeft"})}),e("td",{children:"border-left"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderX"})}),e("td",{children:"border-left and border-right"})]}),r("tr",{children:[e("td",{children:e("code",{children:"borderY"})}),e("td",{children:"border-top and border-bottom"})]})]})]}),`
`,e(d.pre,{children:e(d.code,{className:"language-jsx",children:`// examples (border prop)

// sets border to '1px solid'
<Box border='1px solid' />

// sets border-radius to \`theme.radii[2]\`
<Box borderRadius={2} />

`})}),`
`,e(d.h2,{id:"position",children:"Position"}),`
`,e(d.p,{children:"Position utility includes style props for position, zIndex, top, right, bottom, left."}),`
`,r(d.ul,{children:[`
`,r(d.li,{children:["Numbers for ",e(d.code,{children:"zIndex"})," are converted to values on the zIndex scale."]}),`
`,r(d.li,{children:["Numbers for ",e(d.code,{children:"top"}),", ",e(d.code,{children:"right"}),", ",e(d.code,{children:"bottom"}),", and ",e(d.code,{children:"left"})," are converted to values on the space scale."]}),`
`,e(d.li,{children:"String values are passed as raw CSS values."}),`
`,e(d.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Prop"}),e("th",{children:"CSS Property"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"position"}),e("td",{children:"position"})]}),r("tr",{children:[e("td",{children:"zIndex"}),e("td",{children:"z-index"})]}),r("tr",{children:[e("td",{children:"top"}),e("td",{children:"top"})]}),r("tr",{children:[e("td",{children:"right"}),e("td",{children:"right"})]}),r("tr",{children:[e("td",{children:"bottom"}),e("td",{children:"bottom"})]}),r("tr",{children:[e("td",{children:"left"}),e("td",{children:"left"})]})]})]}),`
`,e(d.pre,{children:e(d.code,{className:"language-jsx",children:`// examples (position prop)

// sets position to 'absolute'
<Box position='absolute' />

// sets z-index to \`theme.zIndices[2]\`
<Box zIndex={2} />

// sets top to \`theme.space[2]\`
<Box top={2} />
`})}),`
`,e(d.h2,{id:"shadow",children:"Shadow"}),`
`,e(d.p,{children:"Shadow utility includes style props for boxShadow and textShadow."}),`
`,r(d.ul,{children:[`
`,r(d.li,{children:["Numbers for ",e(d.code,{children:"boxShadow"})," and ",e(d.code,{children:"textShadow"})," are converted to values on the shadows scale."]}),`
`,e(d.li,{children:"String values are passed as raw CSS values."}),`
`,e(d.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Prop"}),e("th",{children:"CSS Property"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:e("code",{children:"boxShadow"})}),e("td",{children:"box-shadow"})]}),r("tr",{children:[e("td",{children:e("code",{children:"textShadow"})}),e("td",{children:"text-shadow"})]})]})]}),`
`,e(d.pre,{children:e(d.code,{className:"language-jsx",children:`// examples (shadow prop)

// sets box-shadow to \`theme.shadows[2]\`
<Box boxShadow={2} />

// sets text-shadow to '0 2px 5px rgba(0, 0, 0, 0.15)'
<Box textShadow='0 2px 5px rgba(0, 0, 0, 0.15)' />
`})})]})}function s(n={}){const{wrapper:d}=Object.assign({},l(),n.components);return d?e(d,Object.assign({},n,{children:e(i,n)})):i(n)}export{s as default};
//# sourceMappingURL=PropsDetails-979d319b.js.map
