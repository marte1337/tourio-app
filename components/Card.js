import Link from "next/link.js";
import styled from "styled-components";
import { StyledImage } from "./StyledImage.js";

export default function Card({ name, image, location, id }) {
  return (
    <Article>
      <Figure>
        <ImageContainer>
          <StyledImage
            src={image}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            alt=""
          />
        </ImageContainer>
        <figcaption>
          <strong>{name}</strong>
        </figcaption>
      </Figure>
      <p>Location: {location}</p>
      <Link href={`places/${id}`} passHref legacyBehavior>
        <Anchor>
          <ScreenReaderOnly>More Info</ScreenReaderOnly>
        </Anchor>
      </Link>
    </Article>
  );
}

const Article = styled.article`
  border: 3px orange solid;
  border-radius: 0.8rem;
  padding: 0.7rem;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 10rem;
  margin-bottom: 1rem;
`;

const Figure = styled.figure`
  position: relative;
  margin: 0;
`;

const Anchor = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
