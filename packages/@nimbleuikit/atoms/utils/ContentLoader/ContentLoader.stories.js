import { ContentLoader } from ".";
/**
 * Placeholder loading components for images, text, and a combination of both.
 */
const meta = {
    title: "Atoms/Utils/ContentLoader",
    component: ContentLoader,
    tags: ["autodocs"],
    argTypes: {
        width: {
            control: "number",
            description: "The width of the loader in pixels",
        },
        height: {
            control: "number",
            description: "The height of the loader in pixels",
        },
        backgroundColor: {
            control: "color",
            description: "The background color of the loader",
        },
        foregroundColor: {
            control: "color",
            description: "The foreground color of the loader",
        },
        type: {
            control: "select",
            options: ["image", "text"],
            description: "The type of the content loader",
        },
        quantity: {
            control: "number",
            description: "The quantity of the placeholders",
        },
    },
};
export default meta;
/**
 * The ContentLoader component when used as an image loader
 */
export const ImageLoader = {
    args: {
        width: 200,
        height: 200,
        backgroundColor: "#f3f3f3",
        foregroundColor: "#ecebeb",
        type: "image",
    },
};
/**
 * The ContentLoader component when used as a text loader
 */
export const TextLoader = {
    args: {
        width: 400,
        height: 20,
        backgroundColor: "#f3f3f3",
        foregroundColor: "#ecebeb",
        type: "text",
    },
};
