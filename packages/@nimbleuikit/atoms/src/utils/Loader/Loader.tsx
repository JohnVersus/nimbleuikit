import { LoaderProps } from "./types";
import Spinner from "./Spinner";
import DoubleBounce from "./DoubleBounce";

const Loader = ({
  size = 25,
  color = "#000",
  type = "spinner",
}: LoaderProps) => {
  switch (type) {
    case "double-bounce":
      return <DoubleBounce size={size} color={color} />;
    case "spinner":
    default:
      // Default case, 'spinner'
      return <Spinner size={size} color={color} />;
  }
};

export default Loader;
