import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TF9QTDZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default AppDocument
