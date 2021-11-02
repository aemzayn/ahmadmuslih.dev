import { useRouter } from 'next/router'
import { HiX } from 'react-icons/hi'
import { gsap } from 'gsap'
import useMenu from 'hooks/useMenu'
import Contact from './contact'
import { ROUTES } from '@/constants/navigation'

const NavItem = ({ route, isActive, router, setClose }) => {
  return (
    <div className="menu-item">
      <h1
        onClick={() => {
          router.push(route.route)
          setClose()
        }}
        className={`duration-150 hover:cursor-pointer hover:text-teal-500 font-monument ${
          isActive && 'active'
        }`}
      >
        {route.label}
      </h1>
    </div>
  )
}

const MenuOverlay = () => {
  const { setClose } = useMenu()
  const router = useRouter()
  const tl = gsap.timeline()

  const handleClose = () => {
    tl.to('#menu-overlay', {
      duration: 0.3,
      opacity: 0
    }).from('#hero', {
      duration: 0.3,
      opacity: 0
    })

    setTimeout(() => {
      setClose()
    }, 300)
  }

  return (
    <div
      id="menu-overlay"
      className="absolute h-screen w-full bg-gradient-to-b from-black  to-darkBlue z-10"
    >
      <div className="px-8 py-10 relative lg:px-12 lg:py-10 h-full">
        <div className="flex flex-col h-full gap-10 lg:gap-0 lg:justify-between">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-start">
            <div className="flex flex-col mt-10 lg:mt-20 md:mt-0 gap-4 md:gap-8 lg:gap-12 text-3xl md:text-4xl lg:text-6xl">
              {ROUTES.map((route) => (
                <NavItem
                  key={route.route}
                  route={route}
                  isActive={router.pathname === route.route}
                  router={router}
                  setClose={setClose}
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
                  fill="#80FFDB"
                  className="transform duration-300 hover:rotate-180 "
                />
              </button>
            </div>
          </div>

          <div className="social-links">
            <div className="w-full h-1 rounded-full bg-neon bg-opacity-60 mb-10" />
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
