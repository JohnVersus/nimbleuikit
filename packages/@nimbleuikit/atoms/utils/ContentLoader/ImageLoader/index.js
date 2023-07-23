import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.module.css";
const ImageLoader = ({ width = 200, height = 200, backgroundColor = "#f3f3f3", foregroundColor = "#ecebeb", quantity = 1, }) => {
    return (_jsx("div", { className: "image-loader-container", children: [...Array(quantity)].map((_, i) => (_jsx("div", { className: "image-loader", style: {
                width: `${width}px`,
                height: `${height}px`,
                background: `linear-gradient(to right, ${backgroundColor} 0%, ${foregroundColor} 50%, ${backgroundColor} 100%)`,
            } }, i))) }));
};
export default ImageLoader;
