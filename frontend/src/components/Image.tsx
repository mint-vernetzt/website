import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";

export interface ImageProps {
  src: string | IGatsbyImageData;
  alt?: string;
  className?: string;
  "data-testid"?: string;
  forceImg?: boolean;
}

function Image(props: ImageProps) {
  const { src, alt = "", forceImg = false, ...otherProps } = props;

  if (typeof src === "string") {
    if (src.endsWith(".svg") || forceImg === true) {
      return <img src={src} alt={alt} {...otherProps} />;
    }
    return <StaticImage src={src} alt={alt} {...otherProps} />;
  }
  return <GatsbyImage image={src} alt={alt} {...otherProps} />;
}

export default Image;
