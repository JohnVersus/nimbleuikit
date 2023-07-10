import{j as n}from"./jsx-runtime-91a467a5.js";import{T as f}from"./Tooltip-08c59c36.js";import{B as C}from"./Button-76d85f6b.js";import{T as v}from"./Text-3e49330d.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-27aaf5fd.js";import"./system-8e4bc0f2.js";const N={title:"Atoms/Tooltip",component:f,tags:["autodocs"],argTypes:{tipPosition:{control:{type:"select",options:["top","bottom","dynamic"]}},visible:{control:"boolean"},tooltipBgColor:{control:"color"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},o={args:{tipPosition:"dynamic",children:"Hover me!",content:"Tooltip Content"}};o.storyName="Dynamic Tooltip";const t={args:{tipPosition:"bottom",children:"Hover me!",content:"Tooltip Content"}};t.storyName="Default Tooltip";const e={args:{tipPosition:"dynamic",children:n(C,{background:"white",p:2,children:"Hover me!"}),content:n(v,{color:"green",fontWeight:"bold",children:"Styled Tooltip Content"}),tooltipBgColor:"lightpink"}};e.storyName="Styled Tooltip";var i,r,s,a,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tipPosition: "dynamic",
    children: "Hover me!",
    content: "Tooltip Content"
  }
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source},description:{story:"Dynamic tooltip example. Changes the tooltip position based on the available screen space.",...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.description}}};var c,l,m,d,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tipPosition: "bottom",
    children: "Hover me!",
    content: "Tooltip Content"
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Tooltip custom position example. Shows the tooltip on bottom.",...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.description}}};var T,y,h,u,b;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tipPosition: "dynamic",
    children: <Button background={"white"} p={2}>
        Hover me!
      </Button>,
    content: <Text color="green" fontWeight="bold">
        Styled Tooltip Content
      </Text>,
    tooltipBgColor: "lightpink"
  }
}`,...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:"Tooltip with styled content and button trigger example.",...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.description}}};const j=["DynamicTooltip","DefaultTooltip","StyledTooltip"];export{t as DefaultTooltip,o as DynamicTooltip,e as StyledTooltip,j as __namedExportsOrder,N as default};
//# sourceMappingURL=Tooltip.stories-04655d4b.js.map