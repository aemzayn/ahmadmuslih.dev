import "@/styles/globalStyles.css";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import SEO from "@/helpers/seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
