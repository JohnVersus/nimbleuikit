import { jsx as _jsx } from "react/jsx-runtime";
import ImageLoader from "./ImageLoader";
import TextLoader from "./TextLoader";
const ContentLoader = ({ type = "image", ...props }) => {
    switch (type) {
        case "text":
            return _jsx(TextLoader, { ...props });
        case "image":
        default:
            return _jsx(ImageLoader, { ...props });
    }
};
export default ContentLoader;
