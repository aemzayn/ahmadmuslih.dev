import dynamic from 'next/dynamic'
import MenuOverlay from './menu-overlay'

const CustomCursor = dynamic(() => import('./custom-cursor'), {
  ssr: false
})

export default function Layout({ children }) {
  return (
    <>
      <CustomCursor />
      <MenuOverlay />
      <div id="__app">{children}</div>
    </>
  )
}
