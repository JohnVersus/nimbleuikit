import React from "react";
import { BodyProps } from "./types";

const Body: React.FC<BodyProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Body;
