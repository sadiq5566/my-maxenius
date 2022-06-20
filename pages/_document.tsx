import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <>
        <Html>
          <Head>
            <meta name="theme-color" content="#ff173d" />
            <meta name="msapplication-navbutton-color" content="#ff173d" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#ff173d" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
              rel="stylesheet"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}

export default CustomDocument;
