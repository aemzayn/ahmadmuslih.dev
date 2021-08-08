import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

const useAnalytics = () => {
  const router = useRouter()
  const pageview = (url) => {
    window?.gtag('config', GA_TRACKING_ID, {
      page_path: url
    })
  }

  const event = ({ action, category, label, value }) => {
    window?.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
  }

  const handleRouteChange = (url) => {
    pageview(url)
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}

export default useAnalytics
