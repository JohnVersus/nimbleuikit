import{a as n,j as r,F as p}from"./jsx-runtime-e6a661ac.js";import{u as l}from"./index-e744116c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const o=({headers:t,rows:e})=>n("table",{children:[r("thead",{children:r("tr",{children:t.map((a,i)=>r("th",{children:a},i))})}),r("tbody",{children:e.map((a,i)=>r("tr",{children:a.map((s,c)=>r("td",{children:r("code",{children:s})},c))},i))})]});try{o.displayName="Table",o.__docgenInfo={description:"",displayName:"Table",props:{headers:{defaultValue:null,description:"",name:"headers",required:!0,type:{name:'""[]'}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:'""[][]'}}}}}catch{}function d(t){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},l(),t.components);return n(p,{children:[r(e.h1,{id:"component-api",children:"Component API"}),`
`,r(e.p,{children:"All utility components provides access to various style props. You can use it to quickly style your components using a consistent design system."}),`
`,n(e.p,{children:["Refer ",r(e.a,{href:"https://styled-system.com",target:"_blank",rel:"nofollow noopener noreferrer",children:"styled-system"})," docs for more detailed information on the supported props."]}),`
`,r(e.h2,{id:"space",children:"Space"}),`
`,r(e.p,{children:"The space utility converts shorthand margin and padding props to margin and padding CSS declarations."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Numbers from 0 to the length of ",r(e.code,{children:"theme.space"})," are converted to values on the space scale."]}),`
`,r(e.li,{children:"Negative values can be used for negative margins."}),`
`,n(e.li,{children:["Numbers greater than the length of the ",r(e.code,{children:"theme.space"})," array are converted to raw pixel values."]}),`
`,r(e.li,{children:"String values are passed as raw CSS values."}),`
`,r(e.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r(e.p,{children:"Margin and padding props follow a shorthand syntax for specifying direction."}),`
`,r(o,{headers:["Prop","CSS Property"],rows:[["margin, m","margin"],["marginTop, mt","margin-top"],["marginRight, mr","margin-right"],["marginBottom, mb","margin-bottom"],["marginLeft, ml","margin-left"],["marginX, mx","margin-left and margin-right"],["marginY, my","margin-top and margin-bottom"],["padding, p","padding"],["paddingTop, pt","padding-top"],["paddingRight, pr","padding-right"],["paddingBottom, pb","padding-bottom"],["paddingLeft, pl","padding-left"],["paddingX, px","padding-left and padding-right"],["paddingY, py","padding-top and padding-bottom"]]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`// examples (margin prop)

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
`,r(e.h2,{id:"color",children:"Color"}),`
`,r(e.p,{children:"The color utility includes style props for color and background color."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Color names can be used directly from the ",r(e.code,{children:"theme.colors"})," object."]}),`
`,r(e.li,{children:"Raw CSS values can also be passed."}),`
`]}),`
`,r(o,{headers:["Prop","CSS Property"],rows:[["color","color"],["bg","background-color"]]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`// examples (color prop)

// sets color value from \`theme.colors.text\`
<Box color='text' />

// sets background color value from \`theme.colors.background\`
<Box bg='background' />

// sets a raw CSS color value
<Box color='#aabbcc' />

`})}),`
`,r(e.h2,{id:"layout",children:"Layout"}),`
`,r(e.p,{children:"The layout utility includes style props for width, height, display, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, overflow, and overflowX, overflowY."}),`
`,n(e.ul,{children:[`
`,r(e.li,{children:"Numbers from 0 to 1 are converted to percentage values i.e., a decimal representing a fraction of the parent element's width or height."}),`
`,r(e.li,{children:"Numbers greater than 1 are converted to pixel values."}),`
`,r(e.li,{children:"String values are passed as raw CSS values."}),`
`,r(e.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r(o,{headers:["Prop","CSS Property"],rows:[["width","width"],["height","height"],["minWidth","min-width"],["maxWidth","max-width"],["minHeight","min-height"],["maxHeight","max-height"],["display","display"],["size","width and height"],["verticalAlign","vertical-align"],["overflow","overflow"],["overflowX","overflow-x"],["overflowY","overflow-y"]]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`// examples (layout prop)

