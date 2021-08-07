import { gsap } from 'gsap'
import useMenu from 'hooks/useMenu'

const Hero = () => {
  const { setOpen } = useMenu()
  const tl = gsap.timeline()
  const openMenu = () => {
    setOpen()
    tl.to('#menu-overlay', {
      duration: 1,
      opacity: 1
    })
  }

  return (
    <div
      data-scroll-section
      id="hero"
      className="w-full bg-black h-screen flex items-center justify-center"
    >
      <div className="absolute inset-5">
        <div
          id="hero-main"
          className="absolute flex flex-col justify-between bg-darkBlue inset-0 p-5 flex-1 border border-neon"
        >
          <div className="flex items-center justify-between text-neon">
            <button
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-2"
              data-scroll-position="top"
              data-scroll-target="#hero"
              className="text-neon hover:text-white duration-100 text-lg font-walkway tracking-widest"
            >
              ahmadmuslihzain
            </button>
            <button onClick={openMenu}>
              <img
                src="/images/hamburger.png"
                alt="hamburger menu"
                className="w-8 h-8 md:w-10 md:h-10 hamburger-menu"
              />
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between relative">
            <div className="text-4xl md:text-8xl  lg:text-9xl font-monument flex-1 select-none ">
              <h1
                data-scroll
                data-scroll-speed={5}
                data-scroll-target="#hero"
                className="gradient-text"
              >
                Front end
              </h1>
              <h1
                data-scroll
                data-scroll-speed={8}
                data-scroll-target="#hero"
                className="gradient-text"
              >
                Developer
              </h1>
            </div>
            <a
              href="mailto:ahmadmuslihzain@gmail.com"
              className="md:hidden tracking-wider text-neon cursor-pointer font-walkway hover:text-white duration-100"
            >
              ahmadmuslihzain@gmail.com
            </a>
            <a
              href="mailto:ahmadmuslihzain@gmail.com"
              className="hidden tracking-wider md:block vertical-text text-neon cursor-pointer font-walkway hover:text-white duration-100"
            >
              ahmadmuslihzain@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
