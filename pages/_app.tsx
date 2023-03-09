import type { AppProps } from "next/app";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";

function HomePage({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <React.StrictMode>
          <Component {...pageProps} />
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
