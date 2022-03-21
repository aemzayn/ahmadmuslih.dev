import type { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  defaultTitle: 'Ahmad Muslih Zain',
  description: "Ahmad Muslih Zain's personal website.",
  titleTemplate: '• %s — Ahmad Muslih Zain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmadmuslih.space/',
    site_name: 'Ahmad Muslih Zain',
  },
  twitter: {
    handle: '@aemzayn',
    site: '@site',
    cardType: 'summary_large_image',
  },
}

export default SEO
