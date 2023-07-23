import { SEO } from ".";
const meta = {
    title: "Atoms/Utils/SEO",
    component: SEO,
    tags: ["autodocs"],
    argTypes: {
        title: { control: "text", description: "The title of the page." },
        description: {
            control: "text",
            description: "The description of the page.",
        },
        image: {
            control: "text",
            description: "The URL of the image for the page.",
        },
        url: { control: "text", description: "The URL of the page." },
        keywords: {
            control: "array",
            description: "Keywords associated with the page.",
        },
        lang: { control: "text", description: "The language of the page." },
        type: { control: "text", description: "The type of the page." },
    },
    parameters: {
        docs: {
            description: {
                component: `
    The \`SEO\` component generates general SEO meta tags like Name, Descriptiom, Keywords, 
    Image and URL along with OG and Twitter tags for a web page.
          
          It accepts the following props:

          - \`title\` (required): The title of the page.
          - \`description\` (required): The description of the page.
          - \`image\`: The URL of the image for the page.
          - \`url\`: The URL of the page.
          - \`keywords\`: Keywords associated with the page.
          - \`lang\`: The language of the page.
          - \`type\`: The type of the page.
        `,
            },
            source: {
                code: `
        <SEO
          title="Example Page"
          description="This is an example page for SEO purposes."
          image="https://example.com/image.jpg"
          url="https://example.com"
          keywords={["example", "SEO"]}
          lang="en"
          type="website"
        />
        `,
            },
        },
    },
};
export default meta;
/**
 *
 * ### Usage
 *
 * ```jsx
 * <SEO
 *   title="Example Page"
 *   description="This is an example page for SEO purposes."
 *   image="https://example.com/image.jpg"
 *   url="https://example.com"
 *   keywords={["example", "SEO"]}
 *   lang="en"
 *   type="website"
 * />
 * ```
 */
export const Default = {
    args: {
        title: "Example Page",
        description: "This is an example page for SEO purposes.",
        image: "https://example.com/image.jpg",
        url: "https://example.com",
        keywords: ["example", "SEO"],
        lang: "en",
        type: "website",
    },
};
Default.storyName = "Default SEO";
