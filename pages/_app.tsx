import { AppProps } from "next/app";

import "../styles/global.scss";

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

export default App;
