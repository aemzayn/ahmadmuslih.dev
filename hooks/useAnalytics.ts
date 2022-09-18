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
    if (typeof window !== undefined) {
      ;(window as any)?.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      })
    }
  }

  const handleRouteChange = (url: URL) => {
    pageview(url)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      router.events.on('routeChangeComplete', handleRouteChange)
    }
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events])
}

export default useAnalytics
