import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-no-repeat bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)` }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
