import '@/styles/globalStyles.css'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import { GlobalContext } from 'context'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </GlobalContext>
  )
}

export default MyApp
