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
  padding: 10px;
  text-align: center;
  z-index: 1;
  box-shadow: 0 0 5px -1px black;
  height: 90px;
`;

const titel = "Tourio",
  description = <div className="description">your favorite places to be</div>;

export default function TitleBar() {
  return (
    <Headline>
      {titel}
      {description}
    </Headline>
  );
}
