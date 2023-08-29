import{a as h,F as y,j as e}from"./jsx-runtime-236b79c2.js";import"./jsx-runtime-4ca860c5.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const o=({title:a,description:r,image:i,url:g,keywords:n,lang:d="en",type:u="website"})=>h(y,{children:[e("title",{children:a}),e("meta",{name:"description",content:r}),e("meta",{name:"keywords",content:n==null?void 0:n.join(",")}),e("meta",{property:"og:title",content:a}),e("meta",{property:"og:description",content:r}),e("meta",{property:"og:image",content:i}),e("meta",{property:"og:url",content:g}),e("meta",{property:"og:type",content:u}),e("meta",{name:"twitter:card",content:"summary_large_image"}),e("meta",{name:"twitter:title",content:a}),e("meta",{name:"twitter:description",content:r}),e("meta",{name:"twitter:image",content:i}),e("html",{lang:d})]});try{o.displayName="SEO",o.__docgenInfo={description:"",displayName:"SEO",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!1,type:{name:"string"}},keywords:{defaultValue:null,description:"",name:"keywords",required:!1,type:{name:"string[]"}},lang:{defaultValue:{value:"en"},description:"",name:"lang",required:!1,type:{name:"string"}},type:{defaultValue:{value:"website"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Atoms/Utils/SEO",component:o,tags:["autodocs"],argTypes:{title:{control:"text",description:"The title of the page."},description:{control:"text",description:"The description of the page."},image:{control:"text",description:"The URL of the image for the page."},url:{control:"text",description:"The URL of the page."},keywords:{control:"array",description:"Keywords associated with the page."},lang:{control:"text",description:"The language of the page."},type:{control:"text",description:"The type of the page."}},parameters:{docs:{description:{component:"\n    The `SEO` component generates general SEO meta tags like Name, Descriptiom, Keywords, \n    Image and URL along with OG and Twitter tags for a web page.\n          \n          It accepts the following props:\n\n          - `title` (required): The title of the page.\n          - `description` (required): The description of the page.\n          - `image`: The URL of the image for the page.\n          - `url`: The URL of the page.\n          - `keywords`: Keywords associated with the page.\n          - `lang`: The language of the page.\n          - `type`: The type of the page.\n        "},source:{code:`
        <SEO
          title="Example Page"
          description="This is an example page for SEO purposes."
          image="https://example.com/image.jpg"
          url="https://example.com"
          keywords={["example", "SEO"]}
          lang="en"
          type="website"
        />
        `}}}},t={args:{title:"Example Page",description:"This is an example page for SEO purposes.",image:"https://example.com/image.jpg",url:"https://example.com",keywords:["example","SEO"],lang:"en",type:"website"}};t.storyName="Default SEO";var p,s,l,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Example Page",
    description: "This is an example page for SEO purposes.",
    image: "https://example.com/image.jpg",
    url: "https://example.com",
    keywords: ["example", "SEO"],
    lang: "en",
    type: "website"
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:`### Usage

\`\`\`jsx
<SEO
  title="Example Page"
  description="This is an example page for SEO purposes."
  image="https://example.com/image.jpg"
  url="https://example.com"
  keywords={["example", "SEO"]}
  lang="en"
  type="website"
/>
\`\`\``,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,O as default};
//# sourceMappingURL=SEO.stories-ae548c97.js.map
