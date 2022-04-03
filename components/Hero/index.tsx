import HamburgerMenu from '../HamburgerMenu/'

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex h-screen w-full items-center justify-center bg-black"
    >
      <div className="absolute inset-5">
        <div id="hero-main" className="absolute inset-0 flex-1 bg-darkBlue">
          <main className="flex h-full flex-col justify-between border border-neon p-5">
            <div className="flex items-center justify-between text-neon">
              <button className="font-walkway text-lg tracking-widest text-neon duration-100 hover:text-white">
                ahmadmuslihzain
              </button>
              <HamburgerMenu />
            </div>
            <div className="relative flex flex-col justify-between md:flex-row md:items-end">
              <div className="flex-1 select-none  font-monument text-4xl md:text-8xl lg:text-9xl ">
                <h1 className="gradient-text">Software</h1>
                <h1 className="gradient-text">Developer</h1>
              </div>
              <a
                href="mailto:ahmad.muslih22@gmail.com"
                className="cursor-pointer font-walkway tracking-wider text-neon duration-100 hover:text-white md:hidden"
              >
                ahmad.muslih22@gmail.com
              </a>
              <a
                href="mailto:ahmad.muslih22@gmail.com"
                className="vertical-text hidden cursor-pointer font-walkway tracking-wider text-neon duration-100 hover:text-white md:block"
              >
                ahmad.muslih22@gmail.com
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
