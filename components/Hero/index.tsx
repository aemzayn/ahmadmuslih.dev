import HamburgerMenu from '../HamburgerMenu/'

const Hero = () => {
  return (
    <div
      data-scroll-section
      id="hero"
      className="flex h-screen w-full items-center justify-center bg-black"
    >
      <div className="absolute inset-5">
        <div id="hero-main" className="absolute inset-0 flex-1  bg-darkBlue">
          <main className="flex h-full flex-col justify-between  border border-neon p-5">
            <div className="flex items-center justify-between text-neon">
              <button
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-2"
                data-scroll-position="top"
                data-scroll-target="#hero"
                className="font-walkway text-lg tracking-widest text-neon duration-100 hover:text-white"
              >
                ahmadmuslihzain
              </button>
              <HamburgerMenu />
            </div>
            <div className="relative flex flex-col justify-between md:flex-row md:items-end">
              <div className="flex-1 select-none  font-monument text-4xl md:text-8xl lg:text-9xl ">
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
                className="cursor-pointer font-walkway tracking-wider text-neon duration-100 hover:text-white md:hidden"
              >
                ahmadmuslihzain@gmail.com
              </a>
              <a
                href="mailto:ahmadmuslihzain@gmail.com"
                className="vertical-text hidden cursor-pointer font-walkway tracking-wider text-neon duration-100 hover:text-white md:block"
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
