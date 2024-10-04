import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Yomanuel 2024" />
        <meta property="og:description" content="Yoma Weds Emmanuel" />
        <meta property="og:site_name" content="https://yomanuel.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/opengraph-image.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
