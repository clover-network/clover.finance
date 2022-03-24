// import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript } from 'next/document'

// from https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <noscript dangerouslySetInnerHTML={{ 
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NPQR4PT" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
