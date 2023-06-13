import React from "react";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
