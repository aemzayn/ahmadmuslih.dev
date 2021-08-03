const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-black relative flex items-center justify-center">
      <div className="absolute inset-5">
        <div className="absolute flex flex-col justify-between bg-darkBlue inset-0 p-5 flex-1 border border-neon">
          <div className="flex items-center justify-between text-neon">
            <button
              onClick={() => alert("click")}
              className="text-neon hover:text-white duration-100 text-lg font-walkway"
            >
              ahmadmuslihzain
            </button>
            <button onClick={() => alert("Website is on construction")}>
              <img
                src="/images/hamburger.png"
                alt="hamburger menu"
                className="w-10 h-10 hamburger-menu"
              />
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between relative">
            <div className="text-4xl md:text-8xl lg:text-9xl font-monument flex-1 select-none ">
              <h1 className="gradient-text">Front end</h1>
              <h1 className="gradient-text">Developer</h1>
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
  );
};

export default Hero;
