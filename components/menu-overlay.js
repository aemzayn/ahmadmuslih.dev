import useMenu from 'hooks/useMenu'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Contact from './contact'
import { HiX } from 'react-icons/hi'

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

const MenuOverlay = () => {
  const { isOpen, setClose } = useMenu()
  const router = useRouter()

  return (
    <div
      id="menu-overlay"
      className={`absolute h-screen w-full bg-darkBlue z-10 ${
        isOpen && 'overlay-open'
      }`}
    >
      <div className="lg:px-36 lg:py-40 h-full">
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div className="flex flex-col flex-1 lg:gap-12 lg:text-6xl">
              {Routes.map((route, index) => (
                <NavItem
                  key={index}
                  route={route}
                  isActive={router.pathname === route.route}
                />
              ))}
            </div>

            <div>
              <button
                name="close button"
                role="button"
                aria-label="Close button"
                onClick={setClose}
              >
                <HiX
                  size={40}
                  className="transform duration-300 hover:rotate-180 "
                />
              </button>
            </div>
          </div>

          <div className="">
            <Contact iconSize={30} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuOverlay
