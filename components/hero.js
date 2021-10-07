import HamburgerMenu from './hamburger-menu'

const Hero = () => {
  return (
    <div
      data-scroll-section
      id="hero"
      className="w-full bg-black h-screen flex items-center justify-center"
    >
      <div className="absolute inset-5">
        <div id="hero-main" className="absolute bg-darkBlue inset-0  flex-1">
          <main className="flex flex-col justify-between h-full  border border-neon p-5">
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
              <HamburgerMenu />
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
          </main>
        </div>

        <div className="hero-radial-bg" />
      </div>
    </div>
  )
}

export default Hero
