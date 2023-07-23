import{j as o}from"./jsx-runtime-29545a09.js";import{B as n}from"./Box-2b6137c3.js";import{G as B}from"./Grid-56a8ef1f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./system-aa5c237b.js";const I={title:"Atoms/Grid",component:B,tags:["autodocs"],argTypes:{gridTemplateColumns:{control:"text"},gap:{control:"text"},gridAutoRows:{control:"text"},gridAutoColumns:{control:"text"}},parameters:{docs:{description:{component:"Refer to [Props Details](?path=/docs/propsdetails--documentation) for details on the available props."}}}},r={args:{gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",children:Array.from({length:9}).map((s,e)=>o(n,{bg:"lightgray",height:50,display:"flex",alignItems:"center",justifyContent:"center",children:`Box ${e+1}`},e))}};r.storyName="Template Layout Grid";const t={args:{gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px",children:Array.from({length:12}).map((s,e)=>o(n,{bg:"lightgray",height:50,display:"flex",alignItems:"center",justifyContent:"center",children:`Box ${e+1}`},e))}};t.storyName="Auto Layout Grid";const a={args:{gridTemplateColumns:["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"],gridAutoRows:"1fr",gap:"10px",children:Array.from({length:12}).map((s,e)=>o(n,{bg:"lightgray",height:50,display:"flex",alignItems:"center",justifyContent:"center",children:`Box ${e+1}`},e))}};a.storyName="Responsive Grid";var i,p,l,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    children: Array.from({
      length: 9
    }).map((_, i) => <Box key={i} bg="lightgray" height={50} display="flex" alignItems="center" justifyContent="center">
        {\`Box \${i + 1}\`}
      </Box>)
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source},description:{story:"3 Column Grid",...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.description}}};var g,c,u,f,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "10px",
    children: Array.from({
      length: 12
    }).map((_, i) => <Box key={i} bg="lightgray" height={50} display="flex" alignItems="center" justifyContent="center">
        {\`Box \${i + 1}\`}
      </Box>)
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source},description:{story:"Auto Layout Grid",...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var x,h,A,C,G;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(h=a.parameters)==null?void 0:h.docs)==null?void 0:A.source},description:{story:"Responsive Grid",...(G=(C=a.parameters)==null?void 0:C.docs)==null?void 0:G.description}}};const $=["TemplateLayoutGrid","AutoLayoutGrid","ResponsiveGrid"];export{t as AutoLayoutGrid,a as ResponsiveGrid,r as TemplateLayoutGrid,$ as __namedExportsOrder,I as default};
//# sourceMappingURL=Grid.stories-fccffb3d.js.map
