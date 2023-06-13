import React from "react";
import { LoaderProps } from "../types";
import "./styles.css";

const Spinner: React.FC<LoaderProps> = ({ size, color }) => (
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
