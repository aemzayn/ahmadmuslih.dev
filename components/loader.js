import { domAnimation, LazyMotion, m } from "framer-motion";

const LoaderRevealInOut = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.77, 0, 0.175, 1],
      repeat: 1,
      repeatType: "reverse",
    },
  },
  exit: {
    y: "110%",
    transition: { duration: 0.2, ease: [0.77, 0, 0.175, 1] },
  },
};

export const LoaderRevealInOutReserve = {
  hidden: { y: "-110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.77, 0, 0.175, 1],
      repeat: 1,
      repeatType: "reverse",
    },
  },
  exit: {
    y: "-110%",
    transition: { duration: 0.2, ease: [0.77, 0, 0.175, 1] },
  },
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="h-screen w-full">
        <m.div>
          <m.aside
            variants={container}
            onAnimationComplete={() => setLoading(false)}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="flex items-center justify-center">
              <h1 className="text-center whitespace-nowrap leading-[0.85]">
                <h1 className="block relative overflow-hidden ">
                  <m.span variants={LoaderRevealInOut} className="inline-block">
                    Ahmad
                  </m.span>
                  <m.span
                    variants={LoaderRevealInOutReserve}
                    className="inline-block ml-2"
                  >
                    Muslih
                  </m.span>
                </h1>
              </h1>
            </div>
          </m.aside>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default Loader;
