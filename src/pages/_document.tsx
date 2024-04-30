import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta
            name="description"
            content="Este site foi criado com o propósito de avaliar a proficiência dos desenvolvedores na elaboração de código claro, meticulosamente testado e passível de reutilização. Os participantes são solicitados a concluir uma tarefa específica e proceder com o deployment da aplicação, fornecendo os links correspondentes ao aplicativo e ao repositório associado. Esta avaliação possibilita uma análise abrangente do desempenho dos candidatos, sendo de suma importância para o desdobramento subsequente do processo avaliativo."
          />
          <meta name="author" content="xTirian - Matheus Fernandes" />
          <title>MKS Challenge - xTirian</title>
          <link rel="icon" href="/logo.jpeg" />
          <style>{globalStyles}</style>
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


const globalStyles = `
* {
box-sizing: border-box;
margin: 0;
padding: 0;
}
body {
font-family: "Montserrat", sans-serif;
color: #2c2c2c;
}

html {
scroll-behavior: smooth;
font-size: 62.5%;
}
`;