import '@/styles/globalStyles.css'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
