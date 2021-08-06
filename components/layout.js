import dynamic from 'next/dynamic'

const CustomCursor = dynamic(() => import('./custom-cursor'), {
  ssr: false
})

export default function Layout({ children }) {
  return (
    <>
      <CustomCursor />
      <div>{children}</div>
    </>
  )
}
