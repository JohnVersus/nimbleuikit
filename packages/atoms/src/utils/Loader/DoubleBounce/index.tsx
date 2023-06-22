import { LoaderProps } from "../types";
import "./styles.css";

const DoubleBounce = ({ size, color }: LoaderProps) => (
  <div className="double-bounce-loader">
    <div
      className="bounce1"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
    />
    <div
      className="bounce2"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
    />
  </div>
);

export default DoubleBounce;
