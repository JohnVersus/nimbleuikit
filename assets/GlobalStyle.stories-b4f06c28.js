import{j as c}from"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const o=({css:s})=>c("style",{children:JSON.stringify(s).replace(/,/g,";").replace(/"/g,"").replace(/:/g,": ").replace(/{|}/g,"")});try{o.displayName="GlobalStyle",o.__docgenInfo={description:"",displayName:"GlobalStyle",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProperties"}}}}}catch{}const f={title:"Atoms/Utils/GlobalStyle",component:o,tags:["autodocs"],argTypes:{css:{control:"object",description:"The CSS rules to be applied globally"}},parameters:{docs:{description:{component:"\n    The `GlobalStyle` component accepts a CSS object prop and applies these styles globally.            \n    It accepts the following props:\n        - `css`: The CSS rules to be applied globally.\n              "},source:{code:`
        <GlobalStyle
          css={{
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            backgroundColor: '#fff',
          }}
        />
        `}}}},e={args:{css:{fontFamily:"Arial, sans-serif",color:"#333",backgroundColor:"#fff"}}};e.storyName="GlobalStyle";var r,l,a,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    css: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      backgroundColor: "#fff"
    }
  }
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source},description:{story:`### Usage

\`\`\`jsx
<GlobalStyle
       css={{
         fontFamily: 'Arial, sans-serif',
         color: '#333',
         backgroundColor: '#fff',
       }}
     />
\`\`\``,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.description}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,f as default};
//# sourceMappingURL=GlobalStyle.stories-b4f06c28.js.map
