import{j as s}from"./jsx-runtime-91a467a5.js";import{B as i}from"./Box-49a6b108.js";import{s as G,c as _}from"./system-af6bb858.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const o=G.div({display:"grid"},..._,n=>({gap:n.gap}));try{o.displayName="Grid",o.__docgenInfo={description:"`Grid` is a styled-component used to create grid layouts.\n\nThe `gridTemplateColumns` prop can be used to specify the column structure of the grid.\n\nThe `gap` prop can be used to specify the space between grid items.\n\nThe `gridAutoRows` and `gridAutoColumns` props can be used to specify the size of rows and columns respectively\nthat are created implicitly by placing items outside the explicit grid.",displayName:"Grid",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}},as:{defaultValue:null,description:"The HTML element or custom component as which the component should render",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:`Custom CSS for the component.
This can either be a CSSObject, or a function that receives the theme and returns a CSSObject.`,name:"css",required:!1,type:{name:"CSSObject | ((theme: any) => CSSObject)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const R={title:"Atoms/Grid",component:o,tags:["autodocs"],argTypes:{gridTemplateColumns:{control:"text"},gap:{control:"text"},gridAutoRows:{control:"text"},gridAutoColumns:{control:"text"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},t={args:{gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",children:Array.from({length:9}).map((n,e)=>s(i,{bg:"lightgray",height:50,display:"flex",alignItems:"center",justifyContent:"center",children:`Box ${e+1}`},e))}};t.storyName="Template Layout Grid";const r={args:{gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px",children:Array.from({length:12}).map((n,e)=>s(i,{bg:"lightgray",height:50,display:"flex",alignItems:"center",justifyContent:"center",children:`Box ${e+1}`},e))}};r.storyName="Auto Layout Grid";const a={args:{gridTemplateColumns:["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"],gridAutoRows:"1fr",gap:"10px",children:Array.from({length:12}).map((n,e)=>s(i,{bg:"lightgray",height:50,display:"flex",alignItems:"center",justifyContent:"center",children:`Box ${e+1}`},e))}};a.storyName="Responsive Grid";var p,l,d,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    children: Array.from({
      length: 9
    }).map((_, i) => <Box key={i} bg="lightgray" height={50} display="flex" alignItems="center" justifyContent="center">
        {\`Box \${i + 1}\`}
      </Box>)
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"3 Column Grid",...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};var u,g,f,y,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "10px",
    children: Array.from({
      length: 12
    }).map((_, i) => <Box key={i} bg="lightgray" height={50} display="flex" alignItems="center" justifyContent="center">
        {\`Box \${i + 1}\`}
      </Box>)
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"Auto Layout Grid",...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};var x,C,b,T,A;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    gridTemplateColumns: ["repeat(1, 1fr)",
    // mobile (default)
    "repeat(1, 1fr)",
    // portrait tablet
    "repeat(2, 1fr)",
    // landscape tablet
    "repeat(3, 1fr)",
    // small desktop
    "repeat(4, 1fr)" // large desktop
    ],

    gridAutoRows: "1fr",
    gap: "10px",
    children: Array.from({
      length: 12
    }).map((_, i) => <Box key={i} bg="lightgray" height={50} display="flex" alignItems="center" justifyContent="center">
        {\`Box \${i + 1}\`}
      </Box>)
  }
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source},description:{story:"Responsive Grid",...(A=(T=a.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};const w=["TemplateLayoutGrid","AutoLayoutGrid","ResponsiveGrid"];export{r as AutoLayoutGrid,a as ResponsiveGrid,t as TemplateLayoutGrid,w as __namedExportsOrder,R as default};
//# sourceMappingURL=Grid.stories-bd38ebe0.js.map
