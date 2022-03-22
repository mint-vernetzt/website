import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface ImageProps {
  src: string | IGatsbyImageData;
  alt?: string;
  className?: string;
  "data-testid"?: string;
}

function Image(props: ImageProps) {
  const { src, alt = "", ...otherProps } = props;

  if (typeof src === "string") {
    return <img src={src} alt={alt} {...otherProps} />;
  }
  return <GatsbyImage image={src} alt={alt} {...otherProps} />;
}

export default Image;
