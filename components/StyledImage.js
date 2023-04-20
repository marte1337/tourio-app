import Image from "next/image.js";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 2px 8px -1px black;
`;
