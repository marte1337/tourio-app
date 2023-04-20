import TitleBar from "./TitleBar.js";
import styled from "styled-components";
import Head from "next/head.js";

const Main = styled.main`
  display: grid;
  gap: 0.5rem;
  margin-top: 5rem;
  padding: 0.5rem;
  position: relative;
  min-width: 400px;
  max-width: 600px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tourio</title>
      </Head>
      <TitleBar />
      <Main>{children}</Main>
    </>
  );
}
