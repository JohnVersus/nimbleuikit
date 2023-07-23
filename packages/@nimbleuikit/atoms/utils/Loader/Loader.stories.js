import { Loader } from ".";
/**
 * This is a simple loading spinner.
 */
const meta = {
    title: "Atoms/Utils/Loader",
    component: Loader,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "number",
            description: "The size of the loader in pixels",
        },
        color: {
            control: "color",
            description: "The color of the loader",
        },
        type: {
            control: "select",
            description: "The type of loader",
            options: ["spinner", "double-bounce"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        size: 25,
        color: "#000",
        type: "spinner",
    },
};
/**
 * This is an example of a spinner loader.
 */
export const Spinner = {
    args: {
        size: 50,
        color: "#000",
        type: "spinner",
    },
};
/**
 * This is an example of a double bounce loader.
 */
export const DoubleBounce = {
    args: {
        size: 50,
        color: "#000",
        type: "double-bounce",
    },
};
