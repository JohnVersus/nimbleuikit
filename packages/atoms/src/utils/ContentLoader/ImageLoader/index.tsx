import { ContentLoaderProps } from "../types";
import "./styles.css";

const ImageLoader = ({
  width = 200,
  height = 200,
  backgroundColor = "#f3f3f3",
  foregroundColor = "#ecebeb",
  quantity = 1,
}: ContentLoaderProps) => {
  return (
    <div className="image-loader-container">
      {[...Array(quantity)].map((_, i) => (
        <div
          key={i}
          className="image-loader"
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

export default ImageLoader;
