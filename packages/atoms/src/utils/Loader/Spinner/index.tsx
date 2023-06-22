import { LoaderProps } from "../types";
import "./styles.css";

const Spinner = ({ size, color }: LoaderProps) => (
  <div
    className="spinner-loader"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderColor: `${color} transparent transparent`,
    }}
  />
);

export default Spinner;
