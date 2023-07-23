import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.module.css";
const DoubleBounce = ({ size, color }) => (_jsxs("div", { className: "double-bounce-loader", children: [_jsx("div", { className: "bounce1", style: {
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
            } }), _jsx("div", { className: "bounce2", style: {
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
            } })] }));
export default DoubleBounce;
