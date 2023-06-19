import React from "react";
import { GlobalStyleProps } from "./GlobalStyle.types";

const GlobalStyle: React.FC<GlobalStyleProps> = ({ css }) => {
  return (
    <style>
      {JSON.stringify(css)
        .replace(/,/g, ";")
        .replace(/"/g, "")
        .replace(/:/g, ": ")
        .replace(/{|}/g, "")}
    </style>
  );
};

export default GlobalStyle;
