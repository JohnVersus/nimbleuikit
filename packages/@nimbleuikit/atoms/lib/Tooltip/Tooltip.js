import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Box } from "../Box";
const Tooltip = ({ children, content, visible, tipPosition = "dynamic", ...props }) => {
    const wrapperRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState(tipPosition);
    useEffect(() => {
        setIsVisible(visible || false);
    }, [visible]);
    useEffect(() => {
        if (tipPosition === "dynamic" && wrapperRef.current) {
            const rect = wrapperRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            setTooltipPosition(rect.y > windowHeight / 2 ? "top" : "bottom");
        }
        else {
            setTooltipPosition(tipPosition);
        }
    }, [tipPosition]);
    const handleMouseEnter = () => {
        if (visible !== true)
            setIsVisible(true);
    };
    const handleMouseLeave = () => {
        if (visible !== true)
            setIsVisible(false);
    };
    return (_jsxs(Box, { ref: wrapperRef, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, display: "inline-flex", justifyContent: "center", alignItems: "center", position: "relative", ...props, children: [children, isVisible && (_jsxs(_Fragment, { children: [_jsx(Box, { bg: `${typeof props.tooltipBgColor === "string"
                            ? props.tooltipBgColor
                            : "#333"}`, borderRadius: "4px", color: "white", fontSize: "14px", p: "8px", position: "absolute", textAlign: "center", zIndex: "100", top: tooltipPosition === "bottom" ? "calc(100% + 5px)" : undefined, bottom: tooltipPosition === "top" ? "calc(100% + 5px)" : undefined, left: "50%", css: {
                            transform: "translateX(-50%)",
                        }, children: content }), _jsx(Box, { width: "0", height: "0", borderLeft: "5px solid transparent", borderRight: "5px solid transparent", position: "absolute", top: tooltipPosition === "bottom" ? "100%" : undefined, bottom: tooltipPosition === "top" ? "100%" : undefined, left: "50%", borderBottom: tooltipPosition === "bottom"
                            ? `5px solid ${typeof props.tooltipBgColor === "string"
                                ? props.tooltipBgColor
                                : "#333"}`
                            : undefined, borderTop: tooltipPosition === "top"
                            ? `5px solid ${typeof props.tooltipBgColor === "string"
                                ? props.tooltipBgColor
                                : "#333"}`
                            : undefined, css: {
                            transform: "translateX(-50%)",
                        } })] }))] }));
};
export default Tooltip;
