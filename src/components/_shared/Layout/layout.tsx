import Header from "../header/header";
import Footer from "../footer/footer";
import { PropsWithChildren } from "react";
import Head from "next/head";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ minHeight: `calc(100vh - 96px)` }}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
