import 'styles/globalStyles.css'
import { DefaultSeo } from 'next-seo'
import SEO from 'config/seo.config'
import { MenuProvider } from 'context/MenuContext'
import useAnalytics from 'hooks/useAnalytics'

function MyApp({ Component, pageProps }) {
  useAnalytics()

  return (
    <MenuProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MenuProvider>
  )
}

export default MyApp
