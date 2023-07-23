import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from "../Text";
const IntlText = (props) => {
    const { formatType, formatOptions, value, locales, ...textProps } = props;
    let formattedValue = "";
    switch (formatType) {
        case "number":
            formattedValue = new Intl.NumberFormat(locales, formatOptions).format(Number(value));
            break;
        case "date":
            formattedValue = new Intl.DateTimeFormat(locales, formatOptions).format(new Date(String(value)));
            break;
        case "relativeTime":
            formattedValue = new Intl.RelativeTimeFormat(locales, formatOptions).format(Number(value), props.unit);
            break;
    }
    return _jsx(Text, { ...textProps, children: formattedValue });
};
export default IntlText;
