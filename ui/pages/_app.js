import Providers from "../Providers";
import "./global.css";

export default ({ Component, pageProps }) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};