// sets width and height value to \`theme.space[2]\`
<Box size={2} />

// sets a width value of \`50%\`
<Box width={1/2} />

// sets display to 'flex'
<Box display='flex' />
`})}),`
`,r(e.h2,{id:"typography",children:"Typography"}),`
`,r(e.p,{children:"Typography utility includes style props for fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, and fontStyle."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Numbers for ",r(e.code,{children:"fontSize"})," are converted to values on the font size scale."]}),`
`,r(e.li,{children:"String values are passed as raw CSS values."}),`
`,r(e.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r(o,{headers:["Prop","CSS Property"],rows:[["fontFamily","font-family"],["fontSize","font-size"],["fontWeight","font-weight"],["lineHeight","line-height"],["letterSpacing","letter-spacing"],["textAlign","text-align"],["fontStyle","font-style"]]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`// examples (typography prop)

// sets font-size to \`theme.fontSizes[2]\`
<Box fontSize={2} />

// sets font-weight to 'bold'
<Box fontWeight='bold' />

// sets text-align to 'center'
<Box textAlign='center' />
`})}),`
`,r(e.h2,{id:"flexbox",children:"Flexbox"}),`
`,r(e.p,{children:"Flexbox utility includes style props for alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, and order."}),`
`,n(e.ul,{children:[`
`,r(e.li,{children:"String values are passed as raw CSS values."}),`
`,r(e.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r(o,{headers:["Prop","CSS Property"],rows:[["alignItems","align-items"],["alignContent","align-content"],["justifyItems","justify-items"],["justifyContent","justify-content"],["flexWrap","flex-wrap"],["flexDirection","flex-direction"],["flex","flex"],["flexGrow","flex-grow"],["flexShrink","flex-shrink"],["flexBasis","flex-basis"],["justifySelf","justify-self"],["alignSelf","align-self"],["order","order"]]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`// examples (flexbox prop)

// sets align-items to 'center'
<Box alignItems='center' />

// sets justify-content to 'space-between'
<Box justifyContent='space-between' />

// sets flex-direction to 'column'
<Box flexDirection='column' />
`})}),`
`,r(e.h2,{id:"grid",children:"Grid"}),`
`,r(e.p,{children:"Grid utility includes style props for gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Numbers from 0 to the length of ",r(e.code,{children:"theme.space"})," array are converted to values on the space scale."]}),`
`,r(e.li,{children:"String values are passed as raw CSS values."}),`
`,r(e.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r(o,{headers:["Prop","CSS Property"],rows:[["gridGap","grid-gap"],["gridColumnGap","grid-column-gap"],["gridRowGap","grid-row-gap"],["gridColumn","grid-column"],["gridRow","grid-row"],["gridAutoFlow","grid-auto-flow"],["gridAutoColumns","grid-auto-columns"],["gridAutoRows","grid-auto-rows"],["gridTemplateColumns","grid-template-columns"],["gridTemplateRows","grid-template-rows"],["gridTemplateAreas","grid-template-areas"],["gridArea","grid-area"]]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`// examples (grid prop)

// sets grid-template-columns to 'repeat(2, 1fr)'
<Box gridTemplateColumns='repeat(2, 1fr)' />

// sets grid-gap to \`theme.space[2]\`
<Box gridGap={2} />

`})}),`
`,r(e.h2,{id:"background",children:"Background"}),`
`,r(e.p,{children:"Background utility includes style props for background, backgroundColor, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat."}),`
`,n(e.ul,{children:[`
`,r(e.li,{children:"String values are passed as raw CSS values."}),`
`,r(e.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r(o,{headers:["Prop","CSS Property"],rows:[["background","background"],["backgroundColor","background-color"],["backgroundImage","background-image"],["backgroundSize","background-size"],["backgroundPosition","background-position"],["backgroundRepeat","background-repeat"]]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`// examples (background prop)

