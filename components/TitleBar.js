import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #32363f;
  font-size: 2.5rem;
  color: white;
  margin: 0;
  padding: 20px;
  text-align: center;
  z-index: 1;
  box-shadow: 0 0 5px -1px black;
`;

export default function TitleBar() {
  return <Headline>Tourio</Headline>;
}
