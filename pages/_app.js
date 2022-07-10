import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Vajresh - Portfolio</title>
        <link rel="shortcut icon" href="/vajresh.svg" type="image/x-icon" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}
