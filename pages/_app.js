import GlobalStyle from "@/styles";
import Layout from "@/components/Layout/Layout";
import { Titillium_Web } from "next/font/google";

const titilliumWeb = Titillium_Web({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main className={titilliumWeb.className}>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
