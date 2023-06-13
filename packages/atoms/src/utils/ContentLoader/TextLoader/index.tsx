import React from "react";
import { ContentLoaderProps } from "../types";
import "./style.css";

const TextLoader: React.FC<ContentLoaderProps> = ({
  width = 400,
  height = 15,
  backgroundColor = "#f3f3f3",
  foregroundColor = "#ecebeb",
  quantity = 4,
}) => {
  return (
    <div className="text-loader-container">
      {[...Array(quantity)].map((_, i) => (
        <div
          key={i}
          className="text-loader"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            background: `linear-gradient(to right, ${backgroundColor} 0%, ${foregroundColor} 50%, ${backgroundColor} 100%)`,
          }}
        />
      ))}
    </div>
  );
};
export default TextLoader;
