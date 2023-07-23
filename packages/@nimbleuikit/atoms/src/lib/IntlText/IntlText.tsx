import { IntlTextProps } from ".";
import { Text } from "../Text";

const IntlText: React.FC<IntlTextProps> = (props) => {
  const { formatType, formatOptions, value, locales, ...textProps } = props;

  let formattedValue: string = "";

  switch (formatType) {
    case "number":
      formattedValue = new Intl.NumberFormat(locales, formatOptions).format(
        Number(value)
      );
      break;
    case "date":
      formattedValue = new Intl.DateTimeFormat(locales, formatOptions).format(
        new Date(String(value))
      );
      break;
    case "relativeTime":
      formattedValue = new Intl.RelativeTimeFormat(
        locales,
        formatOptions
      ).format(Number(value), props.unit);
      break;
  }

  return <Text {...textProps}>{formattedValue}</Text>;
};

export default IntlText;
