import CustomCursor from './custom-cursor'

export default function Layout({ children }) {
  return (
    <>
      <CustomCursor />
      <div>{children}</div>
    </>
  )
}
