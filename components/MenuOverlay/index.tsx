import { useRouter } from 'next/router'
import { HiX } from 'react-icons/hi'
import { gsap } from 'gsap'
import useMenu from 'hooks/useMenu'
import Contact from '../Contact'
import { ROUTES } from 'constants/paths'

const NavItem = ({ route, isActive, router, setClose }) => {
  return (
    <div className="menu-item">
      <h1
        onClick={() => {
          router.push(route.route)
          setClose()
        }}
        className={`font-monument duration-150 hover:cursor-pointer hover:text-teal-500 ${
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
      opacity: 0,
    }).from('#hero', {
      duration: 0.3,
      opacity: 0,
    })

    setTimeout(() => {
      setClose()
    }, 300)
  }

  return (
    <div
      id="menu-overlay"
      className="absolute z-10 h-screen w-full bg-gradient-to-b  from-black to-darkBlue"
    >
      <div className="relative h-full px-8 py-10 lg:px-12 lg:py-10">
        <div className="flex h-full flex-col gap-10 lg:justify-between lg:gap-0">
          <div className="flex flex-col-reverse items-start justify-between lg:flex-row">
            <div className="mt-10 flex flex-col gap-4 text-3xl md:mt-0 md:gap-8 md:text-4xl lg:mt-20 lg:gap-12 lg:text-6xl">
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
            <div className="mb-10 h-1 w-full rounded-full bg-neon bg-opacity-60" />
            <div className="flex items-center">
              <Contact iconSize={30} />

              <div className="relative mt-auto hidden text-center tracking-widest md:inline-block">
                <span>ahmadmuslihzain</span>
              </div>
            </div>
          </div>

          <div className="relative mt-auto text-center tracking-widest md:hidden">
            <span>ahmadmuslihzain</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuOverlay
