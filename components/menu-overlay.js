import useMenu from 'hooks/useMenu'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { gsap } from 'gsap'

import Contact from './contact'
import { HiX } from 'react-icons/hi'
import { useEffect } from 'react'

const NavItem = ({ route, isActive }) => {
  return (
    <div className="menu-item">
      <h1 className={`hover:cursor-pointer ${isActive && 'active'}`}>
        <Link href={route.route}>
          <a className="font-monument">{route.label}</a>
        </Link>
      </h1>
    </div>
  )
}

const Routes = [
  { label: 'Home', route: '/' },
  { label: 'Blog', route: '/blog' },
  { label: 'Projects', route: '/projects' }
]

const tl = gsap.timeline()

const MenuOverlay = () => {
  const { isOpen, setClose, isClose } = useMenu()
  const router = useRouter()

  useEffect(() => {
    // if (isOpen) {
    //   tl.from('#menu-overlay', {
    //     css: {
    //       display: 'none'
    //     },
    //     duration: 1.5,
    //     x: -2000,
    //     ease: 'power3.in'
    //   })
    //   tl.from(['.menu-item', '.social-links', '#close-btn'], {
    //     duration: 0.3,
    //     ease: 'power3.in',
    //     opacity: 0
    //   })
    // }
  }, [])

  const handleClose = () => {
    tl.to('#menu-overlay', {
      duration: 1,
      x: -2000,
      opacity: 0
    })

    setClose()
  }

  if (isClose) {
    return null
  }

  return (
    <div
      id="menu-overlay"
      className={`absolute h-screen w-full bg-black z-10 ${
        isOpen && 'overlay-open'
      }`}
    >
      <div className="px-8 py-10 relative lg:px-12 lg:py-10 h-full">
        <div className="flex flex-col h-full gap-10 lg:gap-0 lg:justify-between">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-start">
            <div className="flex flex-col flex-1 mt-10 lg:mt-20 md:mt-0 gap-4 md:gap-8 lg:gap-12 text-3xl md:text-4xl lg:text-6xl">
              {Routes.map((route, index) => (
                <NavItem
                  key={index}
                  route={route}
                  isActive={router.pathname === route.route}
                />
              ))}
            </div>

            <div className="self-end md:self-start">
              <button
                name="close button"
                role="button"
                aria-label="Close button"
                onClick={handleClose}
                id="close-btn"
              >
                <HiX
                  size={40}
                  className="transform duration-300 hover:rotate-180 "
                />
              </button>
            </div>
          </div>

          <div className="social-links">
            <div className="w-full h-[1px] rounded-full bg-neon bg-opacity-60 mb-10" />
            <div className="flex items-center">
              <Contact iconSize={30} />

              <div className="hidden md:inline-block tracking-widest text-center relative mt-auto">
                <span>ahmadmuslihzain</span>
              </div>
            </div>
          </div>

          <div className="md:hidden text-center relative mt-auto tracking-widest">
            <span>ahmadmuslihzain</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuOverlay
