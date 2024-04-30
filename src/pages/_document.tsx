import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
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
      <Html lang="pt-BR">
        <Head>
          <meta
            name="description"
            content="Este site foi criado com o propósito de avaliar a proficiência dos desenvolvedores na elaboração de código claro, meticulosamente testado e passível de reutilização. Os participantes são solicitados a concluir uma tarefa específica e proceder com o deployment da aplicação, fornecendo os links correspondentes ao aplicativo e ao repositório associado. Esta avaliação possibilita uma análise abrangente do desempenho dos candidatos, sendo de suma importância para o desdobramento subsequente do processo avaliativo."
          />
          <meta name="author" content="xTirian - Matheus Fernandes" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          />
          <link rel="icon" href="/logo.jpeg" />
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
