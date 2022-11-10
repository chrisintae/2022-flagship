// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import { AppProps } from "next/app";
import "normalize.css";
import "../../public/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
