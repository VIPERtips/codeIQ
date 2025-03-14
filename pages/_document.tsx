import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta tags */}
          <meta name="description" content="CodeIQ - Challenge Your Knowledge" />
          <meta name="theme-color" content="#1a202c" />
          <link rel="manifest" href="/manifest.json" />
          
          {/* External stylesheets */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          />

          {/* Link to the icon */}
          <link rel="icon" href="/quizapp-icon.svg" />
          
          {/* Add additional meta tags, if necessary */}
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
