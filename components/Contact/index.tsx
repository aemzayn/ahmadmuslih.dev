import contacts from 'data/contact.json'
import { MdCopyright } from 'react-icons/md'

export interface ContactProps {}

const Contact = ({}: ContactProps) => {
  return (
    <section className="mx-10 mb-10 pt-40 pb-5" id="contact">
      <div className="flex w-full flex-1 items-baseline">
        {/* TODO: Add gradient border left nd right */}
        <div className="flex flex-1 items-center justify-between pr-10">
          <div className="flex items-center gap-3 font-walkway text-lg tracking-widest text-neon duration-100 hover:text-white">
            ahmadmuslihzain
            <MdCopyright className="fill-neon opacity-70" />
            {new Date().getFullYear()}
          </div>

          <div className="space-x-5">
            {Object.keys(contacts).map((platform) => (
              <a
                key={platform}
                href={contacts[platform]}
                className="font-walkway text-lg tracking-widest"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
        <button className="max-w-40 flex w-[15%] items-baseline justify-center">
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
        </button>
      </div>
    </section>
  )
}

export default Contact
