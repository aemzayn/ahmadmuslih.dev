import 'styles/globalStyles.css'
import { DefaultSeo } from 'next-seo'
import SEO from 'config/seo.config'
import { GlobalContext } from 'context'
import useAnalytics from 'hooks/useAnalytics'

function MyApp({ Component, pageProps }) {
  useAnalytics()

  return (
    <GlobalContext>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </GlobalContext>
  )
}

export default MyApp