// sets background-color to 'tomato'
<Box backgroundColor='tomato' />

// sets background-image to 'url("/path/to/image.jpg")'
<Box backgroundImage='url("/path/to/image.jpg")' />
`})}),`
`,r(e.h2,{id:"border",children:"Border"}),`
`,r(e.p,{children:"Border utility includes style props for border, borderWidth, borderStyle, borderColor, borderRadius, borderTop, borderTopRight, borderBottom, borderBottomLeft, borderLeft, borderX, and borderY."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Numbers for ",r(e.code,{children:"borderWidth"})," and ",r(e.code,{children:"borderRadius"})," are converted to values on the space scale."]}),`
`,r(e.li,{children:"String values are passed as raw CSS values."}),`
`,r(e.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r(o,{headers:["Prop","CSS Property"],rows:[["border","border"],["borderWidth","border-width"],["borderStyle","border-style"],["borderColor","border-color"],["borderRadius","border-radius"],["borderTop","border-top"],["borderTopRight","border-top-right"],["borderBottom","border-bottom"],["borderBottomLeft","border-bottom-left"],["borderLeft","border-left"],["borderX","border-left and border-right"],["borderY","border-top and border-bottom"]]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`// examples (border prop)

// sets border to '1px solid'
<Box border='1px solid' />

// sets border-radius to \`theme.radii[2]\`
<Box borderRadius={2} />

`})}),`
`,r(e.h2,{id:"position",children:"Position"}),`
`,r(e.p,{children:"Position utility includes style props for position, zIndex, top, right, bottom, left."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Numbers for ",r(e.code,{children:"zIndex"})," are converted to values on the zIndex scale."]}),`
`,n(e.li,{children:["Numbers for ",r(e.code,{children:"top"}),", ",r(e.code,{children:"right"}),", ",r(e.code,{children:"bottom"}),", and ",r(e.code,{children:"left"})," are converted to values on the space scale."]}),`
`,r(e.li,{children:"String values are passed as raw CSS values."}),`
`,r(e.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r(o,{headers:["Prop","CSS Property"],rows:[["position","position"],["zIndex","z-index"],["top","top"],["right","right"],["bottom","bottom"],["left","left"]]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`// examples (position prop)

// sets position to 'absolute'
<Box position='absolute' />

// sets z-index to \`theme.zIndices[2]\`
<Box zIndex={2} />

// sets top to \`theme.space[2]\`
<Box top={2} />
`})}),`
`,r(e.h2,{id:"shadow",children:"Shadow"}),`
`,r(e.p,{children:"Shadow utility includes style props for boxShadow and textShadow."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Numbers for ",r(e.code,{children:"boxShadow"})," and ",r(e.code,{children:"textShadow"})," are converted to values on the shadows scale."]}),`
`,r(e.li,{children:"String values are passed as raw CSS values."}),`
`,r(e.li,{children:"And array values are converted into responsive values."}),`
`]}),`
`,r(o,{headers:["Prop","CSS Property"],rows:[["boxShadow","box-shadow"],["textShadow","text-shadow"]]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`// examples (shadow prop)

// sets box-shadow to \`theme.shadows[2]\`
<Box boxShadow={2} />

// sets text-shadow to '0 2px 5px rgba(0, 0, 0, 0.15)'
<Box textShadow='0 2px 5px rgba(0, 0, 0, 0.15)' />
`})})]})}function f(t={}){const{wrapper:e}=Object.assign({},l(),t.components);return e?r(e,Object.assign({},t,{children:r(d,t)})):d(t)}export{f as default};
//# sourceMappingURL=2 - PropsDetails-d6e21026.js.map
