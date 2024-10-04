import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Yomanuel 2024" />
        <meta property="og:description" content="Yoma Weds Emmanuel" />
        <meta property="og:site_name" content="yomanuel" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
