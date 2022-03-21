import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    if (cursorRef.current) {
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div className="custom-cursor hidden lg:block" ref={cursorRef}>
      <div className="grid h-10 w-10 place-items-center rounded-full bg-neutral-400 bg-opacity-20">
        <div className="h-1 w-1 rounded-full bg-white" />
      </div>
      {/* <img
        src="/images/ring.png"
        alt="ring"
        role="presentation"
        className="ringOne ring-cursor"
      />
      <img
        src="/images/ring.png"
        alt="ring"
        role="presentation"
        className="ringTwo ring-cursor"
      /> */}
    </div>
  )
}

export default CustomCursor
