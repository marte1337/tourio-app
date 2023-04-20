import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: #82868f;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: 3px solid orange;
  font-size: inherit;
  box-shadow: 0 2px 8px -1px black;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: firebrick;
      color: white;
    `}
`;
