import{j as i}from"./jsx-runtime-91a467a5.js";import{T as f}from"./Tooltip-1374056d.js";import{B as C}from"./Button-76d85f6b.js";import{T as v}from"./Text-3e49330d.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-27aaf5fd.js";import"./system-8e4bc0f2.js";import"./FlexBox-3590fa2e.js";import"./Form-0f5723e2.js";import"./Grid-9cc8b09a.js";import"./Label-3503ff7d.js";import"./IntlText-8e3517f4.js";import"./TextArea-f6fca39f.js";import"./Body-d5e6a869.js";import"./ContentLoader-ab8283dc.js";import"./Header-f221caa9.js";import"./Loader-2b6d4952.js";import"./SEO-a0f424ca.js";const G={title:"Atoms/Tooltip",component:f,tags:["autodocs"],argTypes:{tipPosition:{control:{type:"select",options:["top","bottom","dynamic"]}},visible:{control:"boolean"},tooltipBgColor:{control:"color"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},o={args:{tipPosition:"dynamic",children:"Hover me!",content:"Tooltip Content"}};o.storyName="Dynamic Tooltip";const t={args:{tipPosition:"bottom",children:"Hover me!",content:"Tooltip Content"}};t.storyName="Default Tooltip";const e={args:{tipPosition:"dynamic",children:i(C,{background:"white",p:2,children:"Hover me!"}),content:i(v,{color:"green",fontWeight:"bold",children:"Styled Tooltip Content"}),tooltipBgColor:"lightpink"}};e.storyName="Styled Tooltip";var r,n,p,s,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    tipPosition: "dynamic",
    children: "Hover me!",
    content: "Tooltip Content"
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source},description:{story:"Dynamic tooltip example. Changes the tooltip position based on the available screen space.",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.description}}};var c,l,m,d,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:"Tooltip with styled content and button trigger example.",...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.description}}};const I=["DynamicTooltip","DefaultTooltip","StyledTooltip"];export{t as DefaultTooltip,o as DynamicTooltip,e as StyledTooltip,I as __namedExportsOrder,G as default};
//# sourceMappingURL=Tooltip.stories-0a801273.js.map
