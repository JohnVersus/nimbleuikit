import { jsx as _jsx } from "react/jsx-runtime";
import Spinner from "./Spinner";
import DoubleBounce from "./DoubleBounce";
const Loader = ({ size = 25, color = "#000", type = "spinner", }) => {
    switch (type) {
        case "double-bounce":
            return _jsx(DoubleBounce, { size: size, color: color });
        case "spinner":
        default:
            // Default case, 'spinner'
            return _jsx(Spinner, { size: size, color: color });
    }
};
export default Loader;
