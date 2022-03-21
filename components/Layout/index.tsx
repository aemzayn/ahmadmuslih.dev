import CustomCursor from '../CustomCursor'
import MenuOverlay from '../MenuOverlay'

export default function Layout({ children }) {
  return (
    <>
      <CustomCursor />
      <MenuOverlay />
      <div id="__app">{children}</div>
    </>
  )
}
