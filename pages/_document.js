import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" property="og:title" content="Yomanuel 2024" />
        <meta
          name="description"
          property="og:description"
          content="Yoma Weds Emmanuel"
        />
        <meta
          name="site_name"
          property="og:site_name"
          content="https://yomanuel.com"
        />
        <meta name="type" property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="image"
          property="og:image"
          content="https://drive.google.com/uc?export=view&id=1HtwtYIZlB9jPrOeZ1jGXagpzPXwipxZG"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
