import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)

  const onMouseMove = (event) => {
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
