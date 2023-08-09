import Image from 'next/image'
import tailwindSVG from '../svg/tailwind.svg'

export const TailwindIcon = ({ width = 100, height = 100 }) => (
  <Image
    src={tailwindSVG}
    alt="Tailwind CSS Icon"
    width={width}
    height={height}
  />
)
