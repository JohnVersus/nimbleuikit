import { ContentLoaderProps } from "./types";
import ImageLoader from "./ImageLoader";
import TextLoader from "./TextLoader";

const ContentLoader = ({ type = "image", ...props }: ContentLoaderProps) => {
  switch (type) {
    case "text":
      return <TextLoader {...props} />;
    case "image":
    default:
      return <ImageLoader {...props} />;
  }
};

export default ContentLoader;
