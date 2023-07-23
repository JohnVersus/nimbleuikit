import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.module.css";
const Spinner = ({ size, color }) => (_jsx("div", { className: "spinner-loader", style: {
        width: `${size}px`,
        height: `${size}px`,
        borderColor: `${color} transparent transparent`,
    } }));
export default Spinner;
