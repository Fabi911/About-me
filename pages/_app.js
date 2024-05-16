import GlobalStyle from "@/styles";
import Layout from "@/components/Layout/Layout";
import { Titillium_Web } from 'next/font/google'
 
const titilliumWeb = Titillium_Web({
    weight: '400',
    subsets:['latin'],
})

export default function App({ Component, pageProps }) {
  return (
  <main className={titilliumWeb.className}>
    <Layout>
      <GlobalStyle/>
      <Component {...pageProps} />
    </Layout>
  </main>
  )
}
