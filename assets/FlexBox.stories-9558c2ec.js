import{j as t}from"./jsx-runtime-91a467a5.js";import{F as u}from"./FlexBox-3590fa2e.js";import{B as a}from"./Box-27aaf5fd.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./system-8e4bc0f2.js";const B={title:"Atoms/FlexBox",component:u,tags:["autodocs"],argTypes:{flexDirection:{control:{type:"select",options:["row","column"]}}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},e={args:{gap:"2rem",children:[t(a,{bg:"lightgray",p:3,children:"Box 1"},"box1"),t(a,{bg:"lightgray",p:3,children:"Box 2"},"box2"),t(a,{bg:"lightgray",p:3,children:"Box 3"},"box3")]}},r={...e,args:{...e.args,flexDirection:"row"}};r.storyName="Horizontal Stack";const o={...e,args:{...e.args,flexDirection:"column"}};o.storyName="Vertical Stack";var s,c,i,n,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source},description:{story:"Vertical Stack",...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};const D=["HorizontalStack","VerticalStack"];export{r as HorizontalStack,o as VerticalStack,D as __namedExportsOrder,B as default};
//# sourceMappingURL=FlexBox.stories-9558c2ec.js.map