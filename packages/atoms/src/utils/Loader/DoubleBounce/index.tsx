import React from "react";
import { LoaderProps } from "../types";
import "./styles.css";

const DoubleBounce: React.FC<LoaderProps> = ({ size, color }) => (
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
