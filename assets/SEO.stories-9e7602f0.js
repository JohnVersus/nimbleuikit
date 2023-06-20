import{S as r}from"./SEO-a0f424ca.js";import"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const l={title:"Atoms/Utils/SEO",component:r,tags:["autodocs"],argTypes:{title:{control:"text",description:"The title of the page."},description:{control:"text",description:"The description of the page."},image:{control:"text",description:"The URL of the image for the page."},url:{control:"text",description:"The URL of the page."},keywords:{control:"array",description:"Keywords associated with the page."},lang:{control:"text",description:"The language of the page."},type:{control:"text",description:"The type of the page."}},parameters:{docs:{description:{component:"\n    The `SEO` component generates general SEO meta tags like Name, Descriptiom, Keywords, \n    Image and URL along with OG and Twitter tags for a web page.\n          \n          It accepts the following props:\n\n          - `title` (required): The title of the page.\n          - `description` (required): The description of the page.\n          - `image`: The URL of the image for the page.\n          - `url`: The URL of the page.\n          - `keywords`: Keywords associated with the page.\n          - `lang`: The language of the page.\n          - `type`: The type of the page.\n        "},source:{code:`
        <SEO
          title="Example Page"
          description="This is an example page for SEO purposes."
          image="https://example.com/image.jpg"
          url="https://example.com"
          keywords={["example", "SEO"]}
          lang="en"
          type="website"
        />
        `}}}},e={args:{title:"Example Page",description:"This is an example page for SEO purposes.",image:"https://example.com/image.jpg",url:"https://example.com",keywords:["example","SEO"],lang:"en",type:"website"}};e.storyName="Default SEO";var t,a,o,p,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    title: "Example Page",
    description: "This is an example page for SEO purposes.",
    image: "https://example.com/image.jpg",
    url: "https://example.com",
    keywords: ["example", "SEO"],
    lang: "en",
    type: "website"
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source},description:{story:`### Usage

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
\`\`\``,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.description}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,l as default};
//# sourceMappingURL=SEO.stories-9e7602f0.js.map
