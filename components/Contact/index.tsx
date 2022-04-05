import contacts from 'data/contact.json'
import cn from 'libs/cn'
import { MdCopyright } from 'react-icons/md'

export interface ContactProps {}

const Contact = ({}: ContactProps) => {
  return (
    <section className="mx-5 mb-10 pt-40 pb-5 lg:mx-10" id="contact">
      <div className="flex w-full flex-1 items-baseline">
        <div className="before:contents-[''] after:contents-[''] relative flex flex-1 flex-col items-center justify-between gap-y-2 px-2 pb-2 before:absolute before:bottom-0 before:left-0 before:h-10 before:w-[1px] before:bg-white before:bg-gradient-to-b before:from-darkBlue before:to-neon after:absolute after:right-0 after:bottom-0 after:h-10 after:w-[1px] after:bg-gradient-to-b after:from-darkBlue after:to-neon lg:flex-row lg:gap-y-0 lg:px-5 lg:pb-5 lg:before:h-16 lg:after:h-16">
          <div className="flex items-center gap-3 font-walkway text-sm tracking-widest text-neon duration-100 hover:text-white lg:text-lg">
            ahmadmuslihzain
            <MdCopyright className="fill-neon opacity-70" />
            {new Date().getFullYear()}
          </div>

          <div className="flex items-center gap-x-5 lg:gap-x-10">
            {Object.keys(contacts).map((platform, i) => (
              <div key={platform} className="inline-flex items-center">
                <span
                  className={cn(
                    i > 0 && 'mr-5 h-1 w-1 rounded-full bg-white lg:mr-10'
                  )}
                />
                <a
                  href={contacts[platform]}
                  className="font-walkway text-sm tracking-widest text-neon lg:text-lg"
                >
                  {platform}
                </a>
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-neon" />
        </div>
        <a
          href="#hero"
          className="max-w-40 hidden w-[15%] items-baseline justify-center lg:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="283.378"
            height="309.979"
            viewBox="0 0 283.378 309.979"
          >
            <defs>
              <linearGradient
                id="a"
                x1="0.5"
                y1="0.982"
                x2="0.5"
                y2="0.057"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#12161f" />
                <stop offset="1" stopColor="#80ffdb" />
              </linearGradient>
            </defs>
            <path
              d="M-1125.186,25V-246.962l-117.546,117.546-14.143-14.142,141.422-141.421.267.267.267-.267L-973.5-143.558l-14.142,14.143-117.547-117.547V25Z"
              transform="translate(1256.875 284.979)"
              fill="url(#a)"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Contact
