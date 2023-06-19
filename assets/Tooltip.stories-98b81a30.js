import{j as i}from"./jsx-runtime-91a467a5.js";import{T as f}from"./Tooltip-b9046ab6.js";import{B as C}from"./Button-7f410dd2.js";import{T as v}from"./Text-a93cf70b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-49a6b108.js";import"./system-af6bb858.js";import"./FlexBox-6a512847.js";import"./Form-59f6147f.js";import"./Grid-49a860ea.js";import"./Label-d89b6511.js";import"./IntlText-e61d29b9.js";import"./TextArea-7ac07bcb.js";const O={title:"Atoms/Tooltip",component:f,tags:["autodocs"],argTypes:{tipPosition:{control:{type:"select",options:["top","bottom","dynamic"]}},visible:{control:"boolean"},tooltipBgColor:{control:"color"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},o={args:{tipPosition:"dynamic",children:"Hover me!",content:"Tooltip Content"}};o.storyName="Dynamic Tooltip";const t={args:{tipPosition:"bottom",children:"Hover me!",content:"Tooltip Content"}};t.storyName="Default Tooltip";const e={args:{tipPosition:"dynamic",children:i(C,{background:"white",p:2,children:"Hover me!"}),content:i(v,{color:"green",fontWeight:"bold",children:"Styled Tooltip Content"}),tooltipBgColor:"lightpink"}};e.storyName="Styled Tooltip";var r,n,s,p,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    tipPosition: "dynamic",
    children: "Hover me!",
    content: "Tooltip Content"
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source},description:{story:"Dynamic tooltip example. Changes the tooltip position based on the available screen space.",...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.description}}};var c,l,m,d,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:"Tooltip with styled content and button trigger example.",...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.description}}};const R=["DynamicTooltip","DefaultTooltip","StyledTooltip"];export{t as DefaultTooltip,o as DynamicTooltip,e as StyledTooltip,R as __namedExportsOrder,O as default};
//# sourceMappingURL=Tooltip.stories-98b81a30.js.map
