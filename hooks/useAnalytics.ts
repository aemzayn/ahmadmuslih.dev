import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export type GTagEvent = {
  action?: string
  category?: string
  label?: string
  value?: number
}

const useAnalytics = () => {
  const router = useRouter()
  const pageview = (url: URL) => {
    ;(window as any)?.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }

  const event = ({ action, category, label, value }: GTagEvent) => {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events])
}

export default useAnalytics
