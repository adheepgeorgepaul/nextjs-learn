import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="custom" content="add meta tags like this"></meta>
        </Head>

        <body>
          <Main></Main>
        </body>

        <NextScript></NextScript>
      </Html>
    );
  }
}
