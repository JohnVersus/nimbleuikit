import React from "react";
import { SEOProps } from "./types";

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  keywords,
  lang = "en",
  type = "website",
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join(",")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <html lang={lang} />
    </>
  );
};

export default SEO;
