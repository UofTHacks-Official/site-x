import { darkTheme, globalStyles } from "~stitches";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <>
      <Head>
        <title>UofTHacks X</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
