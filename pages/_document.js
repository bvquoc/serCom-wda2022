import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta name="theme-color" content="#FFDD00" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-512x512.png" />
          <link rel="icon" href="/icon-512x512.png" />
          <meta name="renderer" content="webkit" />
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="500" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
