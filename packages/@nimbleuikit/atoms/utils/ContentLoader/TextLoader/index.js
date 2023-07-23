import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.module.css";
const TextLoader = ({ width = 400, height = 15, backgroundColor = "#f3f3f3", foregroundColor = "#ecebeb", quantity = 4, }) => {
    return (_jsx("div", { className: "text-loader-container", children: [...Array(quantity)].map((_, i) => (_jsx("div", { className: "text-loader", style: {
                width: `${width}px`,
                height: `${height}px`,
                background: `linear-gradient(to right, ${backgroundColor} 0%, ${foregroundColor} 50%, ${backgroundColor} 100%)`,
            } }, i))) }));
};
export default TextLoader;
