import{j as t}from"./jsx-runtime-236b79c2.js";import{F as u}from"./FlexBox-c5d71453.js";import{B as a}from"./Box-2ec2a447.js";import"./jsx-runtime-4ca860c5.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index.esm-617eedbf.js";import"./system-62e2d392.js";const T={title:"Atoms/FlexBox",component:u,tags:["autodocs"],argTypes:{flexDirection:{control:{type:"select",options:["row","column"]}}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},e={args:{gap:"2rem",children:[t(a,{bg:"lightgray",p:3,children:"Box 1"},"box1"),t(a,{bg:"lightgray",p:3,children:"Box 2"},"box2"),t(a,{bg:"lightgray",p:3,children:"Box 3"},"box3")]}},r={...e,args:{...e.args,flexDirection:"row"}};r.storyName="Horizontal Stack";const o={...e,args:{...e.args,flexDirection:"column"}};o.storyName="Vertical Stack";var s,c,i,n,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    flexDirection: "row"
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source},description:{story:"Horizontal Stack",...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.description}}};var l,m,d,g,x;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    flexDirection: "column"
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source},description:{story:"Vertical Stack",...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};const z=["HorizontalStack","VerticalStack"];export{r as HorizontalStack,o as VerticalStack,z as __namedExportsOrder,T as default};
//# sourceMappingURL=FlexBox.stories-69b1d221.js.map
