import TitleBar from "./TitleBar.js";
import styled from "styled-components";
import Head from "next/head.js";
import Login from "./Login.js";

const Main = styled.main`
  display: grid;
  gap: 0.5rem;
  margin-top: 5rem;
  padding: 0.5rem;
  position: relative;
  width: 95vw;
  max-width: 600px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tourio®</title>
      </Head>
      <TitleBar />
      <Main>
        <Login />
        {children}
      </Main>
    </>
  );
}
