import "styles/globals.css";
import "styles/nprogress.css";
import { SWRConfig } from "swr";
import { ThemeProvider } from "next-themes";
import Router from "next/router";
import Nprogress from "nprogress";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  Nprogress.start();
}
Router.onRouteChangeComplete = (url) => {
  Nprogress.done();
}
Router.onRouteChangeError = (url) => {
  Nprogress.done();
}
export default function App({ Component, pageProps }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
        onError: (error, key) => {
          if (error.status !== 403 && error.status !== 404) {
            alert("Алдаа гарлаа... Дахин ачаална уу!");
          }
        },
      }}
    >
      <ThemeProvider enableSystem={true} attribute="class">
        <div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </SWRConfig>
  );
}
