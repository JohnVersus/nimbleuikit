import React from "react";
import { ContentLoaderProps } from "./types";
import ImageLoader from "./ImageLoader";
import TextLoader from "./TextLoader";

const ContentLoader: React.FC<ContentLoaderProps> = ({
  type = "image",
  ...props
}) => {
  switch (type) {
    case "text":
      return <TextLoader {...props} />;
    case "image":
    default:
      return <ImageLoader {...props} />;
  }
};

export default ContentLoader;
