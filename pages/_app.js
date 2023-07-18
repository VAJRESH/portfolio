import Head from "next/head";
import "@/styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vajresh - Portfolio</title>
        <link rel="shortcut icon" href="/vajresh.svg" type="image/x-icon" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
